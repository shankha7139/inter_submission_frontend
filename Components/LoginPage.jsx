import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post(`https://submitbackend.onrender.com/login`,{email,password})
        .then(result => console.log(result))
        .catch(error => console.log(error) )
    }
    return(
        <div>
        <div>
        <div className=" bg-zinc-300 py-4 px-12 flex gap-12 items-center ">
          <Link to={"/"} className="text-3xl font-bold ">
            LOGO
          </Link>
        </div>
      </div>
      <h1 className="pl-40 pt-10 font-bold text-xl ">LOGIN HERE</h1>
            <form action="" onSubmit={handleLogin} >
            <div className=" pt-11 px-40 flex flex-col gap-3 justify-center">
            <h2>Email</h2>
            <input type="text" className="border py-1 px-2 border-l border-gray-500 rounded-md" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" />
            <h2>Password</h2>
            <input type="password" className="border py-1 px-2 border-l border-gray-500 rounded-md " onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" />
            <button className="bg-zinc-400 font-bold px-6 py-2 rounded-xl " >Login</button>
            <p className="py-2 text-lg ">New user? <Link to={'/signup'} className="hover:text-sky-400 pl-2 underline " > Register </Link> </p>
        </div>
        </form>
        </div>
    )
}