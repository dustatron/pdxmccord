import { useState } from 'react'

import Player from 'src/components/Player'
import VideoList from 'src/components/VideoList'
import { Container, Grid } from 'semantic-ui-react'

// import { Button } from 'semantic-ui-react'

const HomePage = () => {
  const vidLink = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  const [selectedVideo, setSelectedVideo] = useState(vidLink)

  const handleClick = (e) => {
    setSelectedVideo(e.target.name)
  }

  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <h1>PDX McCord</h1>
        </Grid.Row>
        <Grid.Row>
          <Player video={selectedVideo} />
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <VideoList handleSelected={handleClick} />
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HomePage
