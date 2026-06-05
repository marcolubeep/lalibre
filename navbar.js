// navbar.js - Barra di Navigazione Multilingua Dinamica per La Libre

(function() {
    // 1. Rileva la lingua salvata o imposta l'inglese come predefinita
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    // 2. Testi tradotti per le voci del menu e l'interfaccia
    const navTranslations = {
        en: { NewArrivals: "New Arrivals", Dresses: "Dresses", Lingerie: "Lingerie", Cart: "Bag" },
        es: { NewArrivals: "Novedades", Dresses: "Vestidos", Lingerie: "Lencería", Cart: "Bolsa" },
        zh: { NewArrivals: "新品上市", Dresses: "连衣裙", Lingerie: "高端内衣", Cart: "购物袋" }
    };

    const t = navTranslations[currentLang] || navTranslations['en'];

    // 3. Stili CSS dedicati alla Navbar (Minimal, Luxury, Clean)
    const styles = `
        <style>
            .site-header { width: 100%; background: #fff; border-bottom: 1px solid #f2f2f2; position: sticky; top: 0; z-index: 999; }
            .nav-container { max-width: 1200px; margin: 0 auto; padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; }
            .brand-logo { font-family: serif; font-size: 1.8rem; font-weight: 300; letter-spacing: 0.2rem; text-decoration: none; color: #1a1a1a; text-transform: uppercase; }
            .nav-menu { display: flex; gap: 2.5rem; list-style: none; padding: 0; margin: 0; }
            .nav-link { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; text-decoration: none; color: #1a1a1a; font-weight: 300; transition: color 0.3s ease; }
            .nav-link:hover { color: #707070; }
            .nav-actions { display: flex; align-items: center; gap: 2rem; }
            .lang-selector { display: flex; gap: 0.5rem; }
            .lang-btn { background: none; border: none; font-size: 0.75rem; letter-spacing: 1px; color: #b0b0b0; cursor: pointer; padding: 2px 4px; font-weight: 300; transition: color 0.2s; }
            .lang-btn.active { color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #1a1a1a; }
            .cart-link { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; color: #1a1a1a; display: flex; align-items: center; gap: 4px; font-weight: 400; }
            .cart-badge { background: #1a1a1a; color: #fff; font-size: 0.7rem; padding: 2px 6px; border-radius: 10px; min-width: 18px; text-align: center; font-weight: 300; }
            @media (max-width: 768px) { 
                .nav-container { flex-direction: column; gap: 1rem; padding: 1rem; }
                .nav-menu { gap: 1.2rem; }
                .nav-actions { width: 100%; justify-content: space-between; margin-top: 0.5rem; }
            }
        </style>
    `;

    // 4. Funzione per cambiare lingua e aggiornare la pagina
    window.setLanguage = function(langCode) {
        localStorage.setItem('selectedLang', langCode);
        // Ricarica la pagina per applicare i testi e aggiornare i prodotti del catalogo
        window.location.reload();
    };

    // 5. Generazione dell'HTML della Navbar
    function renderNavbar() {
        const header = document.createElement('header');
        header.className = 'site-header';

        const cartCount = localStorage.getItem('cartItemCount') || '0';

        header.innerHTML = `
            <div class="nav-container">
                <a href="index.html" class="brand-logo">La Libre</a>
                
                <ul class="nav-menu">
                    <li><a href="index.html" onclick="if(window.changeCategory){event.preventDefault(); changeCategory('new-arrivals');}" class="nav-link">${t.NewArrivals}</a></li>
                    <li><a href="index.html" onclick="if(window.changeCategory){event.preventDefault(); changeCategory('dresses');}" class="nav-link">${t.Dresses}</a></li>
                    <li><a href="index.html" onclick="if(window.changeCategory){event.preventDefault(); changeCategory('lingeries');}" class="nav-link">${t.Lingerie}</a></li>
                </ul>

                <div class="nav-actions">
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
        // Inserisce la barra come primo elemento del body, subito sotto l'eventuale banner
        const banner = document.getElementById('dynamicBannerContainer');
        if (banner) {
            banner.after(header);
        } else {
            document.body.insertBefore(header, document.body.firstChild);
        }
    }

    // Inizializza la navbar non appena il DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavbar);
    } else {
        renderNavbar();
    }
})();
