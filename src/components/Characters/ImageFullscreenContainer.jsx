import React from "react"

import cross from "../../files/cross.svg"

function ImageFullscreenContainer({toggleFullscreenFunction, currentImage, character}) {
	return(
		<div id="image_fullscreen_overlay_container" className="active" >
			{/*<button id="prev_photo">&lt;</button> */}
			<img className={character === "Alice" ? "image_fullscreen alice" : "image_fullscreen willow"} src={currentImage} />
			{/*<button id="next_photo">&gt;</button>*/}
			<button id="close_button" onClick={() => toggleFullscreenFunction(false)} ><img src={cross} /></button>
		</div>
	)
}

export default ImageFullscreenContainer