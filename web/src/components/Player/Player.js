import { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { Button } from 'semantic-ui-react'

const initialState = {
  url: null,
  pip: false,
  seeking: false,
  playing: false,
  controls: false,
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
const Player = ({ video }) => {
  const [prefs, setPrefs] = useState(initialState)

  // This is the placeholder for the player object.
  // The ReactPlayer will return this object on load with ref function.
  let thisPlayer

  /////// PLAYING CONTROLS ///////////

  const handlePlayPause = () => {
    const newPref = { ...prefs, playing: !prefs.playing }
    setPrefs(newPref)
  }

  const handlePlay = () => {
    console.log('onPlay')
    const setPlayToTrue = { ...prefs, playing: true }
    setPrefs(setPlayToTrue)
  }

  const handlePause = () => {
    console.log('handlePause')
    const setPlayToTrue = { ...prefs, playing: false }
    setPrefs(setPlayToTrue)
  }

  const handleVolumeChange = (e) => {
    const newPrefs = { ...prefs, volume: parseFloat(e.target.value) }
    setPrefs(newPrefs)
    console.log('change volume', e.target.value)
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
      console.log('handleProgress', progress, 'state', prefs)
    }
  }

  ///////////// SEEKING //////////////////
  const handleSeekMouseDown = () => {
    const newPrefs = { ...prefs, seeking: true }
    setPrefs(newPrefs)
  }

  const handleSeekChange = (e) => {
    console.log('seek', parseFloat(e.target.value))
    const newPrefs = { ...prefs, played: parseFloat(e.target.value) }
    thisPlayer.seekTo(parseFloat(e.target.value))
    setPrefs(newPrefs)
  }

  const handleSeekMouseUp = () => {
    const newPrefs = { ...prefs, seeking: false }
    setPrefs(newPrefs)
  }

  /////////// CONTROLS ///////////////////
  const handleToggleControls = () => {
    console.log('handle Control', prefs.controls)
    const newPrefs = { ...prefs, controls: !prefs.controls }
    setPrefs(newPrefs)
  }

  const handleEnablePIP = () => {
    console.log('handleEnablePIP')
  }

  const handleDisablePIP = () => {
    console.log('handleDisablePIP')
  }

  const handleDuration = () => {
    console.log('handleDuration')
  }

  const ref = (player) => {
    thisPlayer = player
  }

  const getTime = (seconds) => {
    if (seconds > 60) {
      const min = seconds / 60
      return parseFloat(min).toFixed(2)
    } else {
      return `00:0${parseInt(seconds)}`
    }
  }

  /////// Deconstruct Values ///////

  const {
    pip,
    playing,
    controls,
    light,
    loop,
    loaded,
    playbackRate,
    volume,
    muted,
    played,
    playedSeconds,
  } = prefs
  return (
    <>
      <div>
        <ReactPlayer
          ref={ref}
          className="react-player"
          // width="100%"
          // height="100%"
          url={video}
          pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPlay={handlePlay}
          onEnablePIP={handleEnablePIP}
          onDisablePIP={handleDisablePIP}
          onPause={handlePause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={(e) => console.log('onSeek', e)}
          onEnded={handleEnded}
          onError={(e) => console.log('onError', e)}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>

      {/* ////////// Buttons  //////////////// */}
      <div>
        <div>
          <h2>Progress</h2>
          <p>Seconds : {getTime(playedSeconds)}</p>
          <progress max={1} value={played} />
        </div>
        <div>
          <h2>Loading</h2>
          <progress max={1} value={loaded} />
        </div>
        <div> playbackRate: {playbackRate} </div>
        <div> loop: {loop ? 'True' : ' False'} </div>
        <div>
          <h2>volume:</h2>
          {parseInt(volume * 10)}
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <div>
          {' '}
          <h2>Controls</h2>
          <Button primary onClick={handleToggleControls}>
            {controls ? 'Yes' : 'No'}
          </Button>
        </div>
        <div>
          <h2>SEEKING</h2>
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
          />
        </div>
        <div>
          <h2>Looping</h2>
          <Button onClick={handleToggleLoop}>{loop ? 'ON' : 'OFF'}</Button>
        </div>

        <div>
          <h2>play</h2>
          <Button default onClick={handlePlayPause}>
            {playing ? 'STOP' : 'PLAY'}
          </Button>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Player
