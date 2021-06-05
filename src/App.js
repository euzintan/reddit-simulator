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
  InputGroup,
} from "react-bootstrap";
import SortDropdown from "./SortDropdown";
import SubredditSearch from "./SubredditSearch";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("dogs");

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Reddit Simulator</h1>
      </nav>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src="reddit-logo.png" alt="reddit logo" width="30" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <SortDropdown />
          </Nav>
          <SubredditSearch />
        </Navbar.Collapse>
      </Navbar>

      <div className="articles">
        {articles.map((a) => (
          <div className="post-preview" key={a.id}>
            <h2>{a.title}</h2>
          </div>
        ))}
      </div>

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}

export default App;
