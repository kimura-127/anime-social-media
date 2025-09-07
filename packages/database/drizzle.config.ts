import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/schema/*',
  out: './migrations',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    // Cloudflare D1用の設定（後でworkersアプリ作成時に設定）
    // accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    // databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    // token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
  verbose: true,
  strict: true,
})