import { useEffect, useState } from "react";
import NewsCard from "../../../components/NewsCard";

const News = () => {
  const [allNews, setAllNews] = useState([]);
  const [dataLength, setDataLength] = useState(2);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-3"> BBC Portal Home</h2>
      {allNews.slice(0, dataLength).map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
      <div className={dataLength === allNews.length ? "hidden" : ""}>
        <div className="text-center">
          <button
            className="px-7 text-lg text-white bg-[#D72050] btn btn-outline border-[#D72050] rounded-none"
            onClick={() => {
              setDataLength(allNews.length);
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
