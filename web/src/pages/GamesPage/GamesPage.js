import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

const GamesPage = () => {
  return (
    <StandardLayout>
      <div className="games">
        <h1>Home Made Games</h1>
        <a href="https://fast-quiz.vercel.app/" target="blank">
          <div className="games__box">
            <div className="games__box--header">
              fast<strong>Quiz</strong>
            </div>
          </div>
        </a>
        <a href="https://pdx-code-breaker.netlify.app/" target="blank">
          <div className="games__box">
            <div className="games__box--header">Code Breaker</div>
          </div>
        </a>
        <a href="https://loving-mestorf-a53980.netlify.app/" target="blank">
          <div className="games__box">
            <div className="games__box--header">Simple Trivia</div>
          </div>
        </a>
      </div>
    </StandardLayout>
  )
}

export default GamesPage
