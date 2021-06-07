import { Row, Button, Container, Col } from "react-bootstrap";
import { useState } from "react";

const ArticlesList = (prop) => {
  const myArticles = prop.articles;
  const view =
    prop.view === 1 ? "myCard" : prop.view === 2 ? "classic" : "compact";

  return (
    <div className="article-list">
      <Row className="myRow">
        {myArticles.map((a) => {
          const score = a.data.score;
          return <Col className md={view === "myCard" ? "4" : "10"}>
            <div className={`article-preview, ${view}`} key={a.data.id}>
              <Row>
                <a href={"https://reddit.com" + a.data.permalink}>
                  <p className="title">
                    {view == "myCard"
                      ? a.data.title.substring(0, 100) +
                        (a.data.title.length >= 100 ? "..." : "")
                      : a.data.title}
                  </p>
                </a>
              </Row>
              <Row className="author">
                {view !== "compact" && (
                  <p className="author">{`${a.data.author}`}</p>
                )}
              </Row>
              <Row className="comments">
                {view !== "compact" && (
                  <p className="commentCount">
                    comments: {a.data.num_comments}
                  </p>
                )}
                </Row>
              <Row className="scoreRow">
                {view !== "compact" && <button>upvote</button>}
                {view !== "compact" && (
                  <p className="scoreCount">{score}</p>
                )}
                {view !== "compact" && <button>downvote</button>}
              </Row>
            </div>
          </Col>
        })}
      </Row>
    </div>
  );
};

export default ArticlesList;

/* Title, author, time, comments, upvote downvote*/
