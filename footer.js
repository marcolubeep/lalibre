// footer.js - Footer Ultra-Compatto e Vicino al Corpo per La Libre

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
                margin-top: 3rem; /* Spazio ridotto dal corpo principale */
                padding: 2rem 2rem 1.5rem 2rem; /* Padding interno diminuito */
            }
            
            /* Sezione Instagram Più Piccola */
            .ig-section {
                max-width: 900px; /* Griglia più stretta ed elegante */
                margin: 0 auto 2rem auto; /* Meno spazio sotto la griglia */
                text-align: center;
            }
            .ig-title {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 0.7rem; /* Testo più piccolo */
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
            
            .ig-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr); 
                gap: 0.75rem; /* Foto più vicine tra loro */
            }
            .ig-item {
                position: relative;
                display: block;
                aspect-ratio: 1 / 1; 
                overflow: hidden;
                background: #f7f5f2;
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
                font-size: 0.6rem; /* Micro-testo pulito */
                color: #9c9c9c;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .footer-bottom a { color: #9c9c9c; text-decoration: none; transition: color 0.2s; }
            .footer-bottom a:hover { color: #1a1a1a; }

            @media (max-width: 768px) {
                .ig-grid { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
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
})();// footer.js - Integrazione Embed Ufficiale Instagram per La Libre

(function() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const footerTranslations = {
        en: { follow: "Editorial Insights", rights: "All rights reserved" },
        es: { follow: "Contenido Editorial", rights: "Todos los derechos reservados" },
        zh: { follow: "社交媒体动态", rights: "版权所有" }
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
            
            /* Contenitore Embed Instagram */
            .ig-embed-section {
                max-width: 540px; /* Larghezza standard consigliata da Instagram */
                margin: 0 auto 4rem auto;
                text-align: center;
            }
            .ig-embed-title {
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: #1a1a1a;
                margin-bottom: 2rem;
                font-weight: 300;
            }
            
            /* Forza l'embed ad essere centrato e pulito */
            .ig-embed-container {
                display: flex;
                justify-content: center;
                width: 100%;
            }
            .ig-embed-container blockquote {
                margin: 0 auto !important;
                min-width: 326px !important;
                width: 100% !important;
            }
            
            /* Note di Copyright */
            .footer-bottom {
                max-width: 1200px;
                margin: 0 auto;
                border-top: 1px solid #f9f9f9;
                padding-top: 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.65rem;
                color: #8c8c8c;
                letter-spacing: 1.5px;
                text-transform: uppercase;
            }
            .footer-bottom a { color: #8c8c8c; text-decoration: none; }

            @media (max-width: 768px) {
                .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
            }
        </style>
    `;

    function renderFooter() {
        const footer = document.createElement('footer');
        footer.className = 'site-footer';

        footer.innerHTML = `
            <div class="ig-embed-section">
                <div class="ig-embed-title">${t.follow}</div>
                <div class="ig-embed-container">
                    
                    <!-- ⚠️ INCOLLA IL TUO CODICE DI INSTAGRAM QUI SOTTO ⚠️ -->
                   <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DYwzqeDEu_R/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DYwzqeDEu_R/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DYwzqeDEu_R/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by La Libre (@lalibreofficial)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>
                    <!-- ⚠️ FINE CODICE INSTAGRAM ⚠️ -->

                </div>
            </div>

            <div class="footer-bottom">
                <div>&copy; ${new Date().getFullYear()} La Libre. ${t.rights}.</div>
                <div><a href="index.html">La Libre Studio</a></div>
            </div>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
        document.body.appendChild(footer);

        // Carica dinamicamente lo script ufficiale di Instagram per attivare l'embed
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.async = true;
            script.src = "https://www.instagram.com/embed.js";
            document.body.appendChild(script);
        } else {
            window.instgrm.Embeds.process();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderFooter);
    } else {
        renderFooter();
    }
})();
