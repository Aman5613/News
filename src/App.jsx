import { useEffect } from "react";
import instance from "./API/axiosConfig";
import Nav from "./Nav/Nav";
import Hero from "./Components/Hero";
import Health from "./Components/Health";

const App = () => {
  const news = async () => {
    const response = await instance.get("/everything", {
      params: {
        q: "all",
        from: "2025-08-02",
        to: "2025-08-02",
        apiKey: "1b9f7b2caa604f38baababf96718bdd3",
      },
    });
    console.log(response.data.articles[0].content);
  };
  useEffect(() => {
    // news();
  }, []);

  return (
    <div>
      <Nav />
      <hr />
      <Hero />
      <Health />
    </div>
  );
};

export default App;
