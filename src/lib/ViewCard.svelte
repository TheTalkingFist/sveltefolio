<script>
    export let title;
    export let image;
</script>

<style>
    .card-link {
        text-decoration: none;
        color: inherit;
        margin: 0 auto;
    }

    .card-title {
        font-family: mainFont;
        font-size: 0.45em;
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

<a href="/my-games" class="text-decoration-none card-link">
  <div class="card button-container" style="width: 14rem;">
    <img src={image} class="card-img-top" alt={title}>
    <div class="card-body text-center">
      <h5 class="card-title">{title}</h5>
    </div>
  </div>
</a>
