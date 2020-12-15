import React, { useState, useEffect } from "react";
import { Card, Col, Row, Input, Button, Alert, Tabs } from 'antd';
import { Link } from "react-router-dom";
import GroupAPI from "../services/group-api";
import "./GroupSearch.css"
import "antd/dist/antd.css";
import Form from "antd/lib/form/Form";
import CreateGroup from "./CreateGroup";


const { Search } = Input;
const { TabPane } = Tabs;

const GroupSearch = () => {
  const [search, setSearch] = useState('');
  const [allGroups, setAllGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [message, setMessage] = useState("");
  // const [currentGroup, setCurrentGroup] = useState([]);

  useEffect(() => {
    GroupAPI.getAllGroups()
    .then((responseJson) => {
      setAllGroups(responseJson);
      setFilteredGroups(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    GroupAPI.getSubscribed().then((responseJson) => {
      setSubscribedGroups(responseJson);
    })
    .catch((error) => {
      console.error(error);
    })
  }, []);

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

  const searchGroup = (e) => {
    if(e){
      const newData = allGroups.filter(
        function(item){
          const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
          const textData = e.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredGroups(newData);
      setSearch(e);
      console.log(search);
    }
    else {
      setFilteredGroups(allGroups);
      setSearch(e);
    }
  }

  // const setGroupItem = async (e) => {
  //   await setCurrentGroup(e);
  // }

  // const getGroup = async() => {
  //   const toReturn = await currentGroup;
  //   return toReturn;
  // }
  const handleChange = (key) => {
    if (key === "1") {
      window.location.reload(false);
    }
  }
  
  return (
    <Tabs onChange={handleChange} type='card'>
      <TabPane tab='Subscribed Groups' key="1">
        <div className="group-cards">
          <ul>
            {subscribedGroups.map(item => {
              return <Row gutter={16} className="group-row">
                <Col span={23}>
                  <Card title={item.name} bordered>
                    <Link to={'/groups/'+item.id}> <Button type="primary" size="small">Go To Group</Button></Link>
                  </Card>
                </Col>
              </Row>
            })}
          </ul>
        </div>
      </TabPane>
      <TabPane tab='Search Groups' key="2">
        <div className="group-search">
          <div className="search-bar">
            <Search placeholder="Search for group" size="large" onSearch={searchGroup} />
          </div>
          <div className="group-cards">
            {message && (
              <Alert message={message} type='info'/>
            )}
            <ul>
              {filteredGroups.map(item => {
                return <Row gutter={16} className="group-row">
                  <Col span={23}>
                    <Card title={item.name} bordered>
                      <Button type="primary" size="small" onClick={() => clickSub(item.id)}>Subscribe</Button> <Button type="primary" size="small" onClick={() => clickUnsub(item.id)}>Unsubscribe</Button> <Link to={'/groups/'+item.id}> <Button type="primary" size="small">Go To Group</Button></Link>
                    </Card>
                  </Col>
                </Row>
              })}
            </ul>
          </div>
        </div>
      </TabPane>
    </Tabs>
  )
};



export default GroupSearch;
