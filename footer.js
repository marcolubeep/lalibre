// footer.js - Footer Compatto Mobile-First con Fallback Immagini per La Libre

(function() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const footerTranslations = {
        en: { follow: "Follow us on Instagram", rights: "All rights reserved" },
        es: { follow: "Síguenos en Instagram", rights: "Todos los derechos reservados" },
        zh: { follow: "关注 La Libre 官方 Instagram", rights: "版权所有" }
    };

    const t = footerTranslations[currentLang] || footerTranslations['en'];

    const styles = `
        <style>
            .site-footer {
                width: 100%;
                background: #ffffff;
                margin-top: 1.5rem; /* Attaccato quasi al corpo principale per eliminare i vuoti */
                padding: 1rem 2rem 1.5rem 2rem; 
                box-sizing: border-box;
            }
            
            /* Sezione Instagram Compatta */
            .ig-section {
                max-width: 900px; 
                margin: 0 auto 1.5rem auto; 
                text-align: center;
            }
            .ig-title {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 0.7rem; 
                text-transform: uppercase;
                letter-spacing: 2.5px;
                color: #1a1a1a;
                text-decoration: none;
                display: inline-block;
                margin-bottom: 1rem;
                font-weight: 300;
                transition: color 0.3s;
            }
            .ig-title:hover { color: #707070; }
            
            /* Griglia Responsive Mobile-First */
            .ig-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr); 
                gap: 0.75rem; 
            }
            .ig-item {
                position: relative;
                display: block;
                aspect-ratio: 1 / 1; 
                overflow: hidden;
                background: #f7f5f2;
                text-decoration: none;
            }
            .ig-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .ig-item:hover img {
                transform: scale(1.03); 
            }
            
            /* Copyright - Posizionato stabilmente in fondo sotto la sezione IG */
            .footer-bottom {
                max-width: 900px;
                margin: 0 auto;
                border-top: 1px solid #f5f5f5; 
                padding-top: 1.2rem;
                text-align: center; 
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 0.6rem; 
                color: #9c9c9c;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            /* Ottimizzazione Mobile Rigida */
            @media (max-width: 768px) {
                .ig-grid { 
                    grid-template-columns: repeat(2, 1fr); /* Quadrato 2x2 pulito su mobile */
                    gap: 0.5rem; 
                }
                .site-footer {
                    margin-top: 1rem;
                    padding: 1rem 1rem 1.2rem 1rem;
                }
            }
        </style>
    `;

    function renderFooter() {
        const footer = document.createElement('footer');
        footer.className = 'site-footer';

        const isProductPage = window.location.pathname.includes('product.html') || document.getElementById('product-detail-container');
        const pathPrefix = (isProductPage && !window.location.pathname.includes('index.html')) ? './' : '';
        const igProfileUrl = "https://www.instagram.com/lalibreofficial";

        // Funzione di sicurezza: se la foto ig specifica fallisce, carica un prodotto catalogo esistente
        window.handleIgError = function(imgElement, fallbackImageName) {
            imgElement.onerror = null; // Previene loop infiniti
            imgElement.src = pathPrefix + 'images/products/' + fallbackImageName;
        };

        footer.innerHTML = `
            <!-- Sezione Instagram (in alto, vicino ai prodotti) -->
            <div class="ig-section">
                <a href="${igProfileUrl}" target="_blank" class="ig-title">
                    @lalibreofficial &mdash; ${t.follow}
                </a>
                <div class="ig-grid">
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig1.jpg" onerror="handleIgError(this, 'amour-lace.jpg')" alt="La Libre">
                    </a>
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig2.jpg" onerror="handleIgError(this, 'eliah-dress.jpg')" alt="La Libre">
                    </a>
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig3.jpg" onerror="handleIgError(this, 'grace-lace.jpg')" alt="La Libre">
                    </a>
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig4.jpg" onerror="handleIgError(this, 'amour-lace.jpg')" alt="La Libre">
                    </a>
                </div>
            </div>

            <!-- Copyright Line (in fondo a tutto) -->
            <div class="footer-bottom">
                <div>&copy; ${new Date().getFullYear()} La Libre. ${t.rights}.</div>
            </div>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
        document.body.appendChild(footer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderFooter);
    } else {
        renderFooter();
    }
})();
