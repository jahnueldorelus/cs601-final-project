export default Vue.component("personal-projects", {
  template: `
	<div class="app-container-width">
		<!-- My coding project -->
		<article>
			<h2>Coding Project: Credential Manager</h2>
			<img
				src="../assets/nas.jpg"
				width="350"
				alt="Table filled with musical equipment"
			/>
			<p>
				I'm in the middle of creating a credential manager for my personal
				use, I want to be able to have a secured place where I can have all
				my credentials locally and not on the cloud. Not only that, I plan
				on hosting a cloud storage system using
				<a href="https://nextcloud.com">Nextcloud</a>. To make that come
				true, I've been looking for the best way to make my files readily
				available online in which I'm leaning towards creating a NAS using
				<a href="https://www.truenas.com/truenas-core/">TrueNas</a>.
			</p>
		</article>

		<br />

		<!-- Home Automation -->
		<article>
			<h2>IoT</h2>
			<img
				src="../assets/iot.jpg"
				width="350"
				alt="Table filled with musical equipment"
			/>
			<p>
				I've recently started to work in home automation for security and
				convenience. I currently have two door sensors and a temperature
				sensor installed. I plan on creating automation such as turning on
				the AC when the temperature or humidity of the room reaches a
				certain level. My goal is to have as much automation as possible to
				make life more enjoyable and my home more exciting.
			</p>
		</article>

		<br />

		<!-- Personal VPN -->
		<article>
			<h2>VPN</h2>
			<img
				src="../assets/vpn.jpg"
				width="350"
				alt="Table filled with musical equipment"
			/>
			<p>
				With all the things I want to create in the future, it becomes
				difficult finding a way to keep my network secured. One solution
				that I'm trying to implement but am having trouble with is making a
				VPN server. Having a personal VPN server would allow me to access
				all the systems that I plan to have up in running locally without
				worrying about anyone having direct access to them. I've been
				successful in creating the VPN server and connecting to it locally
				but for some reason, it doesn't want to work remotely. Hopefully, I
				can figure out that issue so that my house can become my secured
				tech world!
			</p>
		</article>
	</div>
	  `,
});
