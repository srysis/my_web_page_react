import React from "react"

import ImageContainer from "../../components/Characters/ImageContainer"
import ImageFullscreenContainer from "../../components/Characters/ImageFullscreenContainer"

import Willow_image from "../../files/characters/Willow.png"

import Willow_Shadow from "../../files/characters/willow_skins/Willow_Shadow.png"
import Willow_Formal from "../../files/characters/willow_skins/Willow_Formal.png"
import Willow_Woeful from "../../files/characters/willow_skins/Willow_Woeful.png"
import Willow_Forlorn_Doll from "../../files/characters/willow_skins/Willow_Forlorn_Doll.png"
import Willow_Roseate from "../../files/characters/willow_skins/Willow_Roseate.png"
import Willow_Snowfallen from "../../files/characters/willow_skins/Willow_Snowfallen.png"
import Willow_Swashbuckled from "../../files/characters/willow_skins/Willow_Swashbuckled.png"


function Willow() {
	const [isInFullscreen, setFullscreen] = React.useState(false);
	const [currentImage, setCurrentImage] = React.useState("");

	function setFullscreenFunction(value) {
		setFullscreen(value);

		// hide scrollbar if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflow = 'hidden';
		} else { 
			document.body.style.overflow = 'visible'; 
		}
	}

	function setCurrentImageFunction(source) {
		setCurrentImage(source);
	}

	return (
		<>
			<h2 id = "char_name">Willow</h2>
			<section className="bio">
				<figure>
					<img src={Willow_image} alt="Willow's in-game sprite" title="Willow's in-game sprite" id="willow" />
					<figcaption><strong>Willow's in-game sprite</strong></figcaption>
				</figure>
				<h2>A short bio</h2>
				<hr />
				<p>
					Willow is, sadly, an orphan, with parents of an unknown origin. Because of her origin, she was sent to an unknown orphanage with very unpleasant and 
					down right evil educators that regularly harassed and punished Willow. Once upon a time, they punished her for being out of bed at late night, 
					due to shadow creatures haunting her, while everyone else was sleeping. As her last resort she used her teddy bear - Bernie, 
					that always helped her in a dire situation. However, noises she made attracted evil educators, and those in no time and without a back thought punished her 
					by taking Bernie away from her and putting Willow into the closet. As she was sitting in the dark closet all alone, a shadow creature came to 
					finish what it started, and as it slowly approached Willow, she unleashed a powerful fire blast that killed pretty much everyone and everything in an orphanage. 
					And now, all alone with nobody, but Bernie on her side, she now has to survive in a hostile world.
				</p>
			</section>
			<section>
				<h2>Personality</h2>
				<hr />
				<p>
					As stated in the in-game lorebook: 
					<q className="lorebook">Willow is a candid woman whose penchant for fire often gets her into more than a little trouble.</q>
				</p>
				<p>
					She is usually depicted as helpful and joyful, curious to explore the unknown, woman, but can be quite reckless because of her unusual and careless passion 
					for fire and arson. She doesn't seem to be attached to any of other characters, but the only thing she seems to be attached to is her trusty teddy bear Bernie. 
				</p>
			</section>
			<section>
				<h2>Appearance</h2>
				<hr />
				<p>
					Willow always wears a red shirt with white folded collar, as well as black skirt, stockings and heels. 
					Her hair is black, and it's length is quite short, although there are two pigtails that go from left and right side. 
					Depending on the cosmetic set equipped by the player, her appearance may differ significantly. 
					There are few cosmetic sets that can be equipped on Willow. Few examples are presented below.
				</p>
				<div id="willow_skins">
					<ImageContainer 
						image_source={Willow_Shadow} 
						text="The Triumphant" 
						altText="Willow The Triumphant" 
						setFullscreenFunction={setFullscreenFunction}
						setCurrentImageFunction={setCurrentImageFunction} 
					/>
					<ImageContainer 
						image_source={Willow_Formal} 
						text="The Guest of Honor" 
						altText="Formal Willow" 
						setFullscreenFunction={setFullscreenFunction}
						setCurrentImageFunction={setCurrentImageFunction} 
					/>
					<ImageContainer 
						image_source={Willow_Woeful} 
						text="The Woeful" 
						altText="Woeful Willow" 
						setFullscreenFunction={setFullscreenFunction}
						setCurrentImageFunction={setCurrentImageFunction} 
					/>
					<ImageContainer 
						image_source={Willow_Forlorn_Doll} 
						text="The Forlorn Doll" 
						altText="Willow The Forlorn Doll" 
						setFullscreenFunction={setFullscreenFunction}
						setCurrentImageFunction={setCurrentImageFunction} 
					/>
					<ImageContainer 
						image_source={Willow_Roseate} 
						text="The Roseate" 
						altText="Willow Roseate" 
						setFullscreenFunction={setFullscreenFunction}
						setCurrentImageFunction={setCurrentImageFunction} 
					/>
					<ImageContainer 
						image_source={Willow_Snowfallen} 
						text="The Snowfallen" 
						altText="Snowfallen Willow" 
						setFullscreenFunction={setFullscreenFunction}
						setCurrentImageFunction={setCurrentImageFunction} 
					/>
					<ImageContainer 
						image_source={Willow_Swashbuckled} 
						text="The Swashbuckled" 
						altText="Swashbuckled Willow" 
						setFullscreenFunction={setFullscreenFunction}
						setCurrentImageFunction={setCurrentImageFunction} 
					/>
				</div>
				<div className="clear_float"></div>
			</section>
			<section>
				<h2>Some facts about her</h2>
				<hr />
				<ul>
					<li>Willow's voice is played by a flute.</li>
					<li>Willow was originally stated to be around her late teens. However, Klei(developers of Don't Starve and creators of Willow) later said that Willow is in her early 20's.</li>
					<li>Willow's Favorite Food is Spicy Chili.</li>
					<li>Willow was a Girl Scout, and she earned all of the patches.</li>
					<li>
						Willow's nickname may be a reference to Firestarter, a novel by Stephen King. In addition to this, 
						both Willow and Bernie could be a reference to an event in the story where main character Charlie, a young girl, first manifests her pyrokinesis by setting 
						her teddy bear on fire after tripping over it.
					</li>
				</ul>
			</section>
			{ isInFullscreen && <ImageFullscreenContainer setFullscreenFunction={setFullscreenFunction} currentImage={currentImage} character="Willow" /> }
		</>
	)
}

export default Willow