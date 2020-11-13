import { Link, routes } from '@redwoodjs/router'
import { Button } from 'semantic-ui-react'

const HomePage = () => {
  return (
    <>
      <h1>PDX McCord</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
