import { Container } from 'semantic-ui-react'
import { Link, routes } from '@redwoodjs/router'

const StandardLayout = ({ children }) => {
  return (
    <Container>
      <h1>
        <Link to={routes.home()}>PDX McCord</Link>
      </h1>
      <p>
        <Link to={routes.videos()}> add Videos</Link>
      </p>
      {children}
    </Container>
  )
}

export default StandardLayout
