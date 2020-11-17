import { useState, useContext } from 'react'
import { SelectedVideoContext } from 'src/context/SelectedContext'
import ReactPlayer from 'react-player/lazy'
import { Grid, Dimmer, Loader } from 'semantic-ui-react'
import {
  useLoadingState,
  useLoadingUpdateState,
} from 'src/context/SelectedContext'

const initialState = {
  url: null,
  pip: false,
  seeking: false,
  playing: false,
  controls: true,
  light: false,
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loadedSeconds: 0,
  playedSeconds: 0,
  loop: false,
}

//////// PLAYER CONTROLS ////////////
const Player = () => {
  const [prefs, setPrefs] = useState(initialState)
  const currentVideo = useContext(SelectedVideoContext) //Update selectedVideoContext
  const loading = useLoadingState()
  const setLoading = useLoadingUpdateState()

  // This is the placeholder for the player object.
  // The ReactPlayer will return this object on load with ref function.
  let thisPlayer

  const ref = (player) => {
    // eslint-disable-next-line
    thisPlayer = player
  }

  /////// PLAYING CONTROLS ///////////

  const handlePlay = () => {
    const setPlayToTrue = { ...prefs, playing: true }
    setPrefs(setPlayToTrue)
  }

  const handlePause = () => {
    const setPlayToTrue = { ...prefs, playing: false }
    setPrefs(setPlayToTrue)
  }

  const handleToggleLoop = () => {
    const newPrefs = { ...prefs, loop: !prefs.loop }
    setPrefs(newPrefs)
  }

  ////////////// PLAY STATE /////////////////
  const handleEnded = () => {
    const newPrefs = { ...prefs, playing: prefs.loop }
    setPrefs(newPrefs)
  }

  const handleProgress = (progress) => {
    if (!prefs.seeking) {
      const newPrefs = { ...prefs, ...progress }
      setPrefs(newPrefs)
    }
  }

  /////// Deconstruct Values ///////
  const { playing, controls, light, loop, playbackRate, volume, muted } = prefs

  return (
    <Grid.Row columns={16} centered className="player">
      <Grid.Column width={16} centered>
        {/* ///////////// SPINNER ////////////// */}
        <Dimmer active={loading}>
          <Loader content="Loading" />
        </Dimmer>

        {/* /////////////////////// VIDEO PLAYER //////////////// */}
        <ReactPlayer
          ref={ref}
          className="player-video-player"
          width="90%"
          height="40em"
          url={currentVideo}
          // pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => setLoading(false)}
          onStart={() => console.log('onStart')}
          onPlay={handlePlay}
          // onEnablePIP={handleEnablePIP}
          // onDisablePIP={handleDisablePIP}
          onPause={handlePause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={(e) => console.log('onSeek', e)}
          onEnded={handleEnded}
          onError={(e) => console.log('onError', e)}
          onProgress={handleProgress}
          // onDuration={handleDuration}
        />
        <div className="player-controls">
          <button className="player-controls-play" onClick={handlePlay}>
            <div className="triangle">
              <img src="img/play.png" alt="play" />
            </div>
          </button>
          <button className="player-controls-grey--btn" onClick={handlePause}>
            <div className="triangle">
              <img src="img/pause.png" alt="pause" />
            </div>
          </button>
          <button className="player-controls-grey--btn">
            <div className="triangle">
              <img src="img/next.png" alt="next" />
            </div>
          </button>
          <button
            className="player-controls-grey--btn"
            onClick={handleToggleLoop}
          >
            <div className="triangle">
              <img src="img/loop.png" alt="loop" />
            </div>
          </button>
        </div>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Player
