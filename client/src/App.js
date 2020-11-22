import React, {useState, useEffect} from "react";
import  {BrowserRouter} from "react-router-dom";
import NaviBar from "./components/NaviBar";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer";
import "./styles/styles.scss";

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		console.log("auth state", isAuth);
	}, [isAuth]);

	return (
		<BrowserRouter>
			<NaviBar />
			<MainRoutes setIsAuth={setIsAuth} />
			<Footer />
		</BrowserRouter>
	);
}

export default App;