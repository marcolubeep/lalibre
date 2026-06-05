// footer.js - Footer Automatico con Instagram Feed Reale per La Libre

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
                border-top: 1px solid #f2f2f2;
                margin-top: 3rem; 
                padding: 2rem 2rem 1.5rem 2rem; 
            }
            
            /* Sezione Instagram Live */
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
                transition: color 0.3s;
            }
            .ig-title:hover { color: #707070; }
            
            /* Forziamo il widget a mantenere uno stile pulito e minimal, nascondendo i bordi in eccesso */
            .ig-live-container {
                width: 100%;
                overflow: hidden;
            }
            .ig-live-container iframe {
                border: none !important;
                border-radius: 0 !important;
            }
            
            /* Copyright compatto */
            .footer-bottom {
                max-width: 900px;
                margin: 0 auto;
                border-top: 1px solid #f9f9f9;
                padding-top: 1.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 0.6rem; 
                color: #9c9c9c;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .footer-bottom a { color: #9c9c9c; text-decoration: none; transition: color 0.2s; }
            .footer-bottom a:hover { color: #1a1a1a; }

            @media (max-width: 768px) {
                .footer-bottom { flex-direction: column; gap: 0.8rem; text-align: center; }
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
                <div class="ig-live-container">
                    
                    <!-- 📸 WIDGET INSTAGRAM REALE E LIVE -->
                    <iframe src="https://besocialwidget.com/v/lalibreofficial" width="100%" height="230" scrolling="no" style="border:none; overflow:hidden; width:100%;"></iframe>
                    
                </div>
            </div>

            <div class="footer-bottom">
                <div>&copy; ${new Date().getFullYear()} La Libre. ${t.rights}.</div>
                <div><a href="${pathPrefix}index.html">La Libre Studio</a></div>
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
