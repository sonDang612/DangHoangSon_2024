import { Card, Divider, Space, Typography } from "antd";
import dayjs from "dayjs";
import React from "react";

import type { Post as PostType } from "../types";
import ListComments from "./ListComments";
import ListTags from "./ListTags";

const { Title, Text, Paragraph } = Typography;

type Props = {
  post?: PostType;
};

const Post = (props: Props) => {
  const { post } = props;

  const formattedDate = React.useMemo(() => {
    return dayjs(post?.created_at).format("MMM DD, YYYY");
  }, [post?.created_at]);

  return (
    <Card className="border-bottom-1 border-radius-0 border-black">
      <Title className="text-center mb-2" level={1}>
        {post?.title}
      </Title>
      <Space
        direction="horizontal"
        className="w-full justify-between align-start"
      >
        <Space size={[0, 2]} direction="vertical" style={{ marginBottom: 20 }}>
          <Text className="text-lg font-medium leading-0">
            Author: {post?.owner}
          </Text>
          <Text className="text-lg font-medium leading-0">
            Created at: {formattedDate}
          </Text>
        </Space>
        <ListTags />
      </Space>
      <Paragraph className="text-lg font-medium text-length-1 relative">
        {post?.content}
      </Paragraph>
      <Divider />
      <ListComments />
    </Card>
  );
};

export default React.memo(Post);
