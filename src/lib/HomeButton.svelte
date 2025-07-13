<script>
    import { base } from '$app/paths';
</script>

<style>

    .home-button-container {
        text-align: center;
        margin-top: 20px;
    }

    .home-button {
        display: inline-block;
        background-color: #977DFF;
        color: white;
        border-radius: 8px;
        padding: 8px;
        text-decoration: none;
        font-weight: bold;
        margin: 10px;
        text-align: center;
    }
    
    .home-button:hover {
        background-color: #7B5FE6;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .home-button-text {
        font-family: 'mainFont', sans-serif;
        font-size: 30px;
    }
</style>

<div class="home-button-container">
    <a href="{base}/" class="home-button">
        <span class="home-button-text">Home</span>
    </a>
</div>