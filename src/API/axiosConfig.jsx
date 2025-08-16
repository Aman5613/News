import axios from "axios";

const urls = [
  "https://newsdata.io/api/1/latest?apikey=pub_bf64884b99c44516abc99e82c500a2af&language=en,hi",
  "https://newsdata.io/api/1/latest?apikey=pub_6f088160e63e46d7a18a8f55b01d7928&language=en,hi",
  "https://newsdata.io/api/1/latest?apikey=pub_6b31effd669f445c8ed0110b3fb0709a&language=en,hi"
];

// keep track of index
let currentIndex = 0;

const instance = axios.create();

// interceptor to change baseURL before request
instance.interceptors.request.use((config) => {
  // pick sequentially (round-robin)
  config.baseURL = urls[currentIndex];
  currentIndex = (currentIndex + 1) % urls.length;

  // ✅ If you want random instead of sequential:
  // config.baseURL = urls[Math.floor(Math.random() * urls.length)];

  return config;
});

export default instance;
