import { useContext } from 'react'
import { SelectedUpdateContext } from 'src/context/SelectedContext'
import { useLoadingUpdateState } from 'src/context/SelectedContext'

const VideoList = ({ videos }) => {
  const updateLoading = useLoadingUpdateState()
  const updateSelected = useContext(SelectedUpdateContext)
  return (
    <div columns={3} className="list">
      {videos &&
        videos.map((vid) => (
          <div
            key={vid.id}
            className="list-item"
            onClick={() => {
              updateSelected(vid.link)
              updateLoading(true)
            }}
          >
            <div className="list-item-title">
              <span className="list-item-title-copy">{vid.title} </span>
            </div>
            <div className="list-item-img">
              <img src={vid.img} alt={vid.title} />
            </div>
            <div className="list-item-year">
              <span className="list-item-year-copy"> {vid.body} </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default VideoList
