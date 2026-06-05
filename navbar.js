// navbar.js - Barra di Navigazione Mobile-Responsive per La Libre

(function() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const navTranslations = {
        en: { NewArrivals: "New Arrivals", Dresses: "Dresses", Lingerie: "Lingerie", Cart: "Bag" },
        es: { NewArrivals: "Novedades", Dresses: "Vestidos", Lingerie: "Lencería", Cart: "Bolsa" },
        zh: { NewArrivals: "新品上市", Dresses: "连衣裙", Lingerie: "高端内衣", Cart: "购物袋" }
    };

    const t = navTranslations[currentLang] || navTranslations['en'];

    const styles = `
        <style>
            #dynamicBannerContainer {
                width: 100%;
                position: relative;
                z-index: 1000;
            }
            #dynamicBannerContainer div {
                padding: 6px 1rem !important; 
                font-size: 0.7rem !important;
                letter-spacing: 1.5px !important;
                text-align: center;
            }

            .site-header { 
                width: 100%; 
                background: #fff; 
                border-bottom: 1px solid #f2f2f2; 
                position: sticky; 
                top: 0; 
                z-index: 999; 
            }
            .nav-container { 
                max-width: 1200px; 
                margin: 0 auto; 
                padding: 1.2rem 2rem; 
                display: grid;
                grid-template-columns: 1fr auto 1fr; 
                align-items: center; 
            }
            
            .nav-menu-wrapper { display: flex; justify-content: flex-start; }
            .nav-menu { display: flex; gap: 1.8rem; list-style: none; padding: 0; margin: 0; }
            .nav-link { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; color: #1a1a1a; font-weight: 300; transition: color 0.3s ease; }
            .nav-link:hover { color: #707070; }
            
            .nav-logo-wrapper { display: flex; justify-content: center; }
            .brand-logo { font-family: serif; font-size: 1.8rem; font-weight: 300; letter-spacing: 0.3rem; text-decoration: none; color: #1a1a1a; text-transform: uppercase; display: inline-block; padding-left: 0.3rem; }
            
            .nav-actions-wrapper { display: flex; justify-content: flex-end; align-items: center; gap: 1.8rem; }
            .lang-selector { display: flex; gap: 0.4rem; }
            .lang-btn { background: none; border: none; font-size: 0.75rem; letter-spacing: 1px; color: #b0b0b0; cursor: pointer; padding: 2px 4px; font-weight: 300; transition: color 0.2s; }
            .lang-btn.active { color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #1a1a1a; }
            .cart-link { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; color: #1a1a1a; display: flex; align-items: center; gap: 6px; font-weight: 400; }
            .cart-badge { background: #1a1a1a; color: #fff; font-size: 0.65rem; padding: 2px 6px; border-radius: 10px; min-width: 18px; text-align: center; font-weight: 300; }
            
            /* Svolta Mobile: Previene sovrapposizioni su schermi piccoli */
            @media (max-width: 850px) { 
                .nav-container { 
                    display: flex;
                    flex-direction: column; 
                    gap: 0.8rem; 
                    padding: 1rem; 
                }
                .nav-menu-wrapper, .nav-logo-wrapper, .nav-actions-wrapper {
                    width: 100%;
                    justify-content: center;
                    text-align: center;
                }
                .nav-menu { 
                    gap: 1.2rem; 
                    justify-content: center;
                    flex-wrap: wrap; /* Se lo schermo è minuscolo, le categorie vanno a capo senza rompere il layout */
                }
                .nav-actions-wrapper { 
                    justify-content: center; 
                    gap: 2rem;
                    border-top: 1px solid #f9f9f9;
                    padding-top: 0.6rem;
                }
            }
        </style>
    `;

    window.setLanguage = function(langCode) {
        localStorage.setItem('selectedLang', langCode);
        window.location.reload();
    };

    function renderNavbar() {
        const header = document.createElement('header');
        header.className = 'site-header';
        const cartCount = localStorage.getItem('cartItemCount') || '0';

        header.innerHTML = `
            <div class="nav-container">
                <div class="nav-menu-wrapper">
                    <ul class="nav-menu">
                        <li><a href="index.html" onclick="if(window.changeCategory){event.preventDefault(); changeCategory('new-arrivals');}" class="nav-link">${t.NewArrivals}</a></li>
                        <li><a href="index.html" onclick="if(window.changeCategory){event.preventDefault(); changeCategory('dresses');}" class="nav-link">${t.Dresses}</a></li>
                        <li><a href="index.html" onclick="if(window.changeCategory){event.preventDefault(); changeCategory('lingeries');}" class="nav-link">${t.Lingerie}</a></li>
                    </ul>
                </div>
                
                <div class="nav-logo-wrapper">
                    <a href="index.html" class="brand-logo">La Libre</a>
                </div>

                <div class="nav-actions-wrapper">
                    <div class="lang-selector">
                        <button onclick="setLanguage('en')" class="lang-btn ${currentLang === 'en' ? 'active' : ''}">EN</button>
                        <button onclick="setLanguage('es')" class="lang-btn ${currentLang === 'es' ? 'active' : ''}">ES</button>
                        <button onclick="setLanguage('zh')" class="lang-btn ${currentLang === 'zh' ? 'active' : ''}">ZH</button>
                    </div>
                    <a href="#" class="cart-link" onclick="event.preventDefault();">
                        <span>${t.Cart}</span>
                        <span class="cart-badge">${cartCount}</span>
                    </a>
                </div>
            </div>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
        document.body.insertBefore(header, document.body.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavbar);
    } else {
        renderNavbar();
    }
})();
