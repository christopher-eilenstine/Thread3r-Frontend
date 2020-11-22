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

  const toExport = {
    getSubscribed,
    searchGroups,
    getAllGroups,
  }
  
  export default toExport;