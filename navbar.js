(function() {
    const container = document.getElementById('dynamicNavContainer');
    if (!container) return;
 
    const currentLang = localStorage.getItem('selectedLang') || 'en';
    const flags = { en: "🇬🇧", es: "🇪🇸", zh: "🇨🇳" };
 
    // Read cart count from localStorage
    function getCartCount() {
        try {
            const cart = JSON.parse(localStorage.getItem('laLibreCart') || '[]');
            return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        } catch(e) {
            return parseInt(localStorage.getItem('cartItemCount')) || 0;
        }
    }
 
    const cartCount = getCartCount();
 
    const styles = `
        <style>
            .main-navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.2rem 3rem;
                background: #ffffff;
                border-bottom: 1px solid #f0f0f0;
                position: relative;
            }
            .nav-links {
                display: flex;
                gap: 2rem;
                flex: 1;
                justify-content: flex-start;
            }
            .nav-links a {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 0.7rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 300;
                white-space: nowrap;
            }
            .nav-brand { flex: 1; text-align: center; }
            .nav-brand a {
                font-family: 'Cormorant Garamond', serif;
                font-size: 2.2rem;
                text-decoration: none;
                color: #1a1a1a;
                letter-spacing: 6px;
            }
            .nav-meta {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 1.5rem;
            }
            .lang-selector {
                display: flex;
                gap: 0.5rem;
                font-size: 0.65rem;
                text-transform: uppercase;
            }
            .lang-item {
                cursor: pointer;
                opacity: 0.45;
                transition: opacity 0.3s;
                white-space: nowrap;
            }
            .lang-item.active { opacity: 1; font-weight: 500; }
            .lang-item:hover { opacity: 0.8; }
 
            /* Cart link */
            .nav-cart-link {
                font-size: 0.7rem;
                letter-spacing: 1px;
                text-decoration: none;
                color: #1a1a1a;
                white-space: nowrap;
            }
 
            /* Hamburger — hidden on desktop */
            .nav-hamburger {
                display: none;
                flex-direction: column;
                gap: 5px;
                cursor: pointer;
                padding: 4px;
                background: none;
                border: none;
            }
            .nav-hamburger span {
                display: block;
                width: 22px;
                height: 1px;
                background: #1a1a1a;
                transition: transform 0.3s, opacity 0.3s;
            }
 
            /* Mobile drawer */
            .nav-mobile-drawer {
                display: none;
                flex-direction: column;
                background: #ffffff;
                border-top: 1px solid #f0f0f0;
                padding: 1.5rem 2rem 2rem;
                gap: 1.5rem;
            }
            .nav-mobile-drawer a {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 300;
            }
            .nav-mobile-drawer .mobile-lang {
                display: flex;
                gap: 1rem;
                margin-top: 0.5rem;
            }
            .nav-mobile-drawer .mobile-cart {
                font-size: 0.75rem;
                letter-spacing: 1px;
                text-decoration: none;
                color: #1a1a1a;
            }
 
            @media (max-width: 768px) {
                .main-navbar {
                    padding: 1rem 1.25rem;
                }
                .nav-links { display: none; }
                .lang-selector { display: none; }
                .nav-cart-link { display: none; }
                .nav-hamburger { display: flex; }
                .nav-brand a { font-size: 1.7rem; letter-spacing: 4px; }
            }
        </style>
    `;
 
    container.innerHTML = styles + `
        <header>
            <div class="main-navbar">
                <nav class="nav-links">
                    <a href="index.html?cat=new-arrivals">New Arrivals</a>
                    <a href="index.html?cat=dresses">Dresses</a>
                    <a href="index.html?cat=lingeries">Lingerie</a>
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
                    <a href="cart.html" class="nav-cart-link">Bag (${cartCount})</a>
                </div>
 
                <button class="nav-hamburger" id="navHamburger" aria-label="Open menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
 
            <nav class="nav-mobile-drawer" id="navMobileDrawer">
                <a href="index.html?cat=new-arrivals">New Arrivals</a>
                <a href="index.html?cat=dresses">Dresses</a>
                <a href="index.html?cat=lingeries">Lingerie</a>
                <a href="cart.html" class="mobile-cart">Bag (${cartCount})</a>
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
 
    // Hamburger toggle
    const hamburger = document.getElementById('navHamburger');
    const drawer = document.getElementById('navMobileDrawer');
    if (hamburger && drawer) {
        hamburger.addEventListener('click', function() {
            const isOpen = drawer.style.display === 'flex';
            drawer.style.display = isOpen ? 'none' : 'flex';
        });
    }
 
    window.setLang = (lang) => {
        localStorage.setItem('selectedLang', lang);
        location.reload();
    };
})();
