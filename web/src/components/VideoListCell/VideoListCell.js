import { useContext } from 'react'
import VideoList from 'src/components/VideoList'
import { Grid, Loader } from 'semantic-ui-react'

import { ListUpdateContext } from 'src/context/SelectedContext'

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
      year
    }
  }
`

export const Loading = () => (
  <Grid.Row className="list-spinner">
    <Loader active inverted size="massive">
      Loading
    </Loader>
  </Grid.Row>
)

export const Empty = () => (
  <>
    <div>No videos.</div>
  </>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ videos, handleClick }) => {
  const updateList = useContext(ListUpdateContext)
  updateList(videos)

  return <VideoList handleSelected={handleClick} videos={videos} />
}
