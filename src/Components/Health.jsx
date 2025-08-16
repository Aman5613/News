import { FaArrowRight } from "react-icons/fa";
import instance from "../API/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Health = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const healthAPI = async () => {
    try {
      const res = await instance.get("", {
        params: {
          q: "health",
        },
      });
      setArticles(res.data.results);
    } catch (error) {
      console.error("Error fetching health articles:", error);
    }
  };

  useEffect(() => {
    healthAPI();
  }, []);

  return (
    <div className="px-3 py-9 flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <div className="vline w-[3px] md:w-[10px] rounded-full h-8 bg-red-800"></div>
        <p className="font-bold md:text-4xl">Health</p>
        <div className="hline w-[50%] h-[2px] md:w-[60%] md:h-[4px] rounded-full bg-black opacity-80"></div>
        <p
          onClick={() => {
            navigate("/health");
          }}
          className="md:text-4xl flex items-center gap-1 text-red-800 font-semibold cursor-pointer hover:scale-105"
        >
          View All <FaArrowRight />
        </p>
      </div>
      <div className="flex flex-col justify-between gap-7 md:flex-row flex-wrap">
        {articles.map((article, index) => (
          <div className="flex flex-col  md:w-[48%] lg:w-[30%]" key={index}>
            <div className="w-full h-fit mb-5 ">
              <img
                className="w-full h-full object-contain"
                src={article.image_url}
                alt=""
              />
            </div>
            <p className="uppercase text-red-800 font-semibold text-sm">
              Health
            </p>
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
        ))}
      </div>
    </div>
  );
};

export default Health;
