(function() {
    // Attendi che il DOM sia pronto
    function waitForContainer() {
        const container = document.getElementById('dynamicNavContainer');
        if (container) {
            initNavbar(container);
        } else {
            // Se il container non esiste ancora, riprova tra poco
            setTimeout(waitForContainer, 50);
        }
    }

    function initNavbar(container) {
        const flags = { en: "🇬🇧", es: "🇪🇸", zh: "🇨🇳" };

        // Dizionario delle traduzioni
        const translations = {
            en: { new: "New Arrivals", dresses: "Dresses", lingerie: "Lingerie", bag: "Bag" },
            es: { new: "Novedades", dresses: "Vestidos", lingerie: "Lencería", bag: "Bolso" },
            zh: { new: "新品上市", dresses: "连衣裙", lingerie: "内衣", bag: "购物袋" }
        };

        const getCurrentLang = () => localStorage.getItem('selectedLang') || 'en';
        
        const t = (key) => {
            const lang = getCurrentLang();
            return translations[lang] ? translations[lang][key] : translations['en'][key];
        };

        function getCartCount() {
            try {
                const cart = JSON.parse(localStorage.getItem('laLibreCart') || '[]');
                return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
            } catch(e) {
                return parseInt(localStorage.getItem('cartItemCount')) || 0;
            }
        }

        const styles = `
            <style>
                /* Stili navbar */
                .main-navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.2rem 2rem;
                    max-width: 1280px;
                    margin: 0 auto;
                    background: #fff;
                    position: relative;
                    z-index: 1001;
                }
                .nav-links { display: flex; gap: 2rem; }
                .nav-links a, .nav-brand a, .nav-meta a, .nav-cart-link {
                    text-decoration: none;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.7rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #1a1a1a;
                    transition: opacity 0.2s;
                }
                .nav-links a:hover, .nav-cart-link:hover { opacity: 0.6; }
                .nav-brand a { 
                    font-family: 'Cormorant Garamond', serif; 
                    font-size: 1.7rem; 
                    letter-spacing: 2px;
                    font-weight: 400;
                }
                .nav-meta { display: flex; align-items: center; gap: 1.5rem; }
                .lang-selector { display: flex; gap: 0.75rem; }
                .lang-item { 
                    cursor: pointer; 
                    font-size: 0.7rem; 
                    opacity: 0.5; 
                    transition: opacity 0.2s;
                    padding: 4px 6px;
                }
                .lang-item:hover { opacity: 0.8; }
                .lang-item.active { opacity: 1; font-weight: 500; }
                .nav-hamburger { 
                    display: none; 
                    flex-direction: column; 
                    gap: 5px; 
                    background: none; 
                    border: none; 
                    cursor: pointer;
                    padding: 8px;
                }
                .nav-hamburger span { 
                    width: 22px; 
                    height: 2px; 
                    background: #1a1a1a; 
                    transition: 0.2s;
                }
                .nav-mobile-drawer {
                    display: none;
                    flex-direction: column;
                    padding: 1rem 2rem;
                    background: #fff;
                    border-top: 1px solid #eae7e2;
                    position: absolute;
                    width: 100%;
                    z-index: 1000;
                }
                .nav-mobile-drawer.open { display: flex; }
                .nav-mobile-drawer a { 
                    padding: 0.8rem 0; 
                    text-decoration: none; 
                    color: #1a1a1a; 
                    font-size: 0.8rem;
                    font-family: 'Montserrat', sans-serif;
                    letter-spacing: 0.1em;
                }
                .mobile-lang { 
                    display: flex; 
                    gap: 1rem; 
                    margin-top: 1rem; 
                    padding-top: 1rem; 
                    border-top: 1px solid #eee;
                }
                @media (max-width: 768px) {
                    .nav-links, .lang-selector { display: none; }
                    .nav-hamburger { display: flex; }
                    .nav-meta .lang-selector { display: none; }
                    .main-navbar { padding: 1rem 1.5rem; }
                }
            </style>
        `;

        function renderNavbar() {
            const currentLang = getCurrentLang();
            const cartCount = getCartCount();

            container.innerHTML = styles + `
                <header style="position: relative; background: #fff;">
                    <div class="main-navbar">
                        <nav class="nav-links">
                            <a href="index.html?cat=new-arrivals" data-nav-link>${t('new')}</a>
                            <a href="index.html?cat=dresses" data-nav-link>${t('dresses')}</a>
                            <a href="index.html?cat=lingeries" data-nav-link>${t('lingerie')}</a>
                        </nav>

                        <div class="nav-brand"><a href="index.html">LA LIBRE</a></div>

                        <div class="nav-meta">
                            <div class="lang-selector" id="langSelector">
                                ${Object.keys(flags).map(l => `
                                    <span class="lang-item ${currentLang === l ? 'active' : ''}" data-lang="${l}">
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
                        <a href="index.html?cat=new-arrivals" data-nav-link>${t('new')}</a>
                        <a href="index.html?cat=dresses" data-nav-link>${t('dresses')}</a>
                        <a href="index.html?cat=lingeries" data-nav-link>${t('lingerie')}</a>
                        <a href="cart.html" class="mobile-cart">${t('bag')} (${cartCount})</a>
                        <div class="mobile-lang" id="mobileLangSelector">
                            ${Object.keys(flags).map(l => `
                                <span class="lang-item ${currentLang === l ? 'active' : ''}" data-lang="${l}" style="font-size:0.7rem; text-transform:uppercase; cursor:pointer;">
                                    ${flags[l]} ${l.toUpperCase()}
                                </span>
                            `).join('')}
                        </div>
                    </nav>
                </header>
            `;

            attachEvents();
        }

        window.setLang = function(lang) {
            localStorage.setItem('selectedLang', lang);
            renderNavbar();
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        };

        function attachEvents() {
            const langItems = document.querySelectorAll('[data-lang]');
            langItems.forEach(item => {
                item.removeEventListener('click', langClickHandler);
                item.addEventListener('click', langClickHandler);
            });

            const hamburger = document.getElementById('navHamburger');
            const drawer = document.getElementById('navMobileDrawer');
            if (hamburger && drawer) {
                hamburger.removeEventListener('click', toggleDrawer);
                hamburger.addEventListener('click', toggleDrawer);
            }
        }

        function langClickHandler(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            if (lang) window.setLang(lang);
        }

        function toggleDrawer() {
            const drawer = document.getElementById('navMobileDrawer');
            if (drawer) drawer.classList.toggle('open');
        }

        window.addEventListener('storage', (e) => {
            if (e.key === 'selectedLang') {
                renderNavbar();
            }
        });

        // Render iniziale
        renderNavbar();
    }

    // Avvia l'attesa per il container
    waitForContainer();
})();
