// footer.js - Footer Ultra-Compatto e Mobile-Responsive per La Libre

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
                margin-top: 2rem; 
                padding: 1.5rem 1rem 1.5rem 1rem; 
                box-sizing: border-box;
            }
            
            .ig-section {
                max-width: 900px; 
                margin: 0 auto 2rem auto; 
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
                margin-bottom: 1.2rem;
                font-weight: 300;
            }
            
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
                color: transparent;
                text-decoration: none;
            }
            .ig-item img {
                width: 100%;
                height: 100%;
                object-fit: cover; /* Mantiene le immagini proporzionate senza deformarle */
                display: block;
            }
            
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

            /* Responsive Mobile Rigido */
            @media (max-width: 768px) {
                .ig-grid { 
                    grid-template-columns: repeat(2, 1fr); /* Diventa 2 foto per riga, un quadrato 2x2 pulito */
                    gap: 0.5rem; 
                }
                .site-footer {
                    margin-top: 1.5rem;
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

        footer.innerHTML = `
            <div class="ig-section">
                <a href="${igProfileUrl}" target="_blank" class="ig-title">
                    @lalibreofficial &mdash; ${t.follow}
                </a>
                <div class="ig-grid">
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig1.jpg" alt="La Libre">
                    </a>
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig2.jpg" alt="La Libre">
                    </a>
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig3.jpg" alt="La Libre">
                    </a>
                    <a href="${igProfileUrl}" target="_blank" class="ig-item">
                        <img src="${pathPrefix}images/products/ig4.jpg" alt="La Libre">
                    </a>
                </div>
            </div>

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
