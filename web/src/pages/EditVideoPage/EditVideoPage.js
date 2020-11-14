import VideosLayout from 'src/layouts/VideosLayout'
import EditVideoCell from 'src/components/EditVideoCell'
import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

const EditVideoPage = ({ id }) => {
  return (
    <StandardLayout>
      <VideosLayout>
        <EditVideoCell id={id} />
      </VideosLayout>
    </StandardLayout>
  )
}

export default EditVideoPage
