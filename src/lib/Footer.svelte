<script>
    import { base } from '$app/paths';

    // Base path for images
    const src = `${base}/image/icons`;
    const icons = [
        { name: 'email', src: `${src}/email.svg` },
        { name: 'github', src: `${src}/github.svg` },
        { name: 'itch-io', src: `${src}/itch-io.svg` }
    ];
</script>

<style>
    p {
        font-family: mainFont;
        color: #F5F3E7;
        margin: 0;
        text-align: left;
    }

    .icons {
        display: flex;
        align-items: center;
        filter: brightness(0) invert(1);
        width: 30px;
        height: 30px;
        margin: 0 7px;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
    }

    .footer-center {
        display: flex;
        justify-content: center;
    }

    .footer-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>

<footer class="py-3 mt-5 border-top">
    <div class="container footer-grid">
        <p class="mb-0">&copy; 2025 Mikha'il Daanish</p>

        <div class="footer-center">
            <img src="{base}/image/icons/fistico.svg" alt="Home" style="width: 30px; height: 30px;">
        </div>

        <div class="footer-right">
            {#each icons as icon}
                {#if icon.name === 'email'}
                    <a href="mailto:mikhail19871983@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="{icon.src}" alt="{icon.name}" class="icons">
                    </a>
                {:else if icon.name === 'github'}
                    <a href="https://github.com/TheTalkingFist" target="_blank" rel="noopener noreferrer">
                        <img src="{icon.src}" alt="{icon.name}" class="icons">
                    </a>
                {:else if icon.name === 'itch-io'}
                    <a href="https://thetalkingfist.itch.io/" target="_blank" rel="noopener noreferrer">
                        <img src="{icon.src}" alt="{icon.name}" class="icons">
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</footer>