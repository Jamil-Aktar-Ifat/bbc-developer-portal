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
    <div>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default News;
