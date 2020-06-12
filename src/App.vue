<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: "app",
		components: {}
	};
</script>

<style>
	/* @import "./assets/css/bootstrap.min.css"; */
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap");
	#app {
		font-family: "Open Sans", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: black;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
