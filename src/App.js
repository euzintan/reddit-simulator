import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Navbars from "./components/Navbars";
import SortTabs from "./components/SortTabs";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {
  const [hotArticles, setHotArticles] = useState([]);
  const [newArticles, setNewArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("dogs");


//Fetch articles sorted by hot, new and top from the chosen subreddit
  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}/hot/.json?limit=20`).then((res) => {
      if (res.status !== 200) {
        console.log("ERROR unable to retrieve default subreddit r/dogs");
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setHotArticles(data.data.children);
        }
      });
    });

    fetch(`https://www.reddit.com/r/${subreddit}/new/.json?limit=20`).then((res) => {
      if (res.status !== 200) {
        console.log("ERROR unable to retrieve default subreddit r/dogs");
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setNewArticles(data.data.children);
        }
      });
    });

    fetch(`https://www.reddit.com/r/${subreddit}/top/.json?limit=20`).then((res) => {
      if (res.status !== 200) {
        console.log("ERROR unable to retrieve default subreddit r/dogs");
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setTopArticles(data.data.children);
        }
      });
    })
  },[subreddit]);

  return (
    <div className="App">
      <Navbars subreddit={subreddit} setSubreddit={setSubreddit}/>
      <SortTabs hotArticles={hotArticles} newArticles={newArticles} topArticles={topArticles} />
    </div>
  );
}

export default App;
