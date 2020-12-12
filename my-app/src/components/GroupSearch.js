import React, { useState, useEffect } from "react";
import { Card, Col, Row, Input, Button } from 'antd';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import GroupAPI from "../services/group-api";
import "./GroupSearch.css"
import "antd/dist/antd.css";


const { Search } = Input;

const GroupSearch = () => {
  const [search, setSearch] = useState('');
  const [allGroups, setAllGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState([]);

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

  const setGroupItem = async (e) => {
    await setCurrentGroup(e);
    console.log(e);
  }

  const getGroup = async() => {
    const toReturn = await currentGroup;
    return toReturn;
  }
  

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
                <Link to={'/groups/'+item.id}>
                <Button type="primary">Go To Group</Button><br/>
                </Link>
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
