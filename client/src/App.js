import React, {Fragment} from "react";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
import "./styles/styles.scss";
import SideNav from "./components/SideNav";
import { useSelector, useDispatch } from "react-redux";
import { disableSidebar } from "./helpers/actions"
import Alerts from "./components/Alerts";

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
				<Alerts />
				<MainRoutes />
		</Fragment>
	);
}

export default App;