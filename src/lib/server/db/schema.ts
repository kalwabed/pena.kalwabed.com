import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const guestBooks = sqliteTable('guest_books', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  body: text('body').notNull(),
  email: text('email').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .notNull()
    .$default(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export const views = sqliteTable('views', {
  slug: text('slug').primaryKey(),
  counter: integer('counter'),
});

export type SelectViews = typeof views.$inferSelect;
export type InsertViews = typeof views.$inferInsert;
