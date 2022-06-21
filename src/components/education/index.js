export default Vue.component("education", {
  template: `
	<div class="app-container-width">
		<!-- My bachelor's -->
		<article>
			<h2>Bachelor's Degree</h2>
			<img src="../assets/grad-cap.jpg" width="300" alt="Jahnuel Dorelus" />
			<p>
				I've received my Bachelor's degree in Computer Science at Gordon
				College. It's a private school in Wenham, Massachusetts. This is
				where I've grown and developed my experience with coding through
				class and mostly personal research. I graduated in May 2021.
			</p>
		</article>

		<br />

		<!-- My master's -->
		<article>
			<h2>Master's Degree</h2>
			<img src="../assets/degree.jpg" width="300" alt="Jahnuel Dorelus" />
			<p>
				I'm currently working on my master's degree in
					<a
						href="https://www.bu.edu/met/degrees-certificates/ms-computer-information-systems-web-application-development/"
					>
						Computer Information Systems with a concentration in Web
						Application Development</a>
				at Boston University Metropolitan College. I've already taken 4
				classes and am currently on my 5th. After this class, I'll have 5
				more to go and I'll have my masters degree. I can't wait for the day
				I graduate!
			</p>
		</article>
	</div>
	  `,
});
