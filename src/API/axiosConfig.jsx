import axios from "axios";

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    apikey: "f64398ffdc1949f5927ca8450f4fbf7e",
    // apikey: "1b9f7b2caa604f38baababf96718bdd3",
    from: yesterday.toISOString().split("T")[0], 
    to: new Date().toISOString().split("T")[0],
  },
});

export default instance;
