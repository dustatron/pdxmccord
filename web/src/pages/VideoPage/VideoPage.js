import VideosLayout from 'src/layouts/VideosLayout'
import VideoCell from 'src/components/VideoCell'

const VideoPage = ({ id }) => {
  return (
    <VideosLayout>
      <VideoCell id={id} />
    </VideosLayout>
  )
}

export default VideoPage
