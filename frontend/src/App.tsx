import { Layout, List } from "antd";
import Post from "./components/Post";
import { posts } from "./constants/data/posts";

const { Content } = Layout;
const App = () => {
  return (
    <Layout>
      <Content>
        <List
          itemLayout="vertical"
          dataSource={posts}
          renderItem={(post) => <Post post={post} />}
        />
      </Content>
    </Layout>
  );
};

export default App;
