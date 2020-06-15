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
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 240 121" style="enable-background:new 0 0 240 121;" xml:space="preserve">
<g>
    <path d="M25.19,8.26l38.68,103.68H50.55L10.37,8.26H25.19z M106.78,8.26L71.2,100.07l-6.67-18.1L92.11,8.26H106.78z"/>
    <path d="M134.79,8.26v103.68h-13.9V8.28l13.84-0.03H134.79z"/>
    <path d="M176.09,50.04L149.77,8.26h15.58l18.78,29.71L176.09,50.04z M198.2,60.17l32.7,51.77h-15.74l-25.52-40.46l-24.29,40.46
        h-15.43L215.47,8.26h15.58L198.2,60.17z"/>
</g>
</svg>
			
			<router-link to="/home" class="butoni">LEARN MORE ABOUT US</router-link>
		</div>
	</div>
</template>

<script>



	export default {
		name: "LandingPage",

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

	svg {
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30%;
	}

	.butoni {
		position: absolute;
		top: 70%;
		left: 40%;
		width: 320px;
		font-size: 21px;
		color: #ffffff;
		padding: 8px 0;

  text-decoration: none;
  border: 1px solid #ffffff;
  overflow: hidden;
}

.butoni:hover {
  box-shadow: 1px 1px 25px 10px #dbd8d8;
}

.butoni:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    #ffffff,
    transparent
  );
  transition: all 650ms;
}

.butoni:hover:before {
  left: 100%;
}


	path {
		stroke: #ffffff;
		fill: #ffffff;
		stroke-dasharray: 1300;
		opacity: 10;
		animation: animate 4s cubic-bezier(0,0.23,1,.1);

	}

	@keyframes animate {
		0% {
			opacity: 0;
			fill: none;
			stroke-dashoffset: 1300;

		}

		30% {
			opacity: 10;
			fill: none;
			stroke-dashoffset: 1300;
		}

		

		90% {
			fill: rgba(255,255,255,0);
		}

		100% {
			opacity: 5;
			fill: rgba(255,255,255,1);
			stroke-dashoffset: 0;
		}
	}
</style>