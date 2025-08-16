import instance from "../API/axiosConfig";
import { useEffect, useState } from "react";

const PoliticsFP = () => {
  const [articles, setArticles] = useState([]);
  const [nextPage, setnextPage] = useState();

  const politicsAPI = async (nextPage) => {
    try {
      const res = await instance.get("", {
        params: {
          q: "politics",
          ...(nextPage ? { page: nextPage } : {})
        },
      });
      setnextPage(res.data.nextPage)
      const newArticles = res.data.results || [];
      setArticles(prevArticles => [...prevArticles, ...newArticles]);
      
      
    } catch (error) {
      console.error("Error fetching politics articles:", error);
    }
  };

  useEffect(() => {
    politicsAPI(nextPage);
  }, []);

  const handleLoadMore = () => {
    politicsAPI(nextPage);
  };

  return (
    <div className="px-3 py-9 flex flex-col justify-between gap-5 md:flex-row md:flex-wrap">
      {articles.map((article, index) => (
        <div className="flex flex-col gap-7 md:w-[48%] lg:w-[30%]" key={index}>
          <div className="flex flex-col">
            <div className="w-full h-fit mb-5 ">
              <img
                className="w-full h-full object-contain"
                src={article.image_url}
                alt="image"
              />
            </div>
            <p className="uppercase text-red-800 font-semibold text-sm">
              politics
            </p>
            <h1 className="font-bold tracking-wide text-md">{article.title}</h1>
            <p className="text-sm opacity-70 line-clamp-6">{article.description}</p>
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
      { (
        <button
          className="mt-4 px-4 py-2 h-10 cursor-pointer bg-red-800 text-white rounded"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default PoliticsFP;
