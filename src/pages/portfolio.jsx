import { useNavigate } from "react-router-dom" 

import characters_image from "../files/portfolio/characters.png"
import gallery_image from "../files/portfolio/gallery.png"
import dart_image from "../files/portfolio/dart.png"
import corona_image from "../files/portfolio/corona.png"
import marry_house_image from "../files/portfolio/marry_house.png"
import car_game_image from "../files/portfolio/car_game.png"
import json_editor_image from "../files/portfolio/json_editor.png"

import "../style/portfolio/portfolio.scss"
import "../style/portfolio/portfolio-phone.scss"


function Portfolio() {
	const navigate = useNavigate();

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
		}
	}

	return (
		<>
			<h1>Portfolio</h1>
			<h3>
				Here resides the collection of my little projects that I've managed to build in my learning process. 
				Some are just implementations of existing designs, while some are the ideas that my made up on my own.
			</h3>
			<div className="link_to_project" onClick={() => {navigate("/characters")}}>
				<img src={characters_image} title="Characters" />
				<div className="text">
					<h3>Characters</h3>
					<p>A page where you can read some information about my favorite characters.</p>
				</div>
			</div>
			<div className="link_to_project" onClick={() => {navigate("/gallery")}}>
				<img src={gallery_image} title="Gallery" />
				<div className="text">
					<h3>Image gallery</h3>
					<p>A page where you can see images of my favorite characters.</p>
				</div>
			</div>
			<div className="link_to_project" onClick={() => onClickHandler(5)}>
				<img src={json_editor_image} title="JSON editor" />
				<div className="text">
					<h3>JSON Editor</h3>
					<p>A simple and very basic JSON editor app.</p>
				</div>
			</div>
			<div className="link_to_project" onClick={() => onClickHandler(1)} >
				<img src={dart_image} title="DART SERVICE MANAGER" />
				<div className="text">
					<h3>DART SERVICE MANAGER</h3>
					<p>A landing page template that I have implemented and adapted to smaller screens.</p>
				</div>
			</div>
			<div className="link_to_project" onClick={() => onClickHandler(2)} >
				<img src={corona_image} title="CORONAVIRUS AWARENESS SPREAD" />
				<div className="text">
					<h3>CORONAVIRUS AWARENESS SPREAD</h3>
					<p>A landing page template that I have implemented and adapted to smaller screens.</p>
				</div>
			</div>
			<div className="link_to_project" onClick={() => onClickHandler(3)}>
				<img src={marry_house_image} title="MARRY HOUSE" />
				<div className="text">
					<h3>MARRY HOUSE</h3>
					<p>A landing page template that I have implemented and adapted to smaller screens.</p>
				</div>
			</div>
			<div className="link_to_project" onClick={() => onClickHandler(4)}>
				<img src={car_game_image} title="SPEED CAR GAME" />
				<div className="text">
					<h3>SPEED CAR GAME</h3>
					<p>A landing page template that I have implemented and adapted to smaller screens.</p>
				</div>
			</div>
		</>
	)
}

export default Portfolio