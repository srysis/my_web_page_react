import React from "react"

import GallerySwitches from "../components/Gallery/GallerySwitches"
import GalleryContainer from "../components/Gallery/GalleryContainer"
import GalleryFullscreen from "../components/Gallery/GalleryFullscreen"

import cross from "../files/cross.svg"

import "../style/gallery/gallery.css"
import "../style/gallery/gallery-phone.css"
import "../style/shared.css"

function Gallery() {
	const [isGalleryActive, toggleGallery] = React.useState(false);
	const [isInFullscreen, toggleFullscreen] = React.useState(false);

	const [currentCharacter, setCurrentCharacter] = React.useState("");
	const [currentCharacterImage, setCurrentCharacterImage] = React.useState("");

	function toggleFullscreenFromChildComponent(value) {
		toggleFullscreen(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = 0;
		}
	}

	function toggleGalleryFromChildComponent(value) {
		toggleGallery(value);
	}

	function setCharacterFromChildComponent(character) {
		setCurrentCharacter(character);
	}

	function setCharacterImageFromChildComponent(characterImage) {
		setCurrentCharacterImage(characterImage);
	}

	return(
		<>
			<h1>Gallery</h1>
			<hr className="header_hr" />
			<GallerySwitches toggleGalleryFunction={toggleGalleryFromChildComponent} setCharacterFunction={setCharacterFromChildComponent} />
			{ isGalleryActive 
				&& <GalleryContainer 
						character={currentCharacter} 
						setCurrentCharacterImageFunction={setCharacterImageFromChildComponent} 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent} 
					/> 
			}
			{ isInFullscreen && <GalleryFullscreen toggleFullscreenFunction={toggleFullscreenFromChildComponent} currentImage={currentCharacterImage} /> }
		</>
	)
}

export default Gallery