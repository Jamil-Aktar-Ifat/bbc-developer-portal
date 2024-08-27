import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import moment from "moment";
import img_1 from "../../../../public/media/1.png";
import img_2 from "../../../../public/media/2.png";
import img_3 from "../../../../public/media/3.png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl p-4">All Category </h2>
      <div className=" ">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="block text-[#9F9F9F] text-lg font-medium pl-10 btn btn-outline border-none text-left py-3 rounded-none"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="p-4 my-4">
        <div>
          <img src={img_1} alt="" />
          <p className="text-xl font-semibold my-3">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex gap-4 items-center ">
            <p className="font-semibold">Sports</p>
            <div className="flex gap-2 items-center">
              <SlCalender></SlCalender>
              <p className="font-medium">{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="my-12">
          <img src={img_2} alt="" />
          <p className="text-xl font-semibold my-3">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex gap-4 items-center ">
            <p className="font-semibold">Sports</p>
            <div className="flex gap-2 items-center">
              <SlCalender></SlCalender>
              <p className="font-medium">{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
        <div>
          <img src={img_3} alt="" />
          <p className="text-xl font-semibold my-3">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex gap-4 items-center ">
            <p className="font-semibold">Sports</p>
            <div className="flex gap-2 items-center">
              <SlCalender></SlCalender>
              <p className="font-medium">{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
