ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT 1760177331;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 1760177331;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "updated_at" integer DEFAULT 1760177331 NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" integer DEFAULT 1760177331 NOT NULL;