import { List, Space, Typography } from "antd";
import React, { Fragment } from "react";
import { comments } from "../constants/data/comments";
import Comment from "./Comment";

const { Text } = Typography;

const ListComments = () => {
  const [isReplyOpen, setIsReplyOpen] = React.useState(false);

  const handleToggleReply = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  return (
    <Fragment>
      <Space
        size={[20, 0]}
        direction="horizontal"
        className="cursor-pointer"
        onClick={handleToggleReply}
      >
        <Text type="secondary" className="font-medium underline">
          5 replies
        </Text>
      </Space>
      {isReplyOpen ? (
        <div className="mt-3 pt-3 border-top-line">
          <List
            itemLayout="vertical"
            dataSource={comments}
            renderItem={(comment) => <Comment />}
          />
        </div>
      ) : (
        <div className="pt-5" />
      )}
    </Fragment>
  );
};

export default ListComments;
