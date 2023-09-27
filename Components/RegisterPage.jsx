import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://submitbackend.onrender.com/signup", { name, email, password })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <div className=" bg-zinc-300 py-4 px-12 flex gap-12 items-center ">
          <Link to={"/"} className="text-3xl font-bold ">
            LOGO
          </Link>
        </div>
      </div>
      <h1 className="pl-40 pt-10 font-bold text-xl ">REGISTER HERE</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 pt-1 px-40 flex flex-col gap-3 justify-center">
          <h2>Name</h2>
          <input
            type="text"
            className="border py-1 px-2 border-l border-gray-500 rounded-md "
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <h2>Email</h2>
          <input
            type="email"
            className="border py-1 px-2 border-l border-gray-500 rounded-md "
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2>Password</h2>
          <input
            type="password"
            className="border py-1 px-2 border-l border-gray-500 rounded-md "
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-zinc-400 font-bold px-6 py-2 rounded-xl ">
            Register
          </button>
          <p className="py-2 text-lg ">
            Already Registered?
            <Link
              to={"/login"}
              className="hover:text-sky-400 pl-2 underline "
              href=""
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
