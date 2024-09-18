import { Card, Space, Typography, Tag, Divider } from "antd";
import type { Post as PostType } from "../types";
import dayjs from "dayjs";

const { Title, Text, Paragraph } = Typography;

type Props = {
  post?: PostType;
};

const Post = (props: Props) => {
  const { post } = props;
  const formattedDate = dayjs(post?.created_at).format("MMM DD, YYYY");

  return (
    <Card className="border-bottom-1 border-radius-0 border-black">
      <Title className="text-center mb-2" level={1}>
        {post?.title}
      </Title>
      <Space size={[0, 2]} direction="vertical" style={{ marginBottom: 20 }}>
        <Text className="text-lg font-medium leading-0">
          Author: {post?.owner}
        </Text>
        <Text className="text-lg font-medium leading-0">
          Created at: {formattedDate}
        </Text>
      </Space>
      <Paragraph className="text-lg font-medium text-length-1 relative">
        {post?.content}
      </Paragraph>
      <Divider />
      <Space size={[20, 0]} direction="horizontal" className="mb-8">
        <Text type="secondary" className="cursor-pointer font-medium">
          5 replies
        </Text>
        <Text className="cursor-pointer font-medium text-medium" type="danger">
          (The comment section can be toggled collapse/expand)
        </Text>
      </Space>
    </Card>
  );
};

export default Post;
