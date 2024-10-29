import React from "react"

import ImageContainer from "../../components/Characters/ImageContainer"
import ImageFullscreenContainer from "../../components/Characters/ImageFullscreenContainer"

import Alice_image from "../../files/characters/Alice.gif"

import Alice_Steamdress from "../../files/characters/alice_skins/steamdress.jpg"
import Alice_Siren from "../../files/characters/alice_skins/siren.jpg"
import Alice_Silkmaiden from "../../files/characters/alice_skins/silkmaiden.jpg"
import Alice_Royal from "../../files/characters/alice_skins/royal.jpg"
import Alice_Misstitched from "../../files/characters/alice_skins/misstitched.jpg"

import Alice_Caterpillar from "../../files/characters/alice_skins/caterpillar.jpg"
import Alice_Checkmate from "../../files/characters/alice_skins/checkmate.jpg"
import Alice_Cheshire from "../../files/characters/alice_skins/cheshire.jpg"
import Alice_Fleshmaiden from "../../files/characters/alice_skins/fleshmaiden.jpg"
import Alice_Hattress from "../../files/characters/alice_skins/hattress.jpg"
import Alice_Late_but_Lucky from "../../files/characters/alice_skins/late_but_lucky.jpg"

function Alice() {
	const [isInFullscreen, setFullscreen] = React.useState(false);
	const [currentImage, setCurrentImage] = React.useState("");

	function toggleFullscreenFromChildComponent(value) {
		setFullscreen(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = 0;
		}
	}

	function setCurrentImageFromChildComponent(source) {
		setCurrentImage(source);
	}

	return (
		<>
			<h2 id = "char_name">Alice Liddell</h2>
			<section className="bio">
				<figure>
					<img src={Alice_image} title="Alice Liddell" alt="An image of Alice Liddell" id="alice" />
					<figcaption>
						<strong>Alice Liddell</strong>
					</figcaption>
				</figure>
				<h2>A short bio</h2>
				<hr />
				<p>
					Alice Liddell is the main character of series of games created by American McGee - American McGee's Alice and Alice: Madness Returns.
					This is an alternative version of Lewis Carroll's Alice, mainly because Alice Liddell's reasons for being in Wonderland are much more sinister and dark. 
					In this universe, her whole family - father Arthur, mother(name is unknown) and sister Elizabeth - 
					died in an unfortunate fire accident - the fireplace was unattended and the fire from it spread out to the whole house, 
					as was stated officially by corresponding authorities. The only survivor was Alice herself. 
					After losing her family she has gone completely mad, and lost the ability to speak and think cohesively. 
					She would quite often attempt to end herself and always blame herself for her family's death. 
					Because of her rather hopeless and hollow state, she was sent to Rutledge Asylum, where she resided in for a whole decade 
					and received some sort of treatment by doctors, particularly Wilson Radcliffe, although their methods were not very humane, 
					as the events of both games occur in the 19th century. After ten years of unstoppable treatment, filled with pain, blood and agony, 
					she was partially recovered but yet again she was sent on the continuous treatment and observation to doctor-psychiatrist Angush Bamby 
					who would help her fully recover. <em>But something was not right about him...</em>
				</p>
				<p>
					Now she fights her way through corrupted and dreadful Wonderland to find out who was responsible for her family's death.
				</p>
			</section>
			<section>
				<h2>Personality</h2>
				<hr />
				<p>
					In both games she is depicted as sad, miserable, depressed, sometimes even angry and guilty, 
					though in Wonderland she tries to take care of all her imaginary friends, even ones that were enemies for her once, 
					Hatter as an example. Through her adventures in corrupted Wonderland she may also seem apathetic and cold-blooded 
					towards some of the characters, and sometimes even towards herself, as she once said that <q>a simple jump off of London's bridge could end her journey</q>, 
					which is expected from someone that has been through this much in their life. As an example of her cold-blooded nature may serve an episode, 
					where she has to kill the imprisoned White King in order to get into the Red Queen's Palace. She was also called reckless by her mother 
					in young age for not taking the consequences of her actions into consideration, though this trait has not stayed up with her later on. 
					Only Cheshire Cat blamed her for her recklessness, in the episode where she visited Red Queen's Palace the second time in the second game after destroying it in the first one.
				</p>
				<p>
					By looking at her appearance, one can suggest that this character is rather a complete psychopath, who is filled with nothing but "edginess", 
					but this is not entirely truth. Even though, she is a dark version of canonical Alice and has all qualities of such, 
					she is just a victim of so many situations and people trying to abuse her, 
					and at the end she is trying to make sense of her head and find out who truly is responsible for her misery, even if it requires some sacrifices.
				</p>
				<p>
					She was a lonely girl throughout her entire childhood, as her sister Elizabeth <q>was too old to be a playmate</q>. 
					The second reason why she was lonely is because of the bad experience with real people as some tried abusing her, 
					or betrayed her later on. That's why she made herself an escape from this world to not feel lonely - Wonderland and her imaginary friends.
				</p>
			</section>
			<section>
				<h2>Appearance</h2>
				<hr />
				<p>
					In both games she looks nearly identical, but compared to other versions of Alice, particularly Disney's version, 
					there are some changes. In games she is wearing navy blue dress with a white apron over it, striped black and white stocking 
					and knee-high black boots with silver buckles around it. She is also spotted to be wearing a necklace in form of a letter Omega(&Omega;), 
					which is a final letter in Greek alphabet. Her hair is long and dark auburn in the first game, and black with red tint in the second one. 
					As small details, she has bowtie tied to her belt on the back and few blood splats on her apron. 
					She also appears to have some small make-up on her face in the form of peach lipstick and dark pink eye shadow along with black eyeliner. 
					To compare, Disney's Alice wears a light blue dress and has a long blonde hair, as well as regular black shoes and not a high black boots.
					As a minor difference, Disney's Alice has a ribbon on the top of her head, while McGee's Alice doesn't wear any ribbons.
				</p>
				<p>
					Alice: Madness Returns also contains some small gameplay moments that occur in real life, specifically in London. 
					In real life, her appearance is vastly different from what she looks like in Wonderland. In London, she is wearing a really weared out and 
					dirty striped black and white dress with a black skirt, with dirty white apron over it. On her legs, black stockings and high black boots can be spotted. 
					Her hair also seems to differ and instead of being long, straight and clean, it is very short, curly and dirty. 
					Judging by her overall physical appearance, one can say that she has had a really tough life, as she seems to be very thin, almost anorexic, 
					her cheeks are very gaunt and there are black circles around her eyes, indicating a distinctive lack of sleep.
				</p>
				<p>
					In the same game, in Wonderland, her dresses change, depending on the chapter which is currently being played. There are five different dress versions for Alice. 
				</p>
				<p>
					In chronological order:
				</p>
				<div id="alice_official_skins">
					<ImageContainer 
						image_source={Alice_Steamdress} 
						text="Steamdress" 
						altText="Alice in a Steamdress" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Siren} 
						text="Siren" 
						altText="Alice in a Siren dress" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Silkmaiden} 
						text="Silkmaiden" 
						altText="Alice in a Silkmaiden dress" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Royal} 
						text="Royal Dress" 
						altText="Alice in a Royal dress" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Misstitched} 
						text="Misstitched" 
						altText="Alice in a Misstitched dress" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
				</div>
				<div className="clear_float"></div>
				<p style= {{ "marginTop": 40 + "px" }}>
					There are also some bonus dresses that are available after completing the game. They give bonuses to the player if worn, that vary from being overpowered to pretty useless. 
					They do not appear in the first playthrough:
				</p>
				<div id="alice_dlc_skins">
					<ImageContainer 
						image_source={Alice_Caterpillar} 
						text="Caterpillar" 
						altText="Caterpillar Alice" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Checkmate} 
						text="Checkmate" 
						altText="Checkmate Alice" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Cheshire} 
						text="Cheshire" 
						altText="Cheshire Alice" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Fleshmaiden} 
						text="Fleshmaiden" 
						altText="Fleshmaiden Alice" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Hattress} 
						text="Hattress" 
						altText="Hattress Alice" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
					<ImageContainer 
						image_source={Alice_Late_but_Lucky} 
						text="Late, but Lucky" 
						altText="Late, but Lucky Alice" 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent}
						setCurrentImageFunction={setCurrentImageFromChildComponent} 
					/>
				</div>
				<div className="clear_float"></div>
			</section>
			<section>
				<h2>Some facts about her</h2>
				<hr />
				<ul>
					<li>
						Alice has been accused of starting the fire herself, and Wilton Radcliffe suspects so. A fragment from the in-game storybook called 
						<q>The Illustrated London News</q> also implies it.
					</li>
					<li>
						Alice's necklace is the Omega symbol, which is commonly used to represent the end of something and it could represent 
						how Alice is fighting to end her insanity, or symbolize death, the end of life.
					</li>
					<li>In <em>Alice: Madness Returns</em>, the player can earn an achievement called "Weapon Schizo", implying that Alice may have schizophrenia.</li>
					<li>
						She has been described by one of the developers as being an unusual video game heroine, 
						in the sense that "she's not physically strong, she's not even mentally strong, she's mentally unstable. 
						She's not even really an anti-hero; she doesn't want to destroy stuff or get revenge, she's just trying to make sense of her own head.
					</li>
					<li>
						When American McGee's Alice was considered to be adapted into a live-action movie in the early/mid 2000s, 
						American McGee was encouraged by producers to agree to the idea of Alice being given a "bad boy" love interest. 
						McGee shot it down, calling it a terrible idea to shoehorn in an edgy love interest.
					</li>
					<li>
						Unlike most interpretations of Alice, which have blonde hair and blue eyes (popularized by the Disney film), American McGee's Alice has dark hair and green eyes. 
						This might be a reference to the real-life Alice Liddell, who has dark hair and was the inspiration of the original Alice character.
					</li>
					<li>In the novel <em>Alice's Adventures in Wonderland</em> Alice is mentioned to have a brother. However, in games, Alice has no other sibling than Elizabeth.</li>
				</ul>
			</section>
			{ isInFullscreen && <ImageFullscreenContainer toggleFullscreenFunction={toggleFullscreenFromChildComponent} currentImage={currentImage} character="Alice" /> }
		</>
	)
}

export default Alice