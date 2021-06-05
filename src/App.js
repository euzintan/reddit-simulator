import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import SortDropdown from "./SortDropdown";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("dogs");

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Reddit Simulator</h1>
        <input type="text" vallue="subreddit" placeholder="subreddit" />
      </nav>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <SortDropdown />
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div className="articles">
        {articles.map((a) => (
          <div className="post-preview" key={a.id}>
            <h2>{a.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
