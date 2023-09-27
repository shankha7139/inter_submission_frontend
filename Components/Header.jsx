import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" p-4 flex bg-zinc-300 items-center justify-between ">
      <div className=" pl-12 flex gap-12 items-center ">
        <Link to={'/'} className="text-3xl font-bold ">LOGO</Link>
        <a href="" className="text-xl" >Home</a>
      </div>
      <div className="flex gap-6 pr-12 ">
        <Link to={'/login'} className="bg-sky-300 py-3 px-7 rounded-xl font-bold hover:shadow-lg ">Login</Link>
        <Link to={'/signup'} className="bg-sky-200 py-3 px-7 rounded-xl font-bold hover:shadow-lg">SignUp</Link>
      </div>
    </div>
  );
}
