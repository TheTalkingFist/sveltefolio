<script>
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';
    import Footer from '$lib/Footer.svelte';
    import PageTitle from '$lib/PageTitle.svelte';

    import GalleryItem from './GalleryItem.svelte';

    export let videoTitle;
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
</style>

<div class="gallery">
    <GalleryItem
        title="Example Item 1"
        videoTitle='https://www.youtube.com/embed/QQNfLkI_4z0';
        description="For the Game Development module in my course, this is a top-down, 3D shooter game that includes different types of attacks, enemy AI and a bossfight."
        galleryTitle="Skeleton Book: Salvation Be Damned"
    />

    <GalleryItem
        title="Example Item 2"
        videoTitle='https://www.youtube.com/embed/7cOO3OXlbzw';
        description="Made for the Game Level Production module, this is a top-down interactive thematic game that involves snapping pictures of various artifacts while using the same camera to defend yourself."
        galleryTitle="WHITESPACE"
    />

    <GalleryItem
        title="Example Item 3"
        imageUrl={`${base}/image/site-deco/placeholder.svg`}
        description="A text-based stealth game, involving you searching for a weapon in a house where someone is searching for you."
        galleryTitle="The Stealthiest Hitman"
    />
</div>


