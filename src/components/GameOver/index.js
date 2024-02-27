import './index.css'

const GameOver = props => {
  const {currentScore, onClickPlayAgain} = props

  const onClickButton = () => {
    onClickPlayAgain()
  }

  return (
    <div className="scorecard-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="your-score-text">YOUR SCORE</p>
      <h1 className="scorecard-score">{currentScore}</h1>
      <button
        className="play-again-button"
        type="button"
        onClick={onClickButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p className="play-again-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default GameOver
