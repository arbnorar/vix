<template>
	<div>
		<Navbar />
		<div class="container-fluid d-flex justify-content-center">
			<Carousel />
		</div>
		<!-- <img src="@/assets/images/deer.jpg" width="500px" alt="" /> -->
	</div>
</template>
<script>
	// @ is an alias to /src
	import Navbar from "../components/layout/Navbar";
	import Carousel from "../components/Carousel";

	export default {
		name: "Home",
		components: {
			Navbar,
			Carousel
		},
		data() {
			return {
				slides: [
					{
						title: "I am Slide A",
						id: 1
					},
					{
						title: "I am Slide B",
						id: 2
					},
					{
						title: "I am Slide C",
						id: 3
					},
					{
						title: "I am Slide D",
						id: 4
					},
					{
						title: "I am Slide E",
						id: 5
					}
				]
			};
		},
		methods: {
			next() {
				const first = this.slides.shift();
				this.slides = this.slides.concat(first);
			},
			previous() {
				const last = this.slides.pop();
				this.slides = [last].concat(this.slides);
			}
		}
	};
</script>


<style>
	.navbar {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 20px;
	}

	.carousel-view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>