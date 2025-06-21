<script>
    import { base } from '$app/paths';

    export let title;
    export let subtitle;
</script>

<style>
    .header {
        text-align: center;
        margin: 20px 0;
    }

    .title {
        font-size: 1.5em;
        color: #333;
        margin: 0;
        color: #F5F3E7;
    }

    .subtitle {
        font-size: 1em;
        color: #F5F3E7;
        margin-top: 10px;
    }

</style>

<section class="header">
    <h1 class="title" style="font-family: titleFont;">{title}</h1>
    <h2 class="subtitle" style="font-family: mainFont;">{subtitle}</h2>
</section>
