import instance from "../API/axiosConfig";

import { useEffect, useState } from "react";

const Hero = () => {
  const [articles, setArticles] = useState([]);

  const heroAPI = async () => {
    try {
      const res = await instance.get("", {
        params: {
          q: "latest,important,indian-news",
        },
      });
      console.log(res.data.results);
      
      setArticles(res.data.results)
    } catch (error) {
      console.error("Error fetching hero articles:", error);
    }
  };

  useEffect(() => {
    heroAPI();
  }, []);

  return (
    <div className="px-3 py-9 flex flex-col justify-between gap-5 md:flex-row md:flex-wrap">
      {articles.map((article, index) => (
        <div className="flex flex-col gap-7 md:w-[48%] lg:w-[30%] " key={index}>
          <div className="flex flex-col">
            <div className="w-full h-fit mb-5 ">
              <img
                className="w-full  object-contain"
                src={article.image_url}
                alt=""
              />
            </div>
            {/* <p className="uppercase text-red-800 font-semibold text-sm">
              hero
            </p> */}
            <h1 className="font-bold tracking-wide text-md">{article.title}</h1>
            <p className="text-sm opacity-70">{article.description}</p>
            <p className="text-sm opacity-70">{article.pubDate}</p>
            <button
              className="mt-2 px-3 py-1 bg-red-800 text-white rounded hover:bg-red-900 transition"
              onClick={() => window.open(article.link, "_blank")}
            >
              Read Full Article
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
