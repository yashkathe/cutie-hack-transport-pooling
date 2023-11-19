import img1 from "../../public/images/landingpagebg.jpg"
import img2 from "../../public/images/bplane.jpeg"
import Link from 'next/link';
const LandingPage = () => {
    return(
        <div>
            <div>
                <img className = "absolute" src = {img2.src}/>
            </div>

            <p className = "relative text-white tracking-wider font-serif pt-28 text-center font-black text-7xl drop-shadow-2xl">CommuteConnect</p>

            <div className = "absolute top-0 right-24"> 
                <Link href = "/signup" className = " bg-gray-900 opacity-80 text-indigo-400 whitespace-nowrap text-lg p-3 mt-4 rounded-md">Sign Up</Link>
            </div>

            <div className = "absolute top-0 right-4 z-20"> 
                <Link href = "/login" className = " bg-gray-900 opacity-80 text-indigo-400 whitespace-nowrap text-lg p-3 mt-4 rounded-md">Login</Link>
            </div>
           
            <div className = "grid grid-cols-2 gap-12 bottom-2 w-full p-4 place-items-center mt-24 bg-stone-950">

                <div className = "bg-gray-900 border border-gray-500 px-28 rounded-lg font-serif mt-8">
                    <p className = " text-indigo-400 text-2xl font-bold text-center whitespace-nowrap mt-4">Why Use CommuteConnect</p>
                    <br></br>
                    <p className = "text-lg text-white">According to the World Health Organization, air pollution kills an estimated seven million people worldwide annually, 
                        making air pollution the <a className = "font-black">4th </a>leading cause of death worldwide. <br></br><br></br> With vehicle emissions as one of the 
                        leading causes of air pollution, we decided to create 
                        <a className = "font-black"> CommuteConnect</a>. CommuteConnect allows you to coordinate carpooling to your destinations, allowing for a decrease in 
                        vehicle emissions for a healthier planet!<br></br><br></br>
                    </p>
                </div>

                <div className = "bg-gray-900 border border-gray-500 px-28 pb-6 rounded-lg font-serif mt-7">
                    <p className = " text-indigo-400 text-2xl font-bold whitespace-nowrap mt-4">How To Use CommuteConnect</p>
                    <br></br>
                    <ol className = "text-lg text-white" style={{ listStyleType: "decimal"}}>
                        <li>
                            If you already have an account, click <a className = "font-black">Login</a> at the top right. If you don't already have an account, click
                            <a className = "font-black"> Sign Up</a>.
                        </li>
                        <li>
                            After logging in, you will be directed to the search page where you can input your <a className = "font-black">designated location</a> and <a className = "font-black">date of travel</a>.
                        </li>
                        <li>
                            After entering your location and travel date, a curated list of fellow travelers heading to the same destination around the same time will be displayed. 
                        </li>
                        <li>Click <a className = "font-black">Chat</a> to contact the user that best matches your travel plans. Happy Traveling!</li>
                    </ol>
                </div>
                <br></br>
            </div>
        </div>
    );
}
export default LandingPage;