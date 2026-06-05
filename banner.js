// banner.js - Componente Banner Dinamico e Stagionale per La Libre

(function() {
    // 1. Iniezione degli stili CSS dedicati al Banner per mantenere pulito il file HTML
    const bannerStyles = `
        .banner {
            width: 100%;
            height: 45vh;
            min-height: 300px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0d0d0d;
        }

        .banner-media-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .banner-media-container video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }

        .banner-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.35));
            z-index: 2;
        }

        .banner-text { 
            position: relative; 
            z-index: 10; 
            text-align: center; 
            color: white; 
            max-width: 900px; 
            padding: 1rem 2rem; 
        }

        .banner-text h1 { 
            font-family: serif; 
            font-size: clamp(1.8rem, 4.5vw, 3.2rem); 
            font-weight: 400; 
            letter-spacing: 0.3rem; 
            text-transform: uppercase; 
            margin-bottom: 0.3rem; 
            color: #ffffff;
            text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }

        .banner-text p { 
            font-family: -apple-system, BlinkMacSystemFont, sans-serif; 
            font-size: clamp(0.75rem, 1.8vw, 0.9rem); 
            font-weight: 300; 
            letter-spacing: 4px; 
            color: #e5e5e5; 
            text-transform: uppercase; 
            font-style: italic; 
        }

        .divider { width: 50px; height: 1px; background: #ffffff60; margin: 1rem auto; }
    `;

    // Inserisce gli stili nell'head del documento
    const styleSheet = document.createElement("style");
    styleSheet.innerText = bannerStyles;
    document.head.appendChild(styleSheet);

    // 2. Struttura HTML del Banner (Modifica qui per cambiare campagna)
    const bannerHTML = `
        <section class="banner">
            <div class="banner-media-container">
                <video autoplay loop muted playsinline>
                    <source src="images/banner-video.mp4" type="video/mp4">
                </video>
            </div>
            <div class="banner-overlay"></div>
            <div class="banner-text">
                <h1>Free Soul, Second Skin</h1>
                <div class="divider"></div>
                <p>Slow Collection crafted in delicate lace</p>
            </div>
        </section>
    `;

    // Inietta il banner nel container dedicato appena il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        const bannerContainer = document.getElementById("dynamicBannerContainer");
        if (bannerContainer) {
            bannerContainer.innerHTML = bannerHTML;
        }
    });
})();
