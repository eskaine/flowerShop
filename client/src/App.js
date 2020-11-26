import React, {Fragment} from "react";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
import "./styles/styles.scss";
import SideNav from "./components/SideNav";
import { useSelector, useDispatch } from "react-redux";
import { disableSidebar } from "./helpers/actions"
import Alerts from "./components/Alerts";
import Footer from "./components/Footer";

function App() {
	const dispatch = useDispatch();
	const navOpen = useSelector((state) => state.navToggle);
	
	function sidebarHandler(){
		dispatch(disableSidebar());
	}
	
	return (
		<Fragment>
			<div className="d-flex flex-column align-items-start" style={{height: '100vh'}}>
				<div className="mb-auto">
					<SideNav />
					<div className={navOpen ? "overlay active" : "overlay"} onClick={sidebarHandler}/>
					<NaviBar />
					<Alerts />
					<MainRoutes />
				</div>
				<div className="mt-5 footer-top mx-auto">
					<Footer />
				</div>
			</div>
		</Fragment>
	);
}

export default App;