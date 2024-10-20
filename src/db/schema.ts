import {
  integer,
  text,
  boolean,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";

export const userTable = pgTable("userTable", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
  hash_password: boolean("hash_password").notNull(),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expriesAt: timestamp("experies_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
