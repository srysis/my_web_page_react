import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import NotFoundPage from "./pages/not_found_page.jsx"

import "./style/style.scss"
import "./style/style-phone.scss"

function App() {
	window.history.scrollRestoration = 'manual';

	return (
		<HashRouter basename="/">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
