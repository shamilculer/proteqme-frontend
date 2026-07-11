import type { ConnectOptions } from 'mongoose'

/**
 * Mongoose connect options for MongoDB Atlas / local dev.
 * SSL alert 80 on Windows usually means Atlas Network Access is blocking this IP,
 * or the cluster hostname no longer exists (paused/deleted cluster).
 */
export function getMongoConnectOptions(): ConnectOptions {
  const isSrv = process.env.DATABASE_URI?.startsWith('mongodb+srv://')

  return {
    // Prefer IPv4 — avoids some Windows + Atlas TLS handshake failures
    family: 4,
    serverSelectionTimeoutMS: 15_000,
    connectTimeoutMS: 15_000,
    ...(isSrv ? { tls: true } : {}),
  }
}

export function getMongoConnectionHint(error: unknown): string | null {
  const message = error instanceof Error ? error.message : String(error)

  if (
    message.includes('SSL routines') ||
    message.includes('tlsv1 alert internal') ||
    message.includes('MongoServerSelectionError')
  ) {
    return [
      'MongoDB connection failed. Common fixes:',
      '1. In MongoDB Atlas → Network Access, add your current IP (or 0.0.0.0/0 for dev).',
      '2. Confirm the cluster is running and copy a fresh connection string from Atlas → Connect.',
      '3. For local dev without Atlas, use: mongodb://127.0.0.1:27017/proteq',
    ].join('\n')
  }

  if (message.includes('ENOTFOUND') || message.includes('querySrv')) {
    return [
      'MongoDB hostname could not be resolved.',
      'The cluster may be deleted, paused, or the DATABASE_URI hostname is wrong.',
      'Open Atlas → Database → Connect and copy the current connection string.',
    ].join('\n')
  }

  return null
}
