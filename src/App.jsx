import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import Portfolio from "./pages/portfolio"

import "./style/style.scss"
import "./style/style-phone.scss"

function App() {
	window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	}

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
		</Router>
	);
}

export default App;
