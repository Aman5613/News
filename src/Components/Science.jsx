import { FaArrowRight } from "react-icons/fa";
import instance from "../API/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Science = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const scienceAPI = async (pageNum = 1) => {
    try {
      const res = await instance.get("", {
        params: {
          q: "science",
          page: pageNum,
          // pageSize: 15, // Limit to 15 articles per request
        },
      });
      setArticles(res.data.articles?.slice(0, 15) || []);
    } catch (error) {
      console.error("Error fetching science articles:", error);
    }
  };

  useEffect(() => {
    scienceAPI(page);
  }, [page]);

  return (
    <div className="px-3 py-9 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="vline w-[3px] rounded-full h-8 bg-red-800"></div>
        <p className="font-bold">Science</p>
        <div className="hline w-[50%] h-[2px] rounded-full bg-black opacity-80"></div>
        <p onClick={() => {navigate("/science")}} className="flex items-center gap-1 text-red-800 font-semibold cursor-pointer hover:scale-105">
          View All <FaArrowRight />
        </p>
      </div>
      {articles.map((article, index) => (
        <div className="flex flex-col gap-7" key={index}>
          <div className="flex flex-col">
            <div className="w-full h-90 mb-5 ">
              <img
                className="w-full h-full object-cover"
                src={article.urlToImage}
                alt=""
              />
            </div>
            <p className="uppercase text-red-800 font-semibold text-sm">
              Science
            </p>
            <h1 className="font-bold tracking-wide text-md">
              {article.title}
            </h1>
            <p className="text-sm opacity-70">{article.description}</p>
            <p className="text-sm opacity-70">{article.publishedAt}</p>
            <button
              className="mt-2 px-3 py-1 bg-red-800 text-white rounded hover:bg-red-900 transition"
              onClick={() => window.open(article.url, "_blank")}
            >
              Read Full Article
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Science;
