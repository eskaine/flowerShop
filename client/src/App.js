import React, {Fragment} from "react";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
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
	
	return (
		<Fragment className="m-0">
			<SideNav />
			<div className={navOpen ? "overlay active" : "overlay"} onClick={sidebarHandler}/>
				<NaviBar />
				<MainRoutes />
		</Fragment>
	);
}

export default App;