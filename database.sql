CREATE TABLE "appointments" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "phone" VARCHAR(20) NOT NULL,
  "start_time" TIMESTAMP NOT NULL
);

INSERT INTO "appointments" 
("name", "phone", "start_time")
VALUES 
('Jane Doe', '555-1234', '2026-01-08 10:00');