import { useContext } from 'react'
import { Grid, Card } from 'semantic-ui-react'
import { SelectedUpdateContext } from 'src/context/SelectedContext'
import { useLoadingUpdateState } from 'src/context/SelectedContext'

const VideoList = ({ videos }) => {
  const updateLoading = useLoadingUpdateState()
  const updateSelected = useContext(SelectedUpdateContext)
  return (
    <Grid.Row stackable columns={3} centered>
      {videos &&
        videos.map((vid) => (
          <Grid.Column key={vid.id} className="list">
            <Card
              onClick={() => {
                updateSelected(vid.link)
                updateLoading(true)
              }}
              fluid
              image={vid.img}
              header={vid.title}
              meta={vid.type}
              description={vid.body}
              // extra={extra}
            />
            {/* <h2>{vid.title}</h2>

            <Image
              src={vid.img}
              size="small"
              onClick={(e) => {
                updateSelected(e)
                updateLoading(true)
              }}
              name={vid.link}
            /> */}
          </Grid.Column>
        ))}
    </Grid.Row>
  )
}

export default VideoList
