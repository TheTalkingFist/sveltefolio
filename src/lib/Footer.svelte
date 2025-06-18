<script>

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
            <img src=/image/icons/fistico.svg alt="Home" style="width: 30px; height: 30px;">
        </div>

        <div class="footer-right">
            <img src="/image/icons/email.svg" alt="Email" class="icons">

            <img src="/image/icons/github.svg" alt="GitHub" class="icons">

            <img src="/image/icons/itch-io.svg" alt="Itch.io" class="icons">
        </div>
    </div>
</footer>