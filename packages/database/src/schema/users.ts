import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createId } from '@paralleldrive/cuid2'

export const userRoleEnum = ['admin', 'user'] as const
export type UserRole = typeof userRoleEnum[number]

export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  role: text('role', { enum: userRoleEnum })
    .notNull()
    .default('user'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date()),
  deletedAt: integer('deleted_at', { mode: 'timestamp' })
})

export type User = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert
export type UserWithoutTimestamps = Omit<User, 'createdAt' | 'updatedAt' | 'deletedAt'>
export type CreateUser = Pick<InsertUser, 'name' | 'email' | 'role'>