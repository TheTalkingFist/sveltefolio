<script>
  // no JavaScript logic yet
</script>

<style>
  .header {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:50px;
  }

  .title {
    font-size: 80px;
    font-weight: bold;
    color: #F5F3E7;
    text-align: center;
    animation: appear 2s ease-in-out;
    margin-bottom: -20px;
    font-family: mainFont;
  }

  .subtitle {
    font-family: mainFont;
    margin-top: 40px;
    font-size: xx-large;
    color: #F5F3E7;
    text-align: center;
    animation: float 3s ease-in-out infinite;
    text-shadow: 0px 5px 0px #00000050;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
  }
</style>

<section class="header">
  <h1 class="title" style="font-family: titleFont;">MIKHA'IL&nbsp;DAANISH</h1>
  <h1 class="title" style="font-family: mainFont;">BIN&nbsp;MOHAMED&nbsp;HAIDIR</h1>
  <br>
  <h2 class="subtitle">
    Applying for a Diploma in Applications, Games and Visual Effects (C29)
  </h2>
</section>
