import axios from "axios";

// create an axios instance for HTTP requests
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7127127f4a84f0a85566f7991549090",
  },
});
