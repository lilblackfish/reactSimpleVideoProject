import axios from "axios";

const KEY = "AIzaSyCWcDmafmvJ0Gcq-tpeHbWL12utvQljT8g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
