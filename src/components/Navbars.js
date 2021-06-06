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
  const setView = prop.setView;
  const view = prop.view;
  const viewType = view === 1 ? "Card" : view === 2 ? "Classic" : "Compact";

  return (
    <div>
      <Navbar bg="dark" variant="dark"  expand="lg" fixed="top"  >
        <Navbar.Brand href="#home">
          {`r/${subreddit}`}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown className="viewpicker" title={`View:${viewType}`} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onSelect={() => setView(1)} >Card</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onSelect={() => setView(2)} >
                Classic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onSelect={() => setView(3)}>Compact</NavDropdown.Item>
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
