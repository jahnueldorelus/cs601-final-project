export default Vue.component("anime", {
  template: `
	<div class="app-container-width">
		<!-- Favorite anime -->
		<article>
			<h2>My Favorite Anime</h2>
			<img
				src="../assets/goku.jpg"
				width="300"
				alt="Table filled with musical equipment"
			/>
			<p>
				My favorite anime will always be
				<a href="https://dragonball.fandom.com/wiki/Dragon_Ball_Z"
					>Dragon Ball Z</a
				>. That's the anime that I grew up with and will always love. Dragon
				Ball Z is more than just an anime for me. It comes with the
				nostalgia of all the good times I had as a kid before I had to start
				worrying about food, water, and paying bills.
			</p>
		</article>

		<br />

		<!-- Watched animes -->
		<article>
			<h2>Previous Animes I've Seen</h2>
			<img
				src="../assets/anime.jpg"
				width="500"
				alt="Table filled with musical equipment"
			/>
			<p>
				My exposure to anime is not that big due to me being introduced to
				other animes than Dragon Ball Z late. I've also made the mistake of
				deciding to watch animes that have over 1,000 episodes (cough cough
				Naruto....cough cough One Piece). There hasn't been a single anime
				that I've watched that I didn't enjoy. You can see the animes I've
				seen below and further information about me watching them.
			</p>
			<table>
				<thead>
					<tr>
						<th>Anime</th>
						<th>Number of Episodes</th>
						<th>Did I watch it all?</th>
					</tr>
				</thead>
				<tbody>
					<!-- Dragon Ball -->
					<tr>
						<td>Dragon Ball</td>
						<td>153</td>
						<td>Yes</td>
					</tr>
					<!-- Dragon Ball Z -->
					<tr>
						<td>Dragon Ball Z</td>
						<td>291</td>
						<td>Yes</td>
					</tr>
					<!-- Dragon Ball GT -->
					<tr>
						<td>Dragon Ball GT</td>
						<td>64</td>
						<td>Yes</td>
					</tr>
					<!-- Dragon Ball Super -->
					<tr>
						<td>Dragon Ball Super</td>
						<td>131</td>
						<td>Yes</td>
					</tr>
					<!-- Mob Psycho 100 -->
					<tr>
						<td>Mob Psycho 100</td>
						<td>25</td>
						<td>Yes</td>
					</tr>
					<!-- Tokyo Ghoul -->
					<tr>
						<td>Tokyo Ghoul (Season 1)</td>
						<td>12</td>
						<td>Yes</td>
					</tr>
					<!-- Tokyo Ghoul √A -->
					<tr>
						<td>Tokyo Ghoul √A (Season 2)</td>
						<td>12</td>
						<td>Yes</td>
					</tr>
					<!-- Seven Deadly Sins -->
					<tr>
						<td>Seven Deadly Sins</td>
						<td>12</td>
						<td>No</td>
					<!-- Megalo Box -->
					</tr>

					<tr>
						<td>Megalo Box</td>
						<td>26</td>
						<td>No</td>
					</tr>
					<!-- Naruto: Shippuden -->
					<tr>
						<td>Naruto: Shippuden</td>
						<td>500</td>
						<td>No</td>
					</tr>
					<!-- One Piece -->
					<tr>
						<td>One Piece</td>
						<td>1,014</td>
						<td>No</td>
					</tr>
				</tbody>
			</table>
		</article>
	</div>
	  `,
});
