<script>
    import { base } from '$app/paths';
    const src = `${base}/image/site-deco/me.jpg`;
</script>

<style>
    .profile-image {
        border: solid 5px #F5F3E7;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
        width: 230px;
        height: 230px;
        border-radius: 50%;
    }

    .about {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 75%;
        margin: 0 auto;
        gap: 20px;
        margin-bottom: 50px;
    }

    .about p {
        font-family: mainFont;
        font-size: 1em;
        color: #F5F3E7;
    }
</style>

<section class="about">
    <img src={src} alt="Mikha'il Daanish" class="profile-image">
    <p>
        From the Immersive Applications and Game course in ITE CC, I have a strong foundation in game development. I'm always looking for ways to better myself as a game creator and developer.
    </p>
</section>