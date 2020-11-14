import { Container } from 'semantic-ui-react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const StandardLayout = ({ children }) => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()
  return (
    <Container>
      <h1>
        <Link to={routes.home()}>PDX McCord</Link>
      </h1>
      <ul>
        <li>
          <a href="#" onClick={isAuthenticated ? logOut : logIn}>
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </a>
        </li>
        {isAuthenticated && (
          <>
            <li>Logged in as {currentUser.email} </li>
            <li>
              <Link to={routes.videos()}> add Videos</Link>
            </li>
          </>
        )}
      </ul>

      {children}
    </Container>
  )
}

export default StandardLayout
