import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] py-3 pl-2">
      <button className="px-5 py-2 text-white bg-[#D72050] ">Latest</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link className="mr-12">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
