import Link from 'next/link';
import img1 from "../../public/images/landingpagebg.jpg"

const Login = () => {
  return (
    <div>
      <div>
        <img className = "absolute opacity-40" src = {img1.src}/>
      </div>
      <p className = "relative text-rose-800 tracking-wider font-serif pt-28 text-center font-black text-7xl">CommuteConnect</p>
      <p className = "relative text-emerald-700 tracking-wider font-serif pt-12 text-center font-black text-4xl">Login</p>
      <div className = "absolute top-0 left-10"> 
        <Link href = "/" className = " bg-white opacity-80 text-rose-800 whitespace-nowrap text-lg p-3 mt-4 rounded-md">Home</Link>
      </div>
      <div className="rounded border p-4">
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <div className="inline mr-2">Username:</div>
            <input type="text" placeholder="username" className="shadow rounded w-3/4 p-2" />
          </div>
          <div className="flex items-center mb-2">
            <div className="inline mr-2">Password:</div>
            <input type="password" placeholder="password" className="shadow rounded w-3/4 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
