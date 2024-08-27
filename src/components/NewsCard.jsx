import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  return (
    <div>
      <h2>{news.total_view}</h2>
    </div>
  );
};

NewsCard.propTypes = {};

export default NewsCard;
