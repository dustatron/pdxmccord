import { Grid, Image } from 'semantic-ui-react'
const VideoList = ({ handleSelected }) => {
  return (
    <>
      <Grid.Column>
        <Image
          src="/image.png"
          size="small"
          onClick={handleSelected}
          name="https://www.youtube.com/watch?v=CHO316LKnZw"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          src="/image.png"
          size="small"
          onClick={handleSelected}
          name="https://www.youtube.com/watch?v=-2TTTNTcQ_8&ab_channel=JSFILMZ"
        />
      </Grid.Column>
      <Grid.Column>
        <Image src="/image.png" size="small" />
      </Grid.Column>

      <Grid.Column>
        <Image
          src="/image.png"
          size="small"
          onClick={handleSelected}
          name="https://www.youtube.com/watch?v=IQAZ28doTXY&ab_channel=LearnColorGrading"
        />
      </Grid.Column>
      <Grid.Column>
        <Image src="/image.png" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/image.png" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image
          src="/image.png"
          size="small"
          onClick={handleSelected}
          name="https://vimeo.com/472409971"
        />
      </Grid.Column>
      <Grid.Column>
        <Image src="/image.png" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image
          src="/image.png"
          size="small"
          onClick={handleSelected}
          name="https://vimeo.com/474031157"
        />
      </Grid.Column>
    </>
  )
}

export default VideoList
