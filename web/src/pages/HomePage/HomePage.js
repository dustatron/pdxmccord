import { useState } from 'react'

import Player from 'src/components/Player'

import { Container } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react'

const HomePage = () => {
  const vidLink = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  const [state, setState] = useState(vidLink)

  const handleClick = (e) => {
    setState(e.target.name)
  }

  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <h1>PDX McCord</h1>
        </Grid.Row>
        <Grid.Row>
          <Player video={state} />
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <Grid.Column>
            <Image
              src="/image.png"
              size="small"
              onClick={handleClick}
              name="https://www.youtube.com/watch?v=CHO316LKnZw"
            />
            <Image
              src="/image.png"
              size="small"
              onClick={handleClick}
              name="https://www.youtube.com/watch?v=-2TTTNTcQ_8&ab_channel=JSFILMZ"
            />
            <Image src="/image.png" size="small" />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="/image.png"
              size="small"
              onClick={handleClick}
              name="https://www.youtube.com/watch?v=IQAZ28doTXY&ab_channel=LearnColorGrading"
            />
            <Image src="/image.png" size="small" />
            <Image src="/image.png" size="small" />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="/image.png"
              size="small"
              onClick={handleClick}
              name="https://vimeo.com/472409971"
            />
            <Image src="/image.png" size="small" />
            <Image
              src="/image.png"
              size="small"
              onClick={handleClick}
              name="https://vimeo.com/474031157"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HomePage
