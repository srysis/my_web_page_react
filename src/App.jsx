import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import NotFoundPage from "./pages/not_found_page.jsx"

import "./style/style.scss"
import "./style/style-phone.scss"

function App() {
	window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	}

	return (
		<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
