import Pandemonica_image from "../../files/characters/Pandemonica.gif"

function Pandemonica() {
	return(
		<>
			<h2 id = "char_name">Pandemonica</h2>
			<section className="bio">
				<figure>
					<img src={Pandemonica_image} alt="An image of Pandemonica" title="Pandemonica" id="pandemonica" />
					<figcaption><strong>Pandemonica</strong></figcaption>
				</figure>
				<h2>A short bio</h2>
				<hr />
				<p>
					A demon girl from Hell who works at Hell's Customer Service. There is not too much information about her history as a character. 
					All that is known is that she is a demon who works for CEO of Hell - Lucifer herself.
				</p>
			</section>
			<section>
				<h2>Personality</h2>
				<hr />
				<p>
					She doesn't have any redeeming bad qualities, like some other characters from this universe might have. 
					She is usually calm, collected, has a good sense of humour and almost all the time is very tired. 
					She is dependant on caffeine so much, in fact, that when drinking a good portion of black coffee, her sadistic tendencies may begin to reveal, 
					as she may say something about breaking Helltaker's fingers, if something is done wrong. So this quality can be considered as a bad one, 
					although it's not as revealing as, for example, Modeus's lusty nature.
				</p>
			</section>
			<section>
				<h2>Appearance</h2>
				<hr />
				<p>
					Since she is a creature of Hell, she possesses a pair of horns that go from her head. 
					She is wearing an outfit that resembles the one being typically worn by female office workers, which consists of black heels, 
					black pencil skirt and a black long sleeve jacket with red button-shirt underneath it. 
					She is seen to be wearing a pair of black gloves and a pair of round glasses. Her hair is very fluffy and curly, which gives the impression like it's made out of cotton.
				</p>
			</section>
			<section>
				<h2>Some facts about her</h2>
				<hr />
				<ul>
					<li>She is often referred to as The Tired Demon, but after drinking a coffee she gains a second alias - The Sadistic Demon.</li>
					<li>Her horns are usually small and barely noticeable, but once she charges herself up with coffee, they grow bigger and very noticeable.</li>
					<li>She is always carrying a folder of documents that probably have something to do with her job.</li>
				</ul>
			</section>
		</>
	)
}

export default Pandemonica