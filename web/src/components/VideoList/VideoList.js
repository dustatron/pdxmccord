import { useContext } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { SelectedUpdateContext } from 'src/context/SelectedContext'

const VideoList = ({ videos }) => {
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
              onClick={updateSelected}
              name={vid.link}
            />
          </Grid.Column>
        ))}
    </>
  )
}

export default VideoList
