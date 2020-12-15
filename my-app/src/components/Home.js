import React, { useState, useEffect } from "react";
import GroupAPI from "../services/group-api";
import { Card, Col, Row, Button} from 'antd';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const Home = () => {
  
  const [allThreads, setAllThreads] = useState([]);

  useEffect(() => {
    GroupAPI.getAllThreads()
    .then((responseJson) => {
      setAllThreads(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <center><h1>Recent Threads</h1></center>
      <ul>
        {allThreads.map(item => {
          return <Row gutter={16} className="group-row">
            <Col span={23}>
              <Card title={item.title} bordered>
              <Link to={'/threads/'+item.group+'/'+item.id}>
                <Button type="primary">Go To Thread</Button><br/>
                </Link>
              </Card>
            </Col>
          </Row>
        })}
      </ul>
    </div>
  );
};

export default Home;
