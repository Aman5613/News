import instance from "../API/axiosConfig";
import { useEffect, useState } from "react";

const ScienceFP = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const scienceAPI = async (pageNum = 1) => {
    try {
      const res = await instance.get("", {
        params: {
          q: "science",
          page: pageNum,
        },
      });
      const newArticles = res.data.articles || [];
      setArticles((prev) =>
        pageNum === 1 ? newArticles : [...prev, ...newArticles]
      );
      setHasMore(newArticles.length > 0);
    } catch (error) {
      console.error("Error fetching science articles:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    scienceAPI(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="px-3 py-9 flex flex-col gap-5">
      {articles.map((article, index) => (
        <div className="flex flex-col gap-7" key={index}>
          <div className="flex flex-col">
            <div className="w-full h-90 mb-5 ">
              <img
                className="w-full h-full object-cover"
                src={article.urlToImage}
                alt="image"
              />
            </div>
            <p className="uppercase text-red-800 font-semibold text-sm">
              Science
            </p>
            <h1 className="font-bold tracking-wide text-md">{article.title}</h1>
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
      {hasMore && (
        <button
          className="mt-4 px-4 py-2 bg-red-800 text-white rounded"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ScienceFP;
