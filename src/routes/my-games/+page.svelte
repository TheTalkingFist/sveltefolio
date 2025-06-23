<script>
    import { base } from '$app/paths';
    import Footer from '$lib/Footer.svelte';
    import PageTitle from '$lib/PageTitle.svelte';
    import GenericGallery from '$lib/GenericGallery.svelte';
</script>

<PageTitle 
    title="My Games" 
    subtitle="Games I've created or contributed to" 
/>

<GenericGallery />

<Footer />
