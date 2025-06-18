<script>
    export let title;
    export let image;
    export let link;
</script>

<style>
    .card-title {
        font-family: mainFont;
        font-size: 0.55em;
        color: #000000;
        margin: 0;
    }

    .button-container {
        font-size: larger;
        width: fit-content;
        justify-content: center;
        align-items: center;
        background-color: #977DFF;
        padding: 20px;
        border-radius: 10px;
        margin: 0 auto;
    }
</style>

<div class="card button-container" style="width: 14rem;">
  <img src={image} class="card-img-top" alt={title}>
  <div class="card-body text-center">
    <h5 class="card-title">{title}</h5>
  </div>
</div>