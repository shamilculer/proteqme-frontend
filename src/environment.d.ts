declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URI: string
      DATABASE_URL: string
      NEXT_PUBLIC_SERVER_URL: string
      PREVIEW_SECRET: string
      CRON_SECRET: string
      STORAGE_ADAPTER: 'cloudinary' | 's3'
      CLOUDINARY_CLOUD_NAME: string
      CLOUDINARY_API_KEY: string
      CLOUDINARY_API_SECRET: string
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string
      VERCEL_PROJECT_PRODUCTION_URL: string
    }
  }
}

export {}
