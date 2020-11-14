import Player from 'src/components/Player'
import VideoListCell from 'src/components/VideoListCell'
import { Grid } from 'semantic-ui-react'

import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

// import { Button } from 'semantic-ui-react'

const HomePage = () => {
  return (
    <StandardLayout>
      <Grid>
        <Player />

        <Grid.Row columns={4}>
          <VideoListCell />
        </Grid.Row>
      </Grid>
    </StandardLayout>
  )
}

export default HomePage
