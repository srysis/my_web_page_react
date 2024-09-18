import React from 'react'

function GallerySwitches({toggleGalleryFunction, toggleCharacterFunction}) {
	
	return(
		<div id="gallery_switches">
			<span><a onClick={() => { toggleCharacterFunction("Alice"); toggleGalleryFunction(true) }} >Alice</a></span>
			<span><a onClick={() => { toggleCharacterFunction("Jane"); toggleGalleryFunction(true) }} >Jane</a></span>
			<span><a onClick={() => { toggleCharacterFunction("Pandemonica"); toggleGalleryFunction(true) }} >Pandemonica</a></span>
			<span><a onClick={() => { toggleCharacterFunction("Willow"); toggleGalleryFunction(true) }} >Willow</a></span>
		</div>
	)
}

export default GallerySwitches;