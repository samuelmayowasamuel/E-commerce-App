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
  createdAt: integer("created_at")
    .notNull()
    .default(Math.floor(Date.now() / 1000)),
  updatedAt: integer("updated_at")
    .notNull()
    .default(Math.floor(Date.now() / 1000)),
});

export const createProductSchema = createSelectSchema(productsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateProductSchema = createSelectSchema(productsTable)
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
  .partial();

export const usersTable = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  createdAt: integer("created_at")
    .notNull()
    .default(Math.floor(Date.now() / 1000)),
  updatedAt: integer("updated_at")
    .notNull()
    .default(Math.floor(Date.now() / 1000)),
});

export const createUserSchema = createSelectSchema(usersTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  passwordHash: true,
});

export const updateUserSchema = createSelectSchema(usersTable)
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    passwordHash: true,
  })
  .partial();
