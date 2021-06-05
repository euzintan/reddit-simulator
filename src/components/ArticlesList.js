import { Link } from "react-router-dom";

const ArticlesList = (prop) => {
  const myArticles = prop.articles;

  return (
    <div className="article-list">
      {myArticles.map((a) => (
        <div className="article-preview" key={a.data.id}>
          <a href={"https://reddit.com" + a.data.permalink}>
            <p>{a.data.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
