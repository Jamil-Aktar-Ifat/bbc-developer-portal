import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "/media/qZone1.png";
import qZone2 from "/media/qZone2.png";
import qZone3 from "/media/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* login with  */}
      <div className="p-4">
        <h2 className="text-3xl mb-3">Login With</h2>
        <button className="btn btn-outline w-full border-blue-300 font-normal mb-3">
          <FcGoogle></FcGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full font-normal">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      {/* find us on  */}
      <div className="p-4">
        <h2 className="text-3xl mb-3">Find Us On</h2>
        <a
          className="flex items-center gap-3 border rounded-t-md p-3 hover:bg-slate-800 hover:text-white"
          href=""
        >
          <FaFacebook></FaFacebook>
          Facebook
        </a>
        <a
          className="flex items-center gap-3 border-x  p-3 hover:bg-slate-800 hover:text-white"
          href=""
        >
          <FaTwitter></FaTwitter>
          Twitter
        </a>
        <a
          className="flex items-center gap-3 border rounded-b-md p-3 hover:bg-slate-800 hover:text-white"
          href=""
        >
          <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>
      {/* Q Zone  */}
      <div className="p-4 bg-[#F3F3F3]">
        <h2 className="text-3xl mb-3">Q Zone</h2>
        <img src={qZone1} alt="picture-1" />
        <img src={qZone2} alt="picture-2" />
        <img src={qZone3} alt="picture-3" />
      </div>
      {/* create amazing newspaper  */}
      <div className="bg-[#05001DCC] p-4 text-white text-center mt-4">
        <h2 className="text-3xl font-bold mt-7 ">
          Create an Amazing Newspaper
        </h2>
        <p className=" text-lg font-medium my-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="px-7  mb-7 text-lg text-white bg-[#D72050] btn btn-outline border-[#D72050] rounded-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
