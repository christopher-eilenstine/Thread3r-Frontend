import GroupAPI from "../services/group-api";
import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Comment, Tooltip, Modal, Input} from 'antd';
import "antd/dist/antd.css";

const { Search } = Input;

const ThreadPage = (props) => {

    const [thread, setThread] = useState([]);
    const [threadComments, setThreadComments] = useState([]);
    const threadId = props.match.params.threadId;
    const groupId = props.match.params.groupId;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onChangePostContent = (e) => {

        GroupAPI.postComment(threadId, e);
        setIsModalVisible(false);
        refreshPage();
    }

    const refreshPage = () => {
        window.location.reload(false);
    }

    const showModal = () => {
        setIsModalVisible(true);
      };

      const handleOk = (e) => {
        setIsModalVisible(false);
      };

      const handleCancel = () => {
        setIsModalVisible(false);
      };

    useEffect(() => {
        GroupAPI.getComments(threadId)
        .then((responseJson) => {
        setThreadComments(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }, [threadId]);

      useEffect(() => {
        GroupAPI.getThread(groupId, threadId)
        .then((responseJson) => {
        setThread(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }, [threadId, groupId]);

      useEffect(() => {
        GroupAPI.getComments(threadId)
        .then((responseJson) => {
        setThreadComments(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }, [threadId]);

    return (
    <div>
        <div>
        <Row gutter={16} className="group-row">
            <Col span={23}>
              <Card title={thread.title} bordered>
                <p>{thread.content}</p>
                <Button type="primary" onClick={showModal}>Add Comment</Button><br/>
              </Card>
            </Col>
          </Row>
        </div>
        <Modal
        title="Post a Comment!"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        allowClear="true"
        footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
          ]}
        >
        <Search
        placeholder="Write your comment here!"
        enterButton="Post"
        size="large"
        onSearch={onChangePostContent}
        />   
        </Modal>
        <ul>
        {threadComments.map(item => {
          return <Comment
          author={item.creator}
          content={
            <p>
              {item.content}
            </p>
          }
          datetime={
            <Tooltip title={item.created}>
              <span>{item.created}</span>
            </Tooltip>
          }
        />
        })}
      </ul>
    </div>
    )
}

export default ThreadPage;
