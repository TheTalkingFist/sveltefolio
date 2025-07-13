<script>
    import { base } from '$app/paths';
    import PageTitle from '$lib/PageTitle.svelte';
    import GenericGallery from '$lib/GenericGallery.svelte';
    import GameModal from '$lib/GameModal.svelte';
    import Footer from '$lib/Footer.svelte';
  import HomeButton from '$lib/HomeButton.svelte';
</script>

<PageTitle 
    title="My Games" 
    subtitle="Games I've created or contributed to" 
/>

<GenericGallery />

<HomeButton />

<Footer />
