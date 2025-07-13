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
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        max-width: 1200px;
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
        imageUrl={`${base}/image/site-deco/SkeletonBook_tn.png`}
        videoTitle='https://www.youtube.com/embed/QQNfLkI_4z0'
        description="For the Game Development module in my course, this is a top-down, 3D shooter game that includes different types of attacks, enemy AI and a bossfight.
        
        Made with Unity with imported asseets."
        galleryTitle="Skeleton Book: Salvation Be Damned"
    />

    <GalleryItem
        title="Example Item 2"
        imageUrl={`${base}/image/site-deco/WHITESPACE_tn.png`}
        videoTitle='https://www.youtube.com/embed/7cOO3OXlbzw'
        description="Made for the Game Level Production module, this is a top-down interactive thematic game that involves snapping pictures of various artifacts while using the same camera to defend yourself.
        
        Made with Unity with imported assets."
        galleryTitle="WHITESPACE"
    />

    <GalleryItem
        title="Example Item 3"
        imageUrl={`${base}/image/site-deco/TSH_tn.png`}
        description="A text-based stealth game, involving you searching for a weapon in a house where someone is searching for you.
        
        Made with Unity."
        galleryTitle="The Stealthiest Hitman"
        image1={`${base}/image/site-deco/TSH_1.png`}
        image2={`${base}/image/site-deco/TSH_2.png`}
    />

    <GalleryItem
        title="Example Item 4"
        imageUrl={`${base}/image/site-deco/EO_tn.png`}
        description="A roguelike top-down shooter game with random enemy placements and different weapons. 
        
        Made with Construct 3.
        
        Note: AI Generated title background."
        galleryTitle="Extraterrestial Occupation"
        image1={`${base}/image/site-deco/EO_1.png`}
        image2={`${base}/image/site-deco/EO_2.png`}
    />

    <GalleryItem
        title="Example Item 4"
        imageUrl={`${base}/image/site-deco/TPD_tn.png`}
        description="Made for the Century Games Game Jam 2025, this is a TCG-style fighting game where you collect cards and use them to fight against opponents.
        
        Made with Unity, with me as the artist and associate programmer (balancing, animation programming)"
        galleryTitle="The Painted Deck"

        image1={`${base}/image/site-deco/TPD_1.png`}
        image2={`${base}/image/site-deco/TPD_2.png`}
    />

    
</div>


