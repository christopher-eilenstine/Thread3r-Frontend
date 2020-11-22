import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import GroupSearchAPI from "../services/group-search-api";

const GroupSearch = () => {
  // const [search, setSearch] = useState('');
  const [allGroups, setAllGroups] = useState([]);
  // const [filteredGroups, setFilteredGroups] = useState([]);

  useEffect(() => {
    GroupSearchAPI.getAllGroups()
    .then((responseJson) => {
      setAllGroups(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  console.log(allGroups);

  if(allGroups[0] !== undefined){
    var groupName = allGroups[0].name;
  }
  else{
    var groupName = "Loading..."
  }

  // if (allGroups){
  //   var groupOut = allGroups[0].name;
  // }
  // else{
  //   var groupOut = "No groups available";
  // }

  return (
    <div>
      {groupName}
    </div>
  )
};

export default GroupSearch;
