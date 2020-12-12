import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://csci4830.ddns.net:8080/thread3r-backend/api/groups/";

const getSubscribed = async (userId) => {
    const response = await axios
    .get(API_URL + "subscribed", {
      userId,
      headers: authHeader()
    });
  return response.data;
  };

  const getGroup = async (groupId) => {
    const response = await axios
    .get(API_URL + groupId, {
      headers: authHeader()
    });
    return response.data;
  }

  const searchGroups = async (searchToken) => {
      const response = await axios
      .get(API_URL + "search?name=", {
        searchToken,
        headers: authHeader(),
      });
    return response.data;
  }

  const getAllGroups = async () => {
    const response = await axios
      .get(API_URL, {
        headers: authHeader()
      });
    return response.data;
  }

  const getAllThreads = async () => {
    const response = await axios
    .get(API_URL + "threads", {
      headers: authHeader()
    });
  return response.data;
  }

  const getGroupThreads = async (groupId) => {
    const response = await axios
    .get(API_URL + groupId + "/threads", {
      headers: authHeader()
    });
  return response.data;
  }

  const postThread = async (groupId) => {
    const response = await axios
    .post(API_URL + groupId + "threads", {
      headers: authHeader()
    });
    return response.data;
  }

  const getThread = async (groupId, threadId) => {
    const response = await axios
    .post(API_URL + groupId + "threads" + threadId, {
      headers: authHeader()
    });
    return response.data;
  }

  const toExport = {
    getSubscribed,
    searchGroups,
    getAllGroups,
    getAllThreads,
    getGroupThreads,
    postThread,
    getThread,
    getGroup
  }
  
  export default toExport;