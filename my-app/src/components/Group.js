import React, { useState, useEffect } from "react";
import GroupAPI from "../services/group-api";
import { Card, Col, Row, Button, Modal, Form, Input, Alert} from 'antd';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./Group.css"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const GroupPage = (props) => {

    const onFinish = values => {
      GroupAPI.postThread(group.id, values.ThreadTitle, values.ThreadContent).then(() => {
        setIsModalVisible(false);
        refreshPage();
      });
    };

    const clickSub = (e) => {
      GroupAPI.Subscribe(e)
      .then(
        (response) => {
          setMessage("You have subscribed successfully!");
        },
        (error) => {
          setMessage("You are already subscribed!");
        }
      );
    }
  
    const clickUnsub = (e) => {
      GroupAPI.unSubscribe(e)
      .then(
        (response) => {
          setMessage("You have unsubscribed successfully!");
        },
        (error) => {
          setMessage("You are not subscribed or you're the creator of this group!");
        }
      );
    }

    const refreshPage = () => {
      window.location.reload(false);
    }

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const [group, setGroup] = useState([]);
    const [groupThreads, setGroupThreads] = useState([]);
    const groupId = props.match.params.id;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [message, setMessage] = useState("");

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
        GroupAPI.getGroup(groupId)
        .then((responseJson) => {
        setGroup(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }, [groupId]);

      useEffect(() => {
        GroupAPI.getGroupThreads(groupId)
        .then((responseJson) => {
          responseJson.sort((a, b) => {
            const date1 = new Date(a.created);
            const date2 = new Date(b.created);
            return date2.getTime() - date1.getTime();
          });
          setGroupThreads(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }, [groupId]);
    
    return (
      <div className="group-page">
        {message && (
          <Alert message={message} type='info'/>
        )}
        <Row gutter={16}>
            <Col span={24}>
              <Card title={group.name} bordered>
                <p>{group.description}</p>
                <p>Creator: {group.creator}</p>
                <p>Created: {group.created}</p>
                <Button type="primary" size="small" onClick={() => clickSub(group.id)}>Subscribe</Button> <Button type="primary" size="small" onClick={() => clickUnsub(group.id)}>Unsubscribe</Button> <Button size="small" type="primary" onClick={showModal}>Create Thread</Button><br/><br/><br/>
                <ul>
        {groupThreads.map(item => {
          return <Row gutter={16} className="group-row">
            <Col span={23}>
              <Card title={item.title} bordered>
                <Link to={'/threads/'+group.id+'/'+item.id}>
                <Button size="small" type="primary">Go To Thread</Button><br/>
                </Link>
              </Card>
            </Col>
          </Row>
        })}
      </ul>
              </Card>
            </Col>
          </Row>

          <Modal
        title="Create a new thread!"
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
          <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Thread Title"
        name="ThreadTitle"
        rules={[{ required: true, message: 'Please input a title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Thread Content"
        name="ThreadContent"
        rules={[{ required: true, message: 'Please input some content!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </Modal>

          {/* <ul>
        {groupThreads.map(item => {
          return <Row gutter={16} className="group-row">
            <Col span={23}>
              <Card title={item.title} bordered>
                <Link to={'/threads/'+group.id+'/'+item.id}>
                <Button size="small" type="primary">Go To Thread</Button><br/>
                </Link>
              </Card>
            </Col>
          </Row>
        })}
      </ul> */}
      </div>
      
    )
  };
  
  
  
  export default GroupPage;