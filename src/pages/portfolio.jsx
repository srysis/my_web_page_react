import characters_image from "../files/portfolio/characters.png"
import gallery_image from "../files/portfolio/gallery.png"
import dart_image from "../files/portfolio/dart.png"
import corona_image from "../files/portfolio/corona.png"
import marry_house_image from "../files/portfolio/marry_house.png"

import "../style/portfolio/portfolio.css"
import "../style/portfolio/portfolio-phone.css"


function Portfolio() {
	function onClickHandler(site) {
		if (site === 1) {
			window.open("site_1/site_1.html", "_self");
		}
	}

	return (
		<>
			<h1>Portfolio</h1>
			<h3>
				Here resides the collection of my little projects that I've managed to complete in my learning process. 
				Some are just implementations of existing designs, while some are the ideas that my made up on my own.
			</h3>
			<div className="link_to_project one" >
				<img src={characters_image} title="Characters" />
				<div className="text">
					<h3>Characters</h3>
					<p>A page where you can find my favorite characters and read some information about them.</p>
				</div>
			</div>
			<div className="link_to_project two">
				<img src={gallery_image} title="Gallery" />
				<div className="text">
					<h3>Image gallery</h3>
					<p>A page where you can see all images of my favorite characters.</p>
				</div>
			</div>
			<div className="link_to_project three" onClick={() => onClickHandler(1)} >
				<img src={dart_image} title="DART SERVICE MANAGER" />
				<div className="text">
					<h3>DART SERVICE MANAGER</h3>
					<p>A landing page template that I have implemented and adapted to smaller screens.</p>
				</div>
			</div>
			<div className="link_to_project four">
				<img src={corona_image} title="CORONAVIRUS AWARENESS SPREAD" />
				<div className="text">
					<h3>CORONAVIRUS AWARENESS SPREAD</h3>
					<p>A landing page template that I have implemented and adapted to smaller screens.</p>
				</div>
			</div>
			<div className="link_to_project five">
				<img src={marry_house_image} title="MARRY HOUSE" />
				<div className="text">
					<h3>MARRY HOUSE</h3>
					<p>A landing page template that I have implemented and adapted to smaller screens.</p>
				</div>
			</div>
		</>
	)
}

export default Portfolio