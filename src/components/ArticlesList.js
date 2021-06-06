import { Row, Button } from "react-bootstrap";

const ArticlesList = (prop) => {
  const myArticles = prop.articles;
  const view =
    prop.view === 1 ? "myCard" : prop.view === 2 ? "classic" : "compact";

  return (
    <div className="article-list">
      <Row>
        {myArticles.map((a) => (
          <div className={`article-preview, ${view}`} key={a.data.id}>
            <a className="sc" href={"https://reddit.com" + a.data.permalink}>
              <p className="title">
                {a.data.title.substring(0, 100) +
                  (a.data.title.length >= 100 ? "..." : "")}
              </p>
            </a>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ArticlesList;

/* Title, author, time, comments, upvote downvote*/
