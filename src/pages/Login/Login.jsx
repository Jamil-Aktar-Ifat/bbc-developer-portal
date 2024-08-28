import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10">
        <form
          onSubmit={handleSubmit}
          className="p-10 bg-[#F3F3F3] border  mx-32"
        >
          <h2 className="text-3xl font-semibold text-center">
            Login your account
          </h2>
          <hr className="my-10" />
          <div className="lg:ml-40">
            <div>
              <p className="font-semibold mt-3 mb-2">Email Address</p>
              <input
                className="w-3/4 p-4 "
                placeholder="Enter your email address"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div>
              <p className="font-semibold mt-3 mb-2">Password</p>
              <input
                className="w-3/4 p-4 "
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <button className=" my-6 w-3/4  text-lg text-white bg-black btn btn-outline rounded-none ">
              Login
            </button>
          </div>
          <p className="text-center">
            Don't have an Account?{" "}
            <Link className="text-red-600">Register</Link> now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
