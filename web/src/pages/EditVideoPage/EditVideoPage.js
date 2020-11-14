import VideosLayout from 'src/layouts/VideosLayout'
import EditVideoCell from 'src/components/EditVideoCell'

const EditVideoPage = ({ id }) => {
  return (
    <VideosLayout>
      <EditVideoCell id={id} />
    </VideosLayout>
  )
}

export default EditVideoPage
