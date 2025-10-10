import {
  integer,
  pgTable,
  text,
  varchar,
  doublePrecision,
} from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image"),
  price: doublePrecision().notNull().notNull(),
  quantity: integer("quantity").notNull().default(0),
});

export const createProductSchema = createSelectSchema(productsTable).omit({
  id: true,
});

export const updateProductSchema = createSelectSchema(productsTable)
  .omit({
    id: true,
  })
  .partial();
