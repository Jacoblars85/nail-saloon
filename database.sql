CREATE DATABASE "nail_saloon";

CREATE TABLE "appointments" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "number" VARCHAR (100),
    "date" VARCHAR (100),
);

INSERT INTO "appointments"
  ("name", "number", "date")
  VALUES 
  ('', '', '')
