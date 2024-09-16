import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./Layout"

import Home from "./pages/home"
import AboutMe from "./pages/about_me"
import Portfolio from "./pages/portfolio"

import "./style/style.css"
import "./style/style-phone.css"

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about_me" element={<AboutMe />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
