import { useContext } from 'react'
import { Container, Menu, Modal, Button, Header, Icon } from 'semantic-ui-react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import { MenuContext, MenuUpdateContext } from 'src/context/SelectedContext'

const StandardLayout = ({ children }) => {
  const activeItem = useContext(MenuContext)
  const setActiveItem = useContext(MenuUpdateContext)
  const [open, setOpen] = React.useState(false)

  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()

  const handleItemClick = (e, { name }) => {
    console.log('name', name)
    setActiveItem(name)
  }

  const triggerLogOutModal = () => {
    setOpen(true)
  }

  return (
    <Container>
      {/* ////////////////// MODAL ///////////////// */}
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        // trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name="user circle" />
          {isAuthenticated && `Log Out ${currentUser.email}?`}
        </Header>
        <Modal.Content>
          <p>Are you sure you want to log out?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button
            color="green"
            inverted
            onClick={() => {
              setOpen(false)
              return logOut()
            }}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>

      {/* /////////////// MENU  ////////// */}
      <Menu pointing secondary inverted>
        <Link to={routes.home()}>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
          >
            PDX McCord
          </Menu.Item>
        </Link>
        {isAuthenticated && (
          <Link to={routes.videos()}>
            <Menu.Item
              name="videos"
              active={activeItem === 'videos'}
              onClick={handleItemClick}
            >
              Modify Videos
            </Menu.Item>
          </Link>
        )}
        <Menu.Menu position="right">
          <a href="#" onClick={isAuthenticated ? triggerLogOutModal : logIn}>
            <Menu.Item name="auth">
              {isAuthenticated ? `Log Out` : 'Log In'}
            </Menu.Item>
          </a>
        </Menu.Menu>
      </Menu>
      {children}
    </Container>
  )
}

export default StandardLayout
