import React from 'react'

import useTitle from "../components/hooks/useTitle.jsx"

import characters_image from "../files/portfolio/characters.png"
import gallery_image from "../files/portfolio/gallery.png"
import dart_image from "../files/portfolio/dart.png"
import corona_image from "../files/portfolio/corona.png"
import marry_house_image from "../files/portfolio/marry_house.png"
import car_game_image from "../files/portfolio/car_game.png"
import json_editor_image from "../files/portfolio/json_editor.png"
import game_shop_image from "../files/portfolio/game_shop.png"

import "../style/portfolio/portfolio.scss"
import "../style/portfolio/portfolio-phone.scss"


function Portfolio() {
	useTitle("Portfolio");

	function onClickHandler(site) {
		switch (site) {
		case 1:
			window.open("site_1/site_1.html", "_blank");
			break;
		case 2:
			window.open("site_2/site_2.html", "_blank");
			break;
		case 3:
			window.open("site_3/site_3.html", "_blank");
			break;
		case 4:
			window.open("site_4/site_4.html", "_blank");
			break;
		case 5:
			window.open("json_editor/json_editor.html", "_blank");
			break;
		case 6:
			window.open("characters/characters.html", "_blank");
			break;
		case 7:
			window.open("gallery/gallery.html", "_blank");
			break;
		case 8:
			window.open("https://srysis-game-shop.netlify.app", "_blank");
			break;
		default:
			console.error("No such value.");
			break;
		}
	}

	function expandList(event) {
		event.currentTarget.parentElement.classList.toggle("active");

		let list_content = event.currentTarget.nextElementSibling;

		if (list_content.style.maxHeight) {
			list_content.style.maxHeight = null;
		} else {
			list_content.style.maxHeight = list_content.scrollHeight + "px";
		}
	}

	window.addEventListener("popstate", () => {
		window.scrollTo(0, JSON.parse(window.sessionStorage.getItem('scroll_pos')));

		window.sessionStorage.setItem('scroll_pos', JSON.stringify(0));
	})

	return (
		<>
			<h1 id="title">Portfolio</h1>
			<main>
				<div id="landing_pages">
					<button type="button" className="toggle_landing_pages" onClick={expandList}>Landing pages</button>
					<div className="list_content">
						<p className="list_description">This section contains landing pages that I've recreated. Templates for them were found on different and appropriate web-sites.</p>
						<div className="link_to_project" onClick={() => onClickHandler(1)} >
							<img src={dart_image} title="DART SERVICE MANAGER" alt="DART SERVICE MANAGER" />
							<div className="text">
								<h3>DART SERVICE MANAGER</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(2)} >
							<img src={corona_image} title="CORONAVIRUS AWARENESS SPREAD" alt="CORONAVIRUS AWARENESS SPREAD" />
							<div className="text">
								<h3>CORONAVIRUS AWARENESS SPREAD</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(3)}>
							<img src={marry_house_image} title="MARRY HOUSE" alt="MARRY HOUSE" />
							<div className="text">
								<h3>MARRY HOUSE</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(4)}>
							<img src={car_game_image} title="SPEED CAR GAME" alt="SPEED CAR GAME" />
							<div className="text">
								<h3>SPEED CAR GAME</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
					</div>
				</div>
				<div id="full_projects">
					<button type="button" className="toggle_full_projects" onClick={expandList}>Full projects</button>
					<div className="list_content">
						<p className="list_description">
							This section contains projects, that took relatively longer to make. 
							These projects have considerably more features, compared to other prjects.
						</p>
						<div className="link_to_project" onClick={() => onClickHandler(8)}>
							<img src={game_shop_image} title="Game Shop" alt="Game Shop" style={{ "objectPosition": "10% 10%" }} />
							<div className="text">
								<h3>Game Shop</h3>
								<p>A 'proof-of-concept' online shop.</p>
							</div>
						</div>
					</div>
				</div>
				<div id="side_projects">
					<button type="button" className="toggle_side_projects" onClick={expandList}>Side projects</button>
					<div className="list_content">
						<p className="list_description">This section contains smaller projects. They don't have a lot of features and usually revolve around one or two functions.</p>
						<div className="link_to_project" onClick={() => onClickHandler(6)}>
							<img src={characters_image} title="Characters" alt="Characters" />
							<div className="text">
								<h3>Characters</h3>
								<p>A page where you can read some information about my favorite characters.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(7)}>
							<img src={gallery_image} title="Gallery" alt="Gallery" />
							<div className="text">
								<h3>Image gallery</h3>
								<p>A page where you can see images of my favorite characters.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(5)}>
							<img src={json_editor_image} title="JSON editor" alt="JSON editor" />
							<div className="text">
								<h3>JSON Editor</h3>
								<p>A simple and very basic JSON editor app.</p>
							</div>
						</div>
					</div>
				</div>
				<div id="demos">
					<button type="button" className="toggle_demos" onClick={expandList}>Project demos</button>
					<div className="list_content">
						<p className="list_description">
							This section contains videos that demonstrate projects, usually full-stack ones. 
							They were made using all the essential technologies that are required for a Full-Stack application (database, server hosting, handling client-server requests, etc.).
						</p>
						<div className="project">
							<div className="description">
								<h2>'Game Shop' demo</h2>
								<p>
									A build of 'Game Shop' project that was rewritten to utilize database that contains all the neccessary data about games.
									Uses MySQL as a database, created by phpMyAdmin with MAMP software. As a server, it uses Node.js with Express to communicate with a database.
									Requests are handled by Axios.
								</p>
							</div>
							<div className="video_container">
								<video controls controlsList="noRemotePlayback" disablePictureInPicture>
									<source src="Game_Shop_demo.mp4" type="video/mp4" />
								</video>
							</div>
						</div>
						
					</div>
					
				</div>
			</main>
		</>
	)
}

export default Portfolio