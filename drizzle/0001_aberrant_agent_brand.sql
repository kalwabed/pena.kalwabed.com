ALTER TABLE `views` RENAME COLUMN "count" TO "counter";--> statement-breakpoint
ALTER TABLE `views` ALTER COLUMN "counter" TO "counter" integer;