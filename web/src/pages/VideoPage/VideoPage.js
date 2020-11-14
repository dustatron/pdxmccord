import VideosLayout from 'src/layouts/VideosLayout'
import VideoCell from 'src/components/VideoCell'
import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

const VideoPage = ({ id }) => {
  return (
    <StandardLayout>
      <VideosLayout>
        <VideoCell id={id} />
      </VideosLayout>
    </StandardLayout>
  )
}

export default VideoPage
