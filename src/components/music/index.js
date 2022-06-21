export default Vue.component("music", {
  template: `
	<div class="app-container-width">
		<!-- My passion for music -->
		<article>
			<h2>My Love of Music</h2>
			<img
				src="../assets/music.jpg"
				width="350"
				alt="Table filled with musical equipment"
			/>
			<p>
				My passion music for music comes from my family. Both of my brothers
				can play instruments such as the bass guitar, piano, and drums. I
				however never picked up on those skills. What I did learn how to do
				is create instrumentals. I've been making music for years whenever I
				have any spare free time.
			</p>
		</article>

		<br />

		<!-- How I make music -->
		<article>
			<h2>Creating Music</h2>
			<p>
				I create instrumentals using
				<a href="https://www.image-line.com/fl-studio/">FL Studio</a>. It's
				a
				<a href="https://www.masterclass.com/articles/what-is-a-daw#quiz-0">Digital Audio Workstation</a>
				that allows you to create music without knowing how to play an
				instrument. I take sounds from different musical instruments and put
				them together to create a beat. I started making beats when I was in
				high school. Since then, I've uploaded beats to music streaming
				platforms such as Spotify and Apple Music. Below is a list of the
				equipment that I have to create music.
			</p>
			<ul>
				<li>Studio Monitors</li>
				<li>FL Studio</li>
				<li>Soundpacks</li>
				<li>MIDI Keyboard</li>
				<li>V-Moda Headphones</li>
			</ul>
		</article>

		<br />

		<!-- Type of music I make -->
		<article>
			<h2>My Genres</h2>
			<img
				src="../assets/music-genres.jpg"
				width="400"
				alt="List of music genres"
			/>
			<p>
				My beats have various genres. They come in the form of Pop, R&B, and
				Hip-Hop. I usually don't try to aim for a specific genre. I just
				create music based on how inspired I am. Some days, I can create
				multiple beats. On other days, I have a complete mental block.
			</p>
			<p>
				Here's a preview of one of my beats called
				<em><strong>Loving You</strong></em> (Provided by Apple Music).
			</p>
			<audio
				preload="metadata"
				controls
				title="Loving You - #Jdfire - Loving You - Single"
				src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/d2/64/81/d2648125-0b3d-b01e-fb39-a2febc6bad33/mzaf_12932010313272724796.plus.aac.ep.m4a"
			></audio>
		</article>
	</div>
	  `,
});
