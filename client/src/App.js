import React, {Fragment} from "react";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer";
import "./styles/styles.scss";
import SideNav from "./components/SideNav";
import { useSelector, useDispatch } from "react-redux";
import { disableSidebar } from "./actions/actions"

function App() {
	const dispatch = useDispatch();
	const navOpen = useSelector((state) => state.navToggle);
	
	function sidebarHandler(){
		dispatch(disableSidebar());
	}
	
	let classes;

	( navOpen ? classes = "overlay active" : classes = "overlay" );
	
	return (
		<Fragment>
			<SideNav />
			<div className={classes} onClick={sidebarHandler}/>
				<NaviBar />
				<MainRoutes />
				{/* <Footer /> */}
		</Fragment>
	);
}

export default App;