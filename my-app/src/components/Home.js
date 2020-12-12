import React, { useState, useEffect } from "react";
import GroupAPI from "../services/group-api";
import { Card, Col, Row,} from 'antd';
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
      <ul>
        {allThreads.map(item => {
          return <Row gutter={16} className="group-row">
            <Col span={23}>
              <Card title={item.title} bordered>
                <p>{item.content}</p>
              </Card>
            </Col>
          </Row>
        })}
      </ul>
    </div>
  );
};

export default Home;
