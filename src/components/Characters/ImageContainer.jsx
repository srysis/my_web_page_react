import React from "react"

function ImageContainer({image_source, text, altText, toggleFullscreenFunction, setCurrentImageFunction}) {
	return(
		<div className="image_table_row">
			<img src={image_source} title={text} alt={altText} onClick={() => { toggleFullscreenFunction(true); setCurrentImageFunction(image_source) }} />
			<p>{text}</p>
		</div>
	)
}

export default ImageContainer