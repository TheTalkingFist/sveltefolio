<script>
    import { createEventDispatcher } from 'svelte';
    export let isOpen = false;
    export let image;
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

    .modal-img {
        width: 100%;
        max-width: 600px;
        height: auto;
        aspect-ratio: 16 / 9;
        height: auto;
        margin: 20px auto;
        display: block;
        border-radius: 13px;
    }
</style>

{#if isOpen}
    <div class="modal-background">
        <div class="modal">
            <button class="close-button" on:click={handleClose}>Close</button>
            <img src={image} class="modal-img" alt="Game" />
            <h2 style="font-family: titleFont">{galleryTitle}</h2>
            <p>{description}</p>
        </div>
    </div>
{/if}
