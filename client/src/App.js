import React, {Fragment, useState, useEffect} from "react";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer";
import "./styles/styles.scss";

function App() {
	return (
		<Fragment>
			<NaviBar />
			<MainRoutes />
			<Footer />
		</Fragment>
	);
}

export default App;