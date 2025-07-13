<script>
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';
    
    export let isOpen = false;
    export let image;
    export let videoTitle = null; // For YouTube embed URL
    export let galleryTitle = "";
    export let description = "";

    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch('close');
    }
</script>

<style>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: block;
    }
    
    .modal {
        display: block !important;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #1a1a1a;
        width: 85%;
        max-width: 800px;
        max-height: 90vh;
        border-radius: 13px;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        overflow-y: auto;
        color: white;
        z-index: 10000;
        opacity: 1;
        visibility: visible;
        text-align: center;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #977DFF;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        z-index: 10001;
    }

    .modal-media {
        width: 100%;
        max-width: 600px;
        aspect-ratio: 16 / 9;
        margin: 20px auto;
        display: block;
        border-radius: 13px;
    }
    
    .modal-img {
        width: 100%;
        max-width: 600px;
        aspect-ratio: 16 / 9;
        margin: 20px auto;
        display: block;
        border-radius: 13px;
    }
    
    iframe.modal-media {
        border: none;
    }
</style>

{#if isOpen}
    <div class="modal-background">
        <div class="modal">
            <button class="close-button" on:click={handleClose}>Close</button>
            
            <!-- Show YouTube video if videoTitle is provided, otherwise show image -->
            {#if videoTitle}
                <iframe 
                    class="modal-media" 
                    src={videoTitle}
                    title={galleryTitle}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            {:else}
                <img src={image} class="modal-img" alt="Game" />
            {/if}
            
            <h2 style="font-family: titleFont">{galleryTitle}</h2>
            <p>{description}</p>
        </div>
    </div>
{/if}