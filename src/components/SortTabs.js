import { Tabs, Tab } from "react-bootstrap";
import ArticlesList from "./ArticlesList";

const SortTabs = (prop) => {
    const hotArticles = prop.hotArticles;
    const newArticles = prop.newArticles;
    const topArticles = prop.topArticles;
    console.log(hotArticles);
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="hot" title="Hot">
        <ArticlesList articles={hotArticles} />
      </Tab>
      <Tab eventKey="new" title="New">
        <ArticlesList articles={newArticles} />
      </Tab>
      <Tab eventKey="top" title="Top">
        <ArticlesList articles={topArticles} />
      </Tab>
    </Tabs>
  );
};

export default SortTabs;
