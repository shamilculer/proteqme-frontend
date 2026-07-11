const YOUTUBE_ID_PATTERN = /^[\w-]{11}$/

const YOUTUBE_URL_PATTERNS = [
  /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.*&v=)([\w-]{11})/,
  /youtu\.be\/([\w-]{11})/,
  /youtube\.com\/embed\/([\w-]{11})/,
  /youtube\.com\/shorts\/([\w-]{11})/,
]

export const YOUTUBE_THUMBNAIL_QUALITIES = [
  'maxresdefault',
  'hqdefault',
  'mqdefault',
]

/**
 * Extract a YouTube video ID from a bare ID or common URL formats.
 */
export function parseYouTubeVideoId(value) {
  if (value === undefined || value === null) return null

  const trimmed = String(value).trim()
  if (!trimmed) return null

  if (YOUTUBE_ID_PATTERN.test(trimmed)) return trimmed

  for (const pattern of YOUTUBE_URL_PATTERNS) {
    const match = trimmed.match(pattern)
    if (match?.[1]) return match[1]
  }

  return null
}

export function getYouTubeThumbnailUrl(videoId, quality = 'maxresdefault') {
  const id = parseYouTubeVideoId(videoId)
  if (!id) return null

  return `https://img.youtube.com/vi/${id}/${quality}.jpg`
}

export function getYouTubeWatchUrl(videoId) {
  const id = parseYouTubeVideoId(videoId)
  if (!id) return null

  return `https://www.youtube.com/watch?v=${id}`
}
