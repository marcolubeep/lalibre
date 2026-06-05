// banner.js - Gestisce unicamente l'Announcement Bar superiore di La Libre

(function() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const bannerTranslations = {
    en: "Demo website developed by Marco, the best is yet to come!",
    es: "Sitio web de demostración desarrollado por Marco, ¡lo mejor está por venir!",
    zh: "由 Marco 开发的演示网站，精彩即将到来！"
    };

    const text = bannerTranslations[currentLang] || bannerTranslations['en'];

    const styles = `
        <style>
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
                box-sizing: border-box;
            }
            @media (max-width: 600px) {
                .top-announcement-bar {
                    font-size: 0.6rem;
                    line-height: 1.4;
                }
            }
        </style>
    `;

    function renderTopBanner() {
        // Aggancia espressamente il contenitore del Banner superiore
        const container = document.getElementById('dynamicBannerContainer');
        if (!container) return;

        container.innerHTML = `<div class="top-announcement-bar">${text}</div>`;
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderTopBanner);
    } else {
        renderTopBanner();
    }
})();
