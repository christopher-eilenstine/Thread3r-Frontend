import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://csci4830.ddns.net:8080/thread3r-backend/api/groups/";

const getCreatedGroups = async () => {
  const response = await axios.get(API_URL + "created", {headers: authHeader()});
  return response.data;
};

const getCreatedThreads = async () => {
  const response = await axios.get(API_URL + "threads/created", {headers: authHeader()});
  return response.data;
};

const getCreatedComments = async () => {
  const response = await axios.get(API_URL + "threads/comments/created", {headers: authHeader()});
  return response.data;
};

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

  const postThread = async (groupId, title, content) => {
    const response = await axios
    .post(API_URL + groupId + "/threads", {"title": title, "content": content}, {
      headers: authHeader()
    });
    return response.data;
  }

  const getThread = async (groupId, threadId) => {
    const response = await axios
    .get(API_URL + groupId + "/threads/" + threadId, {
      headers: authHeader()
    });
    return response.data;
  }

  const getComments = async (threadId) => {
    const response = await axios
    .get(API_URL + "threads/" + threadId + "/comments", {
      headers: authHeader()
    });
    return response.data;
  }

  const postComment = async (threadId, content) => {
    const response = await axios
    .post(API_URL + "threads/" + threadId + "/comments", {"content": content}, {
      headers: authHeader(),
    });
    return response.data;
  }

  const Subscribe = async (groupId) => {
    const response = await axios
    .post(API_URL + groupId + "/subscribe", {}, {
        headers: authHeader()
    });
    return response.data;
  }

  const unSubscribe = async (groupId) => {
    const response = await axios
    .post(API_URL + groupId + "/unsubscribe", {}, {
        headers: authHeader()
    });
    return response.data;
  }

  const createGroup = async (name, description) => {
    const response = await axios
    .post(API_URL, {"name": name, "description": description}, {
      headers: authHeader()
    });
    return response.data;
  }

  const toExport = {
    getCreatedGroups,
    getCreatedThreads,
    getCreatedComments,
    getSubscribed,
    searchGroups,
    getAllGroups,
    getAllThreads,
    getGroupThreads,
    postThread,
    getThread,
    getGroup,
    getComments,
    postComment,
    Subscribe,
    unSubscribe,
    createGroup,
  }
  
  export default toExport;