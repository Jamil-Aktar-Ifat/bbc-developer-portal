import PropTypes from "prop-types";
import moment from "moment";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { useState } from "react";

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-md mb-10">
      {/* navbar */}
      <div className="flex justify-between items-center bg-[#F3F3F3] p-4 mb-5">
        <div className="flex items-center gap-4">
          <img className="w-10 rounded-full" src={news.author.img} alt="" />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="font-medium">{moment().format("MMMM D, YYYY")}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaRegBookmark></FaRegBookmark>
          <IoMdShare></IoMdShare>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div>
          <h2 className="text-lg font-bold">{news.title}</h2>
        </div>
        <div className="my-4">
          <img src={news.image_url} alt="" />
        </div>
        <div>
          <p
            className={`overflow-hidden transition-all ${
              isExpanded ? "max-h-full" : "max-h-24"
            }`}
          >
            {news.details}
          </p>
          <button
            className="text-[#FF8C47] font-semibold mt-2"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 text-[#FF8C47]">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <div>
              <p>{news.rating.number}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BsFillEyeFill></BsFillEyeFill>
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
