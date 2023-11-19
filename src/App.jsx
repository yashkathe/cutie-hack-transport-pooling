import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
	return (
		<>
			<header>
                <Header/>
            </header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
