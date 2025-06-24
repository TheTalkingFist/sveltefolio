<script>
    export let isOpen = false;
    export let image;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('close');
    }


</script>


<style>

    .modal-background {
        background-color: rgba(0, 0, 0, 0.8);
        align-items: center;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        align-items: center;
        z-index: 1000;
    }

    .modal {
        width: 85%;
        height: 90%;
        margin: 0 auto;
        border-radius: 13px;
        background-color: #1a1a1a;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .modal-img {
        width: 60%;
        margin: 20px auto;
        height: auto;
        border-radius: 13px;
    }
</style>

{#if isOpen}
    <div class="modal-background">
        <div class="modal">
            <button on:click={closeModal}>Close</button>
            <img src={image} class="modal-img" alt="Game" />

            <h2>Game Title</h2>

            <p>Test Game Description. Game description goes here. This is where the description of the game goes. Here is where the game descri</p>
        </div>
    </div>
{/if}
