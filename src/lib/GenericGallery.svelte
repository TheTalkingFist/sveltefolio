<script>
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';
    import Footer from '$lib/Footer.svelte';
    import PageTitle from '$lib/PageTitle.svelte';

    import GalleryItem from './GalleryItem.svelte';
</script>


<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        padding: 1rem;
        background-color: rgba(235, 235, 235, 0.35);
        align-items: center;
        justify-items: center;
        width: 90%;
        border-radius: 8px;
        margin: 0 auto;
    }

    .gallery-item {
        background-color: #f0f0f0;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
    }

    .gallery-item img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }

    .gallery-item h3 {
        margin-top: 0.5rem;
    }
</style>

<div class="gallery">
    <GalleryItem
        title="Example Item 1"
        imageUrl={`${base}/image/site-deco/placeholder.svg`}
        description="This is an example item in the gallery."
        GalleryItem="Skeleton Book: Salvation Be Damned"
    />

    <GalleryItem
        title="Example Item 2"
        imageUrl={`${base}/image/site-deco/placeholder.svg`}
        description="This is an example item in the gallery."
        GalleryItem="WHITESPACE"
    />
</div>


