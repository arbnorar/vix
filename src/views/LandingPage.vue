<template>
	<div class="showcase">
		<div class="video-container">
			<video
				src="../assets/videos/buddy.mp4"
				poster="images/snapshot.PNG"
				id="videoBackground"
				video
				loop
				muted
				autoplay
			>
				This is fallback content to display for user agents that do not support
				the video tag.
			</video>
		</div>
		<div class="content">
			<h1>Vix Wildlife Center</h1>
			<p>
				There are no unwanted pets.. &nbsp; &nbsp; &nbsp;just unfound families.
			</p>
			<router-link to="/home" class="btn btn-success">Home</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "LandingPage"
	};
</script>

<style scoped>
	body {
		margin: 0;
	}

	.showcase {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0 20px;
	}

	.video-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		color: white;
	}

	.content {
		z-index: 10;
		color: white;
	}

	.video-container video {
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
		position: absolute;
		top: 50%;
		left: 70%;
		transform: translate(-70%, -50%);
		filter: blur(4px);
		-webkit-filter: blur(4px);
	}

	.video-container:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>