import { Row, Button, Container, Col } from "react-bootstrap";
import { useState } from 'react' 

const ArticlesList = (prop) => {
  const myArticles = prop.articles;
  const view =
    prop.view === 1 ? "myCard" : prop.view === 2 ? "classic" : "compact";
  const [score, setScore] = useState(0);

  return (
    <div className="article-list">
      <Row>
        {myArticles.map((a) => (
          <div className={`article-preview, ${view}`} key={a.data.id}>
            <a href={"https://reddit.com" + a.data.permalink}>
              <div>
                <p className="title">
                  {view == 'myCard' ? a.data.title.substring(0, 100) +
                    (a.data.title.length >= 100 ? "..." : "") : a.data.title}
                </p>
                {view !== 'compact' && <p className="author">{`${a.data.author}`}</p>}
                {view !== 'compact' && <p className="commentCount">comments: {a.data.num_comments}</p>}
              </div>
            </a>
            {view !== 'compact' &&<button>upvote</button>}
            {view !== 'compact' &&<p className="scoreCount">{a.data.score}</p>}
            {view !== 'compact' &&<button>downvote</button>}
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ArticlesList;

/* Title, author, time, comments, upvote downvote*/
