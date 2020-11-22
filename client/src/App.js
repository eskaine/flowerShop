import React, {Fragment, useState} from "react";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer";
import "./styles/styles.scss";
import SideNav from "./components/SideNav";

function App() {
	
	const [ navOpen, toggleNav ] = useState(false);
	let classes;

	( navOpen ? classes = "overlay active" : classes = "overlay" );
	
	return (
		<Fragment>
			<SideNav open={navOpen} toggleNav={toggleNav} />
			<div className={classes} />
				<NaviBar open={navOpen} toggleNav={toggleNav} />
				<MainRoutes />
				<Footer />
		</Fragment>
	);
}

export default App;