import axios from "axios";

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const apiKeys = [
  "f64398ffdc1949f5927ca8450f4fbf7e",
  "1b9f7b2caa604f38baababf96718bdd3",
  "9bb3d1d5936a40da873f15fac7c449e7"
];

let currentKeyIndex = 0;

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    apikey: apiKeys[currentKeyIndex],
    from: yesterday.toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
});

// Interceptor to rotate API keys on each request
instance.interceptors.request.use(config => {
  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
  config.params.apikey = apiKeys[currentKeyIndex];
  return config;
});

export default instance;
