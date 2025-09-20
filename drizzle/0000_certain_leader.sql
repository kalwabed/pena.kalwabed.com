CREATE TABLE `guest_books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`body` text NOT NULL,
	`email` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `views` (
	`slug` text PRIMARY KEY NOT NULL,
	`count` integer DEFAULT 0 NOT NULL
);
