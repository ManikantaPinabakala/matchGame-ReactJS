import './index.css'

const Navbar = props => {
  const {currentScore, elapsedSeconds} = props

  return (
    <nav className="navbar-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="scores-container">
        <li className="score-item">
          <p className="score-text">
            Score: <span className="score">{currentScore}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer">{elapsedSeconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
