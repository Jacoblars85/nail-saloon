const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get("/open/appointments", (req, res) => {
  // console.log('im in open appointments route');

  const query = `
SELECT *
FROM generate_series(
  '2026-01-08 10:00'::timestamp,
  '2026-01-08 18:00'::timestamp,
  interval '30 minutes'
) AS slot
WHERE slot NOT IN (
  SELECT "start_time" FROM "appointments"
);

    `;

  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all open appointments", err);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;
