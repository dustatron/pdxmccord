import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VideoForm from 'src/components/VideoForm'

import { QUERY } from 'src/components/VideosCell'

const CREATE_VIDEO_MUTATION = gql`
  mutation CreateVideoMutation($input: CreateVideoInput!) {
    createVideo(input: $input) {
      id
    }
  }
`

const NewVideo = () => {
  const { addMessage } = useFlash()
  const [createVideo, { loading, error }] = useMutation(CREATE_VIDEO_MUTATION, {
    onCompleted: () => {
      navigate(routes.videos())
      addMessage('Video created.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onSave = (input) => {
    createVideo({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Video</h2>
      </header>
      <div className="rw-segment-main">
        <VideoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVideo
