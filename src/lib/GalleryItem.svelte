<script>
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';
    import GameModal from './GameModal.svelte';

    export let galleryTitle;
    export let description = "";

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
    {isOpen} on:close={closeModal} 
    image={`${base}/image/site-deco/placeholder.svg`}
    galleryTitle={galleryTitle}
    description={description}
/>

<div 
    class="card" 
    on:click={openModal} 
    on:keydown={(e) => e.key === 'Enter' && openModal()} 
    role="button"
    tabindex="0"
>
    <img src={`${base}/image/site-deco/placeholder.svg`} alt="Gallery item preview">

    <div class="card-body">
        <p class="card-title">{galleryTitle}</p>
    </div>
</div>
