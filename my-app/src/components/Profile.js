import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { Card, Col, Row, Button, Tabs, Comment, Tooltip, Modal } from 'antd';
import { Link } from "react-router-dom";
import GroupAPI from "../services/group-api";

const { TabPane } = Tabs;

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [groups, setGroups] = useState([]);
  const [groupId, setGroupId] = useState("");
  const [threads, setThreads] = useState([]);
  const [threadId, setThreadId] = useState("");
  const [comments, setComments] = useState([]);
  const [isGroupDeleteModalVisible, setIsGroupDeleteModalVisible] = useState(false);
  const [isThreadDeleteModalVisible, setIsThreadDeleteModalVisible] = useState(false);

  const showGroupDeleteModal = (id) => {
    setIsGroupDeleteModalVisible(true);
    setGroupId(id);
  }

  const showThreadDeleteModal = (groupId, threadId) => {
    setIsThreadDeleteModalVisible(true);
    setGroupId(groupId);
    setThreadId(threadId);
  }

  const hideGroupDeleteModal = () => {
    setIsGroupDeleteModalVisible(false);
  }

  const hideThreadDeleteModal = () => {
    setIsThreadDeleteModalVisible(false);
  }

  const handleGroupDeleteOk = () => {
    setIsGroupDeleteModalVisible(false);
    onDeleteGroup(groupId);
  }

  const handleThreadDeleteOk = () => {
    setIsThreadDeleteModalVisible(false);
    onDeleteThread(groupId, threadId);
  }

  const onDeleteGroup = (groupId) => {
    GroupAPI.deleteGroup(groupId)
    .then((error) => {
      console.log(error);
    }).then(() => {
      window.location.reload(false);
    });
  }

  const onDeleteThread = (groupId, threadId) => {
    GroupAPI.deleteThread(groupId, threadId)
    .then((error) => {
      console.log(error);
    }).then(() => {
      window.location.reload(false);
    });
  }

  useEffect(() => {
    GroupAPI.getCreatedGroups()
    .then((responseJson) => {
      responseJson.sort((a, b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        return 0;
      });
      setGroups(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    GroupAPI.getCreatedThreads()
    .then((responseJson) => {
      responseJson.sort((a, b) => {
        const date1 = new Date(a.created);
        const date2 = new Date(b.created);
        return date2.getTime() - date1.getTime();
      });
      setThreads(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    GroupAPI.getCreatedComments()
    .then((responseJson) => {
      responseJson.sort((a, b) => {
        const date1 = new Date(a.created);
        const date2 = new Date(b.created);
        return date2.getTime() - date1.getTime();
      });
      setComments(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Profile: <strong>{currentUser.username}</strong>
        </h3>
      </header>
      <Tabs type='card'>
        <TabPane tab='Profile Info' key='1'>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
        </TabPane>
        <TabPane tab='Groups' key='2'>
          <div className="group-cards">
            <ul>
              {groups.sort().map(item => {
                return <Row gutter={16} className="group-row">
                  <Col span={23}>
                    <Card title={item.name} bordered>
                      <Link to={'/groups/'+item.id}> <Button type="primary" size="small">Go To Group</Button></Link> <Button type="primary" size="small" danger onClick={() => showGroupDeleteModal(item.id)}>Delete Group</Button>
                    </Card>
                  </Col>
                </Row>
              })}
            </ul>
          </div>
          <Modal 
            visible={isGroupDeleteModalVisible}
            title="Are You Sure?"
            onOk={handleGroupDeleteOk}
            onCancel={hideGroupDeleteModal}
          >
            <p>Are you sure you wish to delete this group?</p>
          </Modal>
        </TabPane>
        <TabPane tab='Threads' key='3'>
          <ul>
            {threads.map(item => {
              return <Row gutter={16} className="group-row">
                <Col span={23}>
                  <Card title={item.title} type='inner' extra={<Link to={'/groups/'+item.group}>Go to Group</Link>} bordered>
                    <Link to={'/threads/'+item.group+'/'+item.id}><Button size="small" type="primary">Go To Thread</Button></Link> <Button type="primary" size="small" danger onClick={() => showThreadDeleteModal(item.group, item.id)}>Delete Thread</Button> <br/>
                  </Card>
                </Col>
              </Row>
            })}
          </ul>
          <Modal 
            visible={isThreadDeleteModalVisible}
            title="Are You Sure?"
            onOk={handleThreadDeleteOk}
            onCancel={hideThreadDeleteModal}
          >
            <p>Are you sure you wish to delete this thread?</p>
          </Modal>
        </TabPane>
        <TabPane tab='Comments' key='4'>
          <ul>
            {comments.map(item => {
              return <Comment actions={[<Link to={"/threads/"+item.group+"/"+item.thread}>Go to Thread</Link>]}
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
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;
