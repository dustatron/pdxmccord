import VideoList from 'src/components/VideoList'
export const QUERY = gql`
  query VideoListQuery {
    videos {
      id
      title
      link
      img
      body
      createdAt
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ videos, handleClick }) => {
  return <VideoList handleSelected={handleClick} videos={videos} />
}
