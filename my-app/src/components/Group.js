import React, { useState, useEffect } from "react";
import GroupAPI from "../services/group-api";
import { Card, Col, Row,} from 'antd';

const GroupPage = (props) => {

    const [group, setGroup] = useState([]);
    const [groupThreads, setGroupThreads] = useState([]);
    const groupId = props.match.params.id;
    console.log(groupId);

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
          <ul>
        {groupThreads.map(item => {
          return <Row gutter={16} className="group-row">
            <Col span={23}>
              <Card title={item.title} bordered>
                <p>todo</p>
              </Card>
            </Col>
          </Row>
        })}
      </ul>
      </div>
      
    )
  };
  
  
  
  export default GroupPage;