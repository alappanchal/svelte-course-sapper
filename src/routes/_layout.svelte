<script>
	import Header from "../components/UI/Header.svelte";
	// export let segment;
</script>

<style>
	 main{
        margin-top: 5rem;
    } 	
</style>

<!-- Header Component -->
<Header />

<main>
	<slot></slot>
</main>