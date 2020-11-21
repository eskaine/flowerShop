import React from "react";
import  {BrowserRouter} from "react-router-dom";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/MainRoutes";
import Footer from "./components/Footer";
import "./styles/styles.scss";

function App() {
	return (
		<BrowserRouter>
			<NaviBar />
			<MainRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;