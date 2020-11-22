import React, {Fragment, useState, useEffect} from "react";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer";
import "./styles/styles.scss";
import SideNav from "./components/SideNav";
import "./styles/nav.css"

function App() {
	return (
		<Fragment>
			<NaviBar />
			<MainRoutes />
			<Footer />
		</Fragment>
	);
}


	// --------- BEFORE REDUX --------- //
// const [isAuth, setIsAuth] = useState(false);
// 	const [ navOpen, toggleNav ] = useState(false);

// 	useEffect(() => {
// 		console.log("auth state", isAuth);
// 	}, [isAuth]);


	// return (
	// 	<div className="wrapper">
	// 		<BrowserRouter>			
	// 			<SideNav open={navOpen} toggleNav={toggleNav} />
	// 			<div id="content">
	// 			{ navOpen ? 
	// 				<div className="overlay active" />
	// 				:
	// 				<div className="overlay" />
	// 			}
	// 				<NaviBar open={navOpen} toggleNav={toggleNav} />
	// 				<MainRoutes auth={{isAuth, setIsAuth}} />
	// 				<Footer />
	// 			</div>
	// 		</BrowserRouter>
	// 	</div>
export default App;