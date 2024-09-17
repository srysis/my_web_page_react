import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./Layout"

import Home from "./pages/home"
import AboutMe from "./pages/about_me"
import Portfolio from "./pages/portfolio"

import Characters from "./pages/characters/characters"
import Alice from "./pages/characters/alice"
import Jane from "./pages/characters/jane"
import Pandemonica from "./pages/characters/pandemonica"
import Willow from "./pages/characters/willow"

import "./style/style.css"
import "./style/style-phone.css"

import "./style/characters/characters.css"
import "./style/characters/characters-phone.css"

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about_me" element={<AboutMe />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/characters" element={<Characters />} />
					<Route path="/characters/alice" element={<Alice />} />
					<Route path="/characters/jane" element={<Jane />} />
					<Route path="/characters/pandemonica" element={<Pandemonica />} />
					<Route path="/characters/willow" element={<Willow />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
