import React from "react"

import GallerySwitches from "../components/Gallery/GallerySwitches"
import GalleryContainer from "../components/Gallery/GalleryContainer"
import GalleryFullscreen from "../components/Gallery/GalleryFullscreen"

import cross from "../files/cross.svg"

import "../style/gallery/gallery.css"
import "../style/gallery/gallery-phone.css"

function Gallery() {
	const [isGalleryActive, toggleGallery] = React.useState(false);
	const [isInFullScreen, toggleFullScreen] = React.useState(false);

	const [currentCharacter, setCurrentCharacter] = React.useState("");
	const [currentCharacterImage, setCurrentCharacterImage] = React.useState("");

	function toggleFullscreenWrap(value) {
		toggleFullScreen(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = 0;
		}
	}

	function toggleGalleryWrap(value) {
		toggleGallery(value);
	}

	function toggleCharacter(character) {
		setCurrentCharacter(character);
	}

	function toggleCharacterImage(characterImage) {
		setCurrentCharacterImage(characterImage);
	}

	return(
		<>
			<h1>Gallery</h1>
			<hr className="header_hr" />
			<GallerySwitches toggleGalleryFunction={toggleGalleryWrap} toggleCharacterFunction={toggleCharacter} />
			{ isGalleryActive && <GalleryContainer character={currentCharacter} toggleCharacterImageFunction={toggleCharacterImage} toggleFullscreenFunction={toggleFullscreenWrap} /> }
			{ isInFullScreen && <GalleryFullscreen toggleFullscreenFunction={toggleFullscreenWrap} currentImage={currentCharacterImage} /> }
		</>
	)
}

export default Gallery