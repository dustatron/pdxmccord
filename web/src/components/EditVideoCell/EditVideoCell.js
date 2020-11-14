import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VideoForm from 'src/components/VideoForm'

export const QUERY = gql`
  query FIND_VIDEO_BY_ID($id: Int!) {
    video: video(id: $id) {
      id
      title
      link
      img
      type
      body
      createdAt
    }
  }
`
const UPDATE_VIDEO_MUTATION = gql`
  mutation UpdateVideoMutation($id: Int!, $input: UpdateVideoInput!) {
    updateVideo(id: $id, input: $input) {
      id
      title
      link
      img
      type
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ video }) => {
  const { addMessage } = useFlash()
  const [updateVideo, { loading, error }] = useMutation(UPDATE_VIDEO_MUTATION, {
    onCompleted: () => {
      navigate(routes.videos())
      addMessage('Video updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateVideo({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Video {video.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VideoForm
          video={video}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
