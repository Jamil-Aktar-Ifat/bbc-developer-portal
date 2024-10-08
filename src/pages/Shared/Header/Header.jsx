import "./Header.css";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mt-10 header">BBC Developer Portal</h2>
      <p className="my-3">Journalism Without Fear or Favour</p>
      <p className="mb-4">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;
