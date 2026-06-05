// banner.js - Top Announcement Banner per La Libre (Allineato al Brand)

(function() {
    // 1. Recupero immediato della lingua selezionata dall'utente
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    // 2. Archivio traduzioni della fascia di notifica superiore
    const bannerTranslations = {
        en: "Complimentary worldwide shipping on architectural orders",
        es: "Envío internacional de cortesía en pedidos arquitectónicos",
        zh: "建筑系列订单享受全球免费配送服务"
    };

    const text = bannerTranslations[currentLang] || bannerTranslations['en'];

    // 3. Stili dedicati per garantire che aderisca perfettamente al millimetro
    const styles = `
        <style>
            #dynamicBannerContainer {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .top-announcement-bar {
                background-color: #1a1a1a;
                color: #ffffff;
                text-align: center;
                padding: 0.55rem 1rem;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 0.65rem;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                font-weight: 300;
                width: 100%;
                display: block;
            }

            @media (max-width: 600px) {
                .top-announcement-bar {
                    font-size: 0.6rem;
                    line-height: 1.4;
                    padding: 0.6rem 0.8rem;
                }
            }
        </style>
    `;

    // 4. Iniezione del banner nel suo contenitore nativo
    function renderTopBanner() {
        const container = document.getElementById('dynamicBannerContainer');
        if (!container) return;

        // Creiamo la striscia di testo dinamica
        container.innerHTML = `<div class="top-announcement-bar">${text}</div>`;
        
        // Iniettiamo gli stili nel documento
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // Esecuzione sicura al caricamento del DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderTopBanner);
    } else {
        renderTopBanner();
    }
})();
