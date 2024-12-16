import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./Layout"

import Home from "./pages/home"
import Portfolio from "./pages/portfolio"

import "./style/style.scss"
import "./style/style-phone.scss"

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
