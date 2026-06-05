// footer.js - Sezione Instagram e Footer Minimal per La Libre

(function() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const footerTranslations = {
        en: { follow: "Follow us on Instagram", rights: "All rights reserved" },
        es: { follow: "Síguenos en Instagram", rights: "Todos los derechos reservados" },
        zh: { follow: "关注 quantitative 官方 Instagram", rights: "版权所有" }
    };

    const t = footerTranslations[currentLang] || footerTranslations['en'];

    const styles = `
        <style>
            .site-footer {
                width: 100%;
                background: #ffffff;
                border-top: 1px solid #f2f2f2;
                margin-top: 5rem;
                padding: 4rem 2rem 2rem 2rem;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            
            /* Sezione Instagram */
            .ig-section {
                max-width: 1200px;
                margin: 0 auto 4rem auto;
                text-align: center;
            }
            .ig-title {
                font-size: 0.8rem;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: #1a1a1a;
                text-decoration: none;
                display: inline-block;
                margin-bottom: 1.5rem;
                font-weight: 300;
                transition: color 0.3s;
            }
            .ig-title:hover { color: #707070; }
            
            .ig-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr); /* 4 foto in fila */
                gap: 1rem;
            }
            .ig-item {
                position: relative;
                display: block;
                aspect-ratio: 1 / 1; /* Forza la foto ad essere quadrata */
                overflow: hidden;
                background: #f7f7f7;
            }
            .ig-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .ig-item:hover img {
                transform: scale(1.04); /* Effetto zoom morbido */
            }
            
            /* Note di Copyright in fondo */
            .footer-bottom {
                max-width: 1200px;
                margin: 0 auto;
                border-top: 1px solid #f9f9f9;
                padding-top: 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.7rem;
                color: #8c8c8c;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .footer-bottom a { color: #8c8c8c; text-decoration: none; }

            @media (max-width: 768px) {
                .ig-grid { grid-template-columns: repeat(2, 1fr); /* 2x2 su mobile */ }
                .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
            }
        </style>
    `;

    function renderFooter() {
        const footer = document.createElement('footer');
        footer.className = 'site-footer';

        // Sostituisci il link con il tuo vero account e i segnaposto con le tue foto migliori
        footer.innerHTML = `
            <div class="ig-section">
                <a href="https://instagram.com/tuo_username" target="_blank" class="ig-title">
                    @lalibre.studio &mdash; ${t.follow}
                </a>
                <div class="ig-grid">
                    <a href="https://instagram.com/tuo_username" target="_blank" class="ig-item">
                        <img src="images/products/amour-lace.jpg" alt="La Libre Instagram">
                    </a>
                    <a href="https://instagram.com/tuo_username" target="_blank" class="ig-item">
                        <img src="images/products/eliah-dress.jpg" alt="La Libre Instagram">
                    </a>
                    <a href="https://instagram.com/tuo_username" target="_blank" class="ig-item">
                        <img src="images/products/grace-lace.jpg" alt="La Libre Instagram">
                    </a>
                    <a href="https://instagram.com/tuo_username" target="_blank" class="ig-item">
                        <img src="images/products/amour-lace.jpg" alt="La Libre Instagram">
                    </a>
                </div>
            </div>

            <div class="footer-bottom">
                <div>&copy; ${new Date().getFullYear()} La Libre. ${t.rights}.</div>
                <div><a href="index.html">La Libre Studio</a></div>
            </div>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
        document.body.appendChild(footer); // Lo inserisce stabilmente in fondo alla pagina
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderFooter);
    } else {
        renderFooter();
    }
})();
