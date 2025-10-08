import {
  integer,
  pgTable,
  text,
  varchar,
  doublePrecision,
} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 255 }),
  price: doublePrecision().notNull().notNull(),
  quantity: integer("quantity").notNull().default(0),
});
