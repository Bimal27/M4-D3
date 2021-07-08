import { Navbar, Nav } from 'react-bootstrap'

const MyNavBar = ()=>(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
)
export default MyNavBar