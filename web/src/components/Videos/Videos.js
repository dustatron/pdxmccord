import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/VideosCell'

const DELETE_VIDEO_MUTATION = gql`
  mutation DeleteVideoMutation($id: Int!) {
    deleteVideo(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const VideosList = ({ videos }) => {
  const { addMessage } = useFlash()
  const [deleteVideo] = useMutation(DELETE_VIDEO_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Link</th>
            <th>Img</th>
            <th>Type</th>
            <th>Body</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id}>
              <td>{truncate(video.id)}</td>
              <td>{truncate(video.title)}</td>
              <td>{truncate(video.link)}</td>
              <td>{truncate(video.img)}</td>
              <td>{truncate(video.type)}</td>
              <td>{truncate(video.body)}</td>
              <td>{timeTag(video.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.video({ id: video.id })}
                    title={'Show video ' + video.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVideo({ id: video.id })}
                    title={'Edit video ' + video.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete video ' + video.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(video.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VideosList
