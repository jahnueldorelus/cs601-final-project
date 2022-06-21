export default Vue.component("home", {
  template: `
	<div class="app-container-width">
		<!-- Info about me -->
		<article>
			<h2>About me</h2>
			<img src="../assets/portait.jpeg" width="250" height="300" alt="Jahnuel Dorelus" />
			<p>
				My name is Jahnuel Dorelus. I love being home and spending time with
				my family or by myself. I'm a big
				<a href="https://spongebob.fandom.com/wiki/Encyclopedia_SpongeBobia">Spongebob</a>
				fan as it's my favorite kids' cartoon. I love watching movies as
				well. My preferred categories are Action, Mystery, Sci-Fi, and
				Thriller.
			</p>
		</article>

		<br />

		<!-- Info about where I live -->
		<article>
			<h2>Where I Live</h2>
			<p>
				I currently live in Connecticut, United States. I've lived here my
				whole life. I do plan on moving to another state one day when I'm
				married. Connecticut isn't a place of excitement. It's a beautiful
				state to retire in but doesn't have a lot of fun activities to do
				like our neighbor state, New York.
			</p>
		</article>

		<br />

		<!-- Info about family -->
		<article>
			<h2>My Family</h2>
			<p>
				I'm in a family of 5. There are my parents and my two older
				brothers. I'm the youngest in the family. Even though I'm a grown
				adult, I'm still referred to as the baby of the family. How lucky of
				me :)
			</p>
		</article>
	</div>
	`,
});
