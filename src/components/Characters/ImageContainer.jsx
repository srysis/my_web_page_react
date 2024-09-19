import React from "react"

function ImageContainer({image_source, text, altText, setFullscreenFunction, setCurrentImageFunction}) {
	return(
		<div className="image_table_row">
			<img src={image_source} title={text} alt={altText} onClick={() => { setFullscreenFunction(true); setCurrentImageFunction(image_source) }} />
			<p>{text}</p>
		</div>
	)
}

export default ImageContainer