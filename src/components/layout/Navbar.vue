<template>
	<div class="navbar">
		<img src="@/assets/images/shywolf-logo.png" />
		<router-link to="/home" style="color: black;">Home</router-link>
		<router-link to="/about" style="color: black;">About</router-link>
		<router-link to="/animals" style="color: black;">Animals</router-link>
		<router-link to="/education" style="color: black;">Education</router-link>
		<router-link to="/volunteer" style="color: black;">Volunteer</router-link>
		<router-link to="/connect" style="color: black;">Connect</router-link>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {};
		}
	};
</script>

<style>
</style>