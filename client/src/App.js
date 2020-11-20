import React from "react";
import  {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoutes from "./components/MainRoutes";
import Footer from "./components/Footer";


function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<MainRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;