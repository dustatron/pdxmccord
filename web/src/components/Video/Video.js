import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/VideosCell'

const DELETE_VIDEO_MUTATION = gql`
  mutation DeleteVideoMutation($id: Int!) {
    deleteVideo(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Video = ({ video }) => {
  const { addMessage } = useFlash()
  const [deleteVideo] = useMutation(DELETE_VIDEO_MUTATION, {
    onCompleted: () => {
      navigate(routes.videos())
      addMessage('Video deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete video ' + id + '?')) {
      deleteVideo({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Video {video.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{video.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{video.title}</td>
            </tr>
            <tr>
              <th>Link</th>
              <td>{video.link}</td>
            </tr>
            <tr>
              <th>Img</th>
              <td>{video.img}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{video.type}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{video.body}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(video.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVideo({ id: video.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(video.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Video
