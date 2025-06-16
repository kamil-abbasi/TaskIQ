import { boolean, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const tasksTable = pgTable('tasks', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  completed: boolean().notNull().default(false),
});
