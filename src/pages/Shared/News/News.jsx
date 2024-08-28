import { useEffect, useState } from "react";
import NewsCard from "../../../components/NewsCard";

const News = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-3"> BBC Portal Home</h2>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default News;
