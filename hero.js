(function() {
    const heroContainer = document.getElementById('heroContainer');
    if (!heroContainer) return;

    heroContainer.innerHTML = `
        <style>
            .hero-section { position: relative; width: 100%; height: 400px; overflow: hidden; background: #000; }
            .hero-video { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
            .hero-content { 
                position: absolute; top: 0; left: 0; width: 100%; height: 70%; 
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                color: #fff; text-align: center; pointer-events: none;
            }
            .hero-content h1 { font-family: 'Cormorant Garamond', serif; font-size: 3rem; margin: 0; letter-spacing: 4px; }
            .hero-content p { font-family: 'Montserrat', sans-serif; letter-spacing: 3px; font-size: 0.7rem; margin-top: 15px; text-transform: uppercase; }
        </style>
        <section class="hero-section">
            <video class="hero-video" autoplay muted loop playsinline src="images/banner.mp4"></video>
            <div class="hero-content">
                <h1>FREE SOUL, SECOND SKIN</h1>
                <p>SLOW COLLECTION CRAFTED IN DELICATE LACE</p>
            </div>
        </section>
    `;
})();
