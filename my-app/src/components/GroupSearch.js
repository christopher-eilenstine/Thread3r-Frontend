import React, { useState, useEffect } from "react";
import { Card, Col, Row, Input, Button } from 'antd';
import GroupSearchAPI from "../services/group-search-api";
import "./GroupSearch.css"
import "antd/dist/antd.css";

const { Search } = Input;

const GroupSearch = () => {
  const [search, setSearch] = useState('');
  const [allGroups, setAllGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);

  useEffect(() => {
    GroupSearchAPI.getAllGroups()
    .then((responseJson) => {
      setAllGroups(responseJson);
      setFilteredGroups(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

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
    }
    else {
      setFilteredGroups(allGroups);
      setSearch(e);
    }
  }

  // if (allGroups){
  //   var groupOut = allGroups[0].name;
  // }
  // else{
  //   var groupOut = "No groups available";
  // }

  return (
    <div className="group-search">
      <div className="search-bar">
        <Search placeholder="Search for group" size="large" onSearch={searchGroup} />
      </div>
      <div className="group-cards">
      <ul>
        {filteredGroups.map(item => {
          return <Row gutter={16} className="group-row">
            <Col span={23}>
              <Card title={item.name} bordered>
                <p>{item.description}</p>
                <Button type="primary">Subscribe</Button><br/><br/>
                <Button type="primary">Go to group</Button><br/>
              </Card>
            </Col>
          </Row>
        })}
      </ul>
      </div>
    </div>
  )
};



export default GroupSearch;
