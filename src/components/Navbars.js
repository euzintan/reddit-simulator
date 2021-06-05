import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Navbars = (prop) => {
  const subreddit = prop.subreddit;
  const setSubreddit = prop.setSubreddit;

  return (
    <div>
      <Navbar bg="dark" variant="dark"  expand="lg" fixed="top"  >
        <Navbar.Brand href="#home">Reddit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="View" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Card</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Classic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Compact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Subreddit Search" className="mr-sm-2" value={subreddit} 
            onChange={(e) => setSubreddit(e.target.value)} />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
