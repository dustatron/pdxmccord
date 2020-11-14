import VideosLayout from 'src/layouts/VideosLayout'
import NewVideo from 'src/components/NewVideo'
import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

const NewVideoPage = () => {
  return (
    <StandardLayout>
      <VideosLayout>
        <NewVideo />
      </VideosLayout>
    </StandardLayout>
  )
}

export default NewVideoPage
