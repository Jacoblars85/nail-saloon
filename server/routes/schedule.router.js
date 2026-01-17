const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/open/appointments/:id", (req, res) => {
  // console.log('im in open appointments route');

  const query = `
SELECT *
FROM generate_series(
  $1::date + time '10:00',
  $1::date + time '18:00',
  interval '30 minutes'
) AS slot
WHERE slot NOT IN (
  SELECT "start_time" FROM "appointments"
);
    `;

  const sqlValues = [req.params.id];

  pool
    .query(query, sqlValues)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all open appointments", err);
      res.sendStatus(500);
    });
});

router.get("/booked/appointments", (req, res) => {
  // console.log('im in open appointments route');

  const query = `
SELECT *
FROM "appointments";
    `;

  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all booked appointments", err);
      res.sendStatus(500);
    });
});

router.post("/new/appointment", (req, res) => {
  // console.log("req.body", req.body);

  const sqlText = `
          INSERT INTO "appointments" 
("name", "phone", "start_time")
VALUES 
($1, $2, $3);
            `;

  const sqlValues = [
    req.body.nameInput,
    req.body.phoneInput,
    req.body.timeInput,
  ];

  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in schedule.router /new/appointment POST,", err);
      res.sendStatus(500);
    });
});

router.put("/edit/appointment", (req, res) => {
  const sqlText = `
        UPDATE "appointments"
          SET "name" = $1, "phone" = $2, "start_time" = $3
          WHERE "id" = $4;
          `;

  const sqlValues = [
    req.body.nameInput,
    req.body.phoneInput,
    req.body.timeInput,
    req.body.appointmentID,
  ];

  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in schedule.router /edit/appointment PUT,", err);
      res.sendStatus(500);
    });
});

router.delete("/appointment", (req, res) => {
  const sqlText = `
    DELETE FROM "appointments"
      WHERE "id" = $1;
      `;

  const sqlValues = [req.body.appointmentID];

  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in schedule.router DELETE, deleting appointment", err);
      res.sendStatus(500);
    });
});

module.exports = router;
