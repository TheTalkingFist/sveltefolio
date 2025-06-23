<script>
    export let isOpen = false;
    export let image;

    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('close');
    }


</script>


<style>
    .modal {
        border-radius: 13px;
        background-color: #1a1a1a;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .modal-img {
        width: 100%;
        height: auto;
        border-radius: 13px;
    }
</style>

{if isOpen}
    <div class="modal">
        <button on:click={() => isOpen = false}>Close</button>
        <img src={image} class="modal-img" alt="Game Image" />

        <h2>Game Title</h2>

        <p>Test Game Description. Game description goes here. This is where the description of the game goes. Here is where the game descri</p>
    </div>
{/if}
