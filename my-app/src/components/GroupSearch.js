import React, { useState, useEffect } from "react";
import { Collapse, Space, Input } from 'antd';
import GroupSearchAPI from "../services/group-search-api";

const { Panel } = Collapse;
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

  if(allGroups !== undefined){
    var groupNames = [];
    for(var i = 0; i < filteredGroups.length; i++){
      groupNames[i] = filteredGroups[i].name;
      console.log(groupNames);
    }
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
      console.log(filteredGroups);
      console.log(search);  
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
    <div>
      <div>
        <Search placeholder="Search for group" size="large" onSearch={searchGroup} />
      </div>
      <div>
      <ul>
        {groupNames.map(item => {
          return <Space direction="vertical">
            <Collapse collapsible="header" bordered>
              <Panel header={item}>
                <p>todo</p>
              </Panel>
            </Collapse>
          </Space>
        })}
      </ul>
      </div>
    </div>
  )
};



export default GroupSearch;
