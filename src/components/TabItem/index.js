import './index.css'

const TabItem = props => {
  const {tabDetails, isTabActive, onClickTabItem} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isTabActive ? 'active-tab' : ''
  const activeTextClassName = isTabActive ? 'active-text' : ''

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className={`tab-item ${activeTabClassName}`}>
      <button type="button" className="tab-button" onClick={onClickTab}>
        <p className={`tab-text ${activeTextClassName}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
