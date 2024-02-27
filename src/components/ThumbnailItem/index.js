import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickThumbnailItem} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    onClickThumbnailItem(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
