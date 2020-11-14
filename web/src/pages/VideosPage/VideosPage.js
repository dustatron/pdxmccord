import VideosLayout from 'src/layouts/VideosLayout'
import VideosCell from 'src/components/VideosCell'
import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

const VideosPage = () => {
  return (
    <StandardLayout>
      <VideosLayout>
        <VideosCell />
      </VideosLayout>
    </StandardLayout>
  )
}

export default VideosPage
