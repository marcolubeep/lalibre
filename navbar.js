(function() {
    const container = document.getElementById('dynamicNavContainer');
    if (!container) return;

    const currentLang = localStorage.getItem('selectedLang') || 'en';
    const flags = { en: "🇬🇧", es: "🇪🇸", zh: "🇨🇳" };

    // Dizionario delle traduzioni
    const translations = {
        en: { new: "New Arrivals", dresses: "Dresses", lingerie: "Lingerie", bag: "Bag" },
        es: { new: "Novedades", dresses: "Vestidos", lingerie: "Lencería", bag: "Bolso" },
        zh: { new: "新品上市", dresses: "连衣裙", lingerie: "内衣", bag: "购物袋" }
    };

    // Funzione helper per ottenere il testo
    const t = (key) => (translations[currentLang] ? translations[currentLang][key] : translations['en'][key]);

    // Read cart count... (la tua funzione esistente resta identica)
    function getCartCount() {
        try {
            const cart = JSON.parse(localStorage.getItem('laLibreCart') || '[]');
            return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        } catch(e) {
            return parseInt(localStorage.getItem('cartItemCount')) || 0;
        }
    }
    const cartCount = getCartCount();

    // ... (Mantieni tutto il blocco CSS uguale a prima) ...

    container.innerHTML = styles + `
        <header>
            <div class="main-navbar">
                <nav class="nav-links">
                    <a href="index.html?cat=new-arrivals">${t('new')}</a>
                    <a href="index.html?cat=dresses">${t('dresses')}</a>
                    <a href="index.html?cat=lingeries">${t('lingerie')}</a>
                </nav>

                <div class="nav-brand"><a href="index.html">LA LIBRE</a></div>

                <div class="nav-meta">
                    <div class="lang-selector">
                        ${Object.keys(flags).map(l => `
                            <span class="lang-item ${currentLang === l ? 'active' : ''}" onclick="setLang('${l}')">
                                ${flags[l]} ${l.toUpperCase()}
                            </span>
                        `).join('')}
                    </div>
                    <a href="cart.html" class="nav-cart-link">${t('bag')} (${cartCount})</a>
                </div>

                <button class="nav-hamburger" id="navHamburger" aria-label="Open menu">
                    <span></span><span></span><span></span>
                </button>
            </div>

            <nav class="nav-mobile-drawer" id="navMobileDrawer">
                <a href="index.html?cat=new-arrivals">${t('new')}</a>
                <a href="index.html?cat=dresses">${t('dresses')}</a>
                <a href="index.html?cat=lingeries">${t('lingerie')}</a>
                <a href="cart.html" class="mobile-cart">${t('bag')} (${cartCount})</a>
                <div class="mobile-lang">
                    ${Object.keys(flags).map(l => `
                        <span class="lang-item ${currentLang === l ? 'active' : ''}" onclick="setLang('${l}')" style="font-size:0.7rem; text-transform:uppercase; cursor:pointer; opacity:${currentLang === l ? '1' : '0.45'};">
                            ${flags[l]} ${l.toUpperCase()}
                        </span>
                    `).join('')}
                </div>
            </nav>
        </header>
    `;

    // ... (Mantieni il resto dello script per hamburger e setLang come prima)
})();
