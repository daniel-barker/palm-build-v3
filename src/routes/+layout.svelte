<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import ChatButton from '../lib/components/ChatButton.svelte';
	let { children } = $props();
</script>

<nav>
	<Navbar />
</nav>

<main>
	{@render children()}
</main>
<Footer />
<ChatButton />
<style>
	/* Main content spacing for fixed header */
	main {
		margin-top: 5.5rem;
		min-height: calc(100vh - 6rem);
	}
</style>
