import { Layout, List } from "antd";
import React from "react";
import { InView } from "react-intersection-observer";

import Post from "../components/Post";
import useInfinitePosts from "../react-queries/useInfinitePosts";

const { Content } = Layout;

const HomePage = () => {
  const { data: postsPages, fetchNextPage } = useInfinitePosts();

  const posts = React.useMemo(() => {
    return postsPages?.pages?.map((page) => page || []).flat();
  }, [postsPages?.pages]);

  return (
    <Layout>
      <Content>
        <List
          itemLayout="vertical"
          dataSource={posts}
          renderItem={(post) => <Post post={post} />}
        />
        {posts?.length && posts?.length < 100 && (
          <InView onChange={(inView) => inView && fetchNextPage()}>
            {({ ref }) => <div ref={ref} style={{ height: "50px" }}></div>}
          </InView>
        )}
      </Content>
    </Layout>
  );
};

export default HomePage;
