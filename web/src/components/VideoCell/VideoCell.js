import Video from 'src/components/Video'

export const QUERY = gql`
  query FIND_VIDEO_BY_ID($id: Int!) {
    video: video(id: $id) {
      id
      title
      link
      img
      year
      type
      body
      year
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Video not found</div>

export const Success = ({ video }) => {
  return <Video video={video} />
}
