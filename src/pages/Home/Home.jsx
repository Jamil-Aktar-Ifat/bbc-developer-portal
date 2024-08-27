import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import News from "../Shared/News/News";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <News></News>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
