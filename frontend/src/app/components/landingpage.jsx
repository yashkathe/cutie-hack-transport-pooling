import img1 from "../../../public/images/landingpagebg.jpg"
const LandingPage = () => {
    /*
    const bodyStyles = {
        backgroundColor: "#e4d2ba", 
      };
    */
    return(
        <div /*style={bodyStyles}*/>
            <div>
                <img className = "absolute opacity-40" src = {img1.src}/>
            </div>

            <div className = "absolute top-0 right-24"> 
                <button className = " bg-white opacity-80 text-rose-800 whitespace-nowrap text-lg p-3 mt-4 rounded-md">Sign Up</button>
            </div>

            <div className = "absolute top-0 right-4 z-20"> 
                <button className = " bg-white opacity-80 text-rose-800 whitespace-nowrap text-lg p-3 mt-4 rounded-md">Login</button>
            </div>

            <p className = "relative text-rose-800 tracking-wider font-serif pt-28 text-center font-black text-7xl">CommuteConnect</p>
           
            <div className = "grid grid-cols-2 gap-16 absolute bottom-4 w-full p-4 place-items-center mx-16 max-w-screen-xl">
                
                <div className = "bg-orange-100 border border-gray-500 px-28 rounded-lg font-serif">
                    <p className = " text-rose-800 text-2xl font-bold text-center whitespace-nowrap mt-4">Why Use CommuteConnect</p>
                    <br></br>
                    <p className = "text-lg">According to the World Health Organization, air pollution kills an estimated seven million people worldwide annually, 
                        making air pollution the <a className = "font-black">4th </a>leading cause of death worldwide. <br></br><br></br> With vehicle emissions as one of the 
                        leading causes of air pollution, we decided to create 
                        <a className = "font-black"> CommuteConnect</a>. CommuteConnect allows you to coordinate carpooling to your destinations, allowing for a decrease in 
                        vehicle emissions for a healthier planet!<br></br><br></br>
                    </p>
                </div>

                <div className = "bg-orange-100 border border-gray-500 px-28 pb-8 rounded-lg font-serif">
                    <p className = " text-rose-800 text-2xl font-bold whitespace-nowrap mt-4">How To Use CommuteConnect</p>
                    <br></br>
                    <ol className = "text-lg" style={{ listStyleType: "decimal"}}>
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

            </div>
        </div>
    );
}
export default LandingPage;