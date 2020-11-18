import { useContext } from 'react'
import VideoList from 'src/components/VideoList'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

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
  <>
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    </Segment>
  </>
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
