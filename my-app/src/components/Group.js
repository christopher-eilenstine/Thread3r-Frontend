import React, { useState, useEffect } from "react";
import GroupAPI from "../services/group-api";
import { Card, Col, Row, Button, Modal, Form, Input} from 'antd';
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
        setGroupThreads(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }, [groupId]);
    
    return (
      <div className="group-page">

        <Row gutter={16}>
            <Col span={24}>
              <Card title={group.name} bordered>
                <p>{group.description}</p>
                <p>Creator: {group.creator}</p>
                <p>Created: {group.created}</p>
                <Button size="small" type="primary" onClick={showModal}>Create Thread</Button><br/><br/><br/>
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