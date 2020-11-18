// youtube example
//https://img.youtube.com/vi/5XjdSzSPZRg/mqdefault.jpg
//https://www.youtube.com/watch?v=5XjdSzSPZRg

//https://www.youtube.com/watch?v=5XjdSzSPZRg

// video example
// returns json
//https://vimeo.com/api/v2/video/474031157.json
//https://vimeo.com/474031157

const imgHelper = async (link) => {
  const isYouTube = link.toLowerCase().includes('youtube')
  const isVimeo = link.toLowerCase().includes('vimeo')

  if (isYouTube) {
    if (link.includes('v=')) {
      const startOfId = link.split('v=')[1]
      const endOfId = startOfId.indexOf('&')
      const vidId = startOfId.substring(
        0,
        endOfId > 0 ? endOfId : startOfId.length
      )

      const thumbnailLink = `https://img.youtube.com/vi/${vidId.trim()}/maxresdefault.jpg`
      return thumbnailLink
    }
    return false
  } else if (isVimeo) {
    const vidId = link.split('/')[3].trim()
    try {
      const response = await fetch(
        `https://vimeo.com/api/v2/video/${vidId}.json`
      )
      const json = await response.json()
      const thumbnailLink = await json[0]['thumbnail_large']
      console.log('vimeo', thumbnailLink)
      return await thumbnailLink
    } catch (error) {
      console.error('Vimeo api returned error', error)
      return false
    }
  }
  return false
}

export default imgHelper
