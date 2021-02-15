import logo from '../logo.png'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <div>
            <Image className='center' src={logo} alt='logo' height={40} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/features'>Features</Nav.Link>
            <Nav.Link href='/order'>Order</Nav.Link>
            <Nav.Link href='/menu'>Menu</Nav.Link>
            <NavDropdown title='Account' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/mydrinks'>My Drinks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/inbox'>Inbox</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='/register'>Register</Nav.Link>
            <Nav.Link eventKey={2} href='/login'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
