CREATE TABLE IF NOT EXISTS "users" (
	"_id" serial NOT NULL,
	"username" varchar UNIQUE,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL
);
