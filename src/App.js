import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("dogs");

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Reddit Simulator</h1>
        <input type="text" vallue="subreddit" placeholder="subreddit" />
      </nav>
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
