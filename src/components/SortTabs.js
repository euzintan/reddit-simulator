import { Tabs, Tab } from "react-bootstrap";
import ArticlesList from "./ArticlesList";

const SortTabs = (prop) => {
    const hotArticles = prop.hotArticles;
    const newArticles = prop.newArticles;
    const topArticles = prop.topArticles;
    const view = prop.view;
  return (
    <Tabs className={`tabs`}  defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="hot" title="Hot">
        <ArticlesList articles={hotArticles} view={view}/>
      </Tab>
      <Tab eventKey="new" title="New">
        <ArticlesList articles={newArticles} view={view}/>
      </Tab>
      <Tab eventKey="top" title="Top">
        <ArticlesList articles={topArticles} view={view}/>
      </Tab>
    </Tabs>
  );
};

export default SortTabs;
