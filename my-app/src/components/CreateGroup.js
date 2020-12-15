import React, { useState } from "react";
import GroupAPI from "../services/group-api";
import "./LoginAndRegister.css";
import { Form, Input, Button, Alert } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CreateGroup = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleCreateGroup = (e) => {
    GroupAPI.createGroup(name, description).then((responseJson) => {
      props.history.push("/groups/"+responseJson.id);
    },
    (error) => {
      setMessage("A group with that name already exists!");
    }
    );
  };

  return (
    <div>
      <div>
        <center><h1>Group Creation</h1></center>
      </div>
      <div>
        {message && (
          <Alert message={message} type='info'/>
        )}
      </div>
      <br/>
      <Form 
        {...layout}
        name="basic"
        onFinish={handleCreateGroup}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{required: true, message: "Please give your group a name!"}]}
        >
          <Input onChange={onChangeName} />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{required: true, message: "Please give your group a description!"}]}
        >
          <Input onChange={onChangeDescription} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateGroup;
