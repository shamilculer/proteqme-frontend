import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'
import { v2 as cloudinary } from 'cloudinary'

const getCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })

  return cloudinary
}

const toPublicId = (filename: string, prefix?: string) => {
  const base = filename.replace(/\.[^/.]+$/, '')
  return prefix ? `${prefix}/${base}` : `proteq/media/${base}`
}

export const cloudinaryStorageAdapter: Adapter = ({ prefix }) => ({
  name: 'cloudinary',
  async handleUpload({ file }) {
    const cl = getCloudinary()

    await new Promise<void>((resolve, reject) => {
      const uploadStream = cl.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: prefix || 'proteq/media',
          public_id: file.filename.replace(/\.[^/.]+$/, ''),
        },
        (error) => {
          if (error) reject(error)
          else resolve()
        },
      )

      uploadStream.end(file.buffer)
    })
  },
  async handleDelete({ filename }) {
    const cl = getCloudinary()
    await cl.uploader.destroy(toPublicId(filename, prefix), { resource_type: 'image' })
  },
  generateURL({ filename }) {
    const cl = getCloudinary()
    return cl.url(toPublicId(filename, prefix), { secure: true })
  },
  staticHandler: () => new Response('Not Found', { status: 404 }),
})

export const getCloudinaryMediaUrl = (
  filename: string,
  size?: { width?: number | null; height?: number | null; crop?: string | null },
) => {
  const cl = getCloudinary()
  const base = filename.replace(/\.[^/.]+$/, '').replace(/-\d+x\d+$/, '')
  const publicId = toPublicId(base)

  if (size?.width) {
    return cl.url(publicId, {
      secure: true,
      transformation: [
        {
          width: size.width,
          ...(size.height ? { height: size.height } : {}),
          crop: size.crop || 'limit',
        },
      ],
    })
  }

  return cl.url(publicId, { secure: true })
}

export function isCloudinaryConfigured() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  return Boolean(
    cloudName &&
      apiKey &&
      apiSecret &&
      cloudName !== 'your-cloud-name' &&
      !apiKey.startsWith('your-'),
  )
}
