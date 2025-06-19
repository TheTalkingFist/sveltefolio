<script>
  import Page from "../routes/+page.svelte";
  import ViewCard from "./ViewCard.svelte";

</script>

<style>
    .select_row {
        width: 93%;
        background-color: #0323a1;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        padding: 10px;
        border-radius: 10px;
    }
</style>

<div class="select_row">
  <ViewCard
    title="My Games"
    image={`${base}/image/site-deco/placeholder.svg`}
    link="/page"
  />

  <ViewCard
    title="Artworks"
    image={`${base}/image/site-deco/placeholder.svg`}
    link="/page2"
  />

  <ViewCard
    title="Pixel Illustrations"
    image={`${base}/image/site-deco/placeholder.svg`}
    link="/page3"
  />

  <ViewCard
    title="3d Artworks"
    image={`${base}/image/site-deco/placeholder.svg`}
    link="/page3"
  />
</div>