<script>
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';
    import GameModal from './GameModal.svelte';

    export let galleryTitle;
    export let description = "";

    export let image1;
    export let image2;

    export let imageUrl;
    export let videoTitle;

    let isOpen = false;

    function openModal() {
        isOpen = true;
    }

    function closeModal() {
        isOpen = false;
    }
</script>


<style>
    .card {
        padding: 10px;
        max-width: 360px;
        height: 500px;
        max-height: 300px;
    }
    
    .card-title {
        font-family: titleFont;
        font-size: 1.2rem;
    }

    .card img {
        width: 100%;
        max-width: 360px;
        object-fit: cover;
        display: block;
        aspect-ratio: 16 / 9;
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin: 0px auto;
    }

    .card-body {
        padding: 10px;
    }
</style>

<GameModal 
    {isOpen} 
    on:close={closeModal} 
    image={imageUrl}
    videoTitle={videoTitle}
    image1={image1}
    image2={image2}
    {galleryTitle}
    {description}
/>

<div 
    class="card" 
    on:click={openModal} 
    on:keydown={(e) => e.key === 'Enter' && openModal()} 
    role="button"
    tabindex="0"
>
    <img src={imageUrl} alt="Gallery item preview">

    <div class="card-body">
        <p class="card-title">{galleryTitle}</p>
    </div>
</div>
