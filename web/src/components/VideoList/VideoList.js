import { useContext } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { SelectedUpdateContext } from 'src/context/SelectedContext'
import { useLoadingUpdateState } from 'src/context/SelectedContext'

const VideoList = ({ videos }) => {
  const updateLoading = useLoadingUpdateState()
  const updateSelected = useContext(SelectedUpdateContext)
  return (
    <>
      {videos &&
        videos.map((vid) => (
          <Grid.Column key={vid.id}>
            <h2>{vid.title}</h2>

            <Image
              src={vid.img}
              size="small"
              onClick={(e) => {
                updateSelected(e)
                updateLoading(true)
              }}
              name={vid.link}
            />
          </Grid.Column>
        ))}
    </>
  )
}

export default VideoList
