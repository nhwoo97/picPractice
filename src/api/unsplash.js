import axios from "axios";

export default axios.create({
  headers: {
    baseURL: "https://api.unsplash.com",
    Authorization: "Client-ID rBPHCeZ1hH2uRnKv1IUHfmFeShhw9ZJOH-T8OioPPXs",
  },
});
