CREATE TABLE "appointments" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "number" VARCHAR (100),
    "date" VARCHAR (100),
    "time_id" INT NOT NULL REFERENCES "times_available" ON DELETE CASCADE,
);

CREATE TABLE "time_available" (
    "id" SERIAL PRIMARY KEY,
    "time" VARCHAR (100) NOT NULL,
    "taken" BOOLEAN DEFAULT FALSE
);

-- INSERT INTO "appointments"
--   ("name", "number", "date")
--   VALUES 
--   ('', '', '');

  INSERT INTO "time_available" 
	("time", "taken")
	VALUES 
  ('10:00 AM', FALSE),
  ('10:30 AM', FALSE),
  ('11:00 AM', FALSE),
  ('11:30 AM', FALSE),
  ('12:00', FALSE),
  ('12:30 PM', FALSE),
  ('1:00 PM', FALSE),
  ('1:30 PM', FALSE),
  ('2:00 PM', FALSE),
  ('2:30 PM', FALSE),
  ('3:00 PM', FALSE),
  ('3:30 PM', FALSE),
  ('4:00 PM', FALSE),
  ('4:30 PM', FALSE),
  ('5:00 PM', FALSE),
  ('5:30 PM', FALSE),
  ('6:00 PM', FALSE);
