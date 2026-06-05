// navbar.js - Layout Originale La Libre + Predisposizione Sticky-Scroll

(function() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const navTranslations = {
        en: { links: ["New Arrivals", "Dresses", "Lingerie"], bag: "Bag" },
        es: { links: ["Novedades", "Vestidos", "Lencería"], bag: "Bolso" },
        zh: { links: ["新品上市", "连衣裙", "精品内衣"], bag: "购物袋" }
    };

    const t = navTranslations[currentLang] || navTranslations['en'];

    const styles = `
        <style>
            .main-navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.4rem 2rem;
                background-color: #ffffff;
                box-sizing: border-box;
                font-family: 'Montserrat', sans-serif;
                border-bottom: 1px solid #f9f9f9;
            }

            .nav-links {
                display: flex;
                gap: 1.5rem;
                flex: 1;
            }
            .nav-links a {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 0.68rem;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                font-weight: 300;
                transition: opacity 0.2s ease;
            }
            .nav-links a:hover {
                opacity: 0.6;
            }

            .nav-brand {
                text-align: center;
                flex: 1;
            }
            .nav-brand a {
                text-decoration: none;
                color: #1a1a1a;
                font-family: 'Cormorant Garamond', serif;
                font-size: 1.6rem;
                font-weight: 300;
                letter-spacing: 5px;
                text-transform: uppercase;
            }

            .nav-meta {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 1.2rem;
                flex: 1;
            }
            
            .lang-container {
                display: flex;
                gap: 0.4rem;
                font-size: 0.65rem;
                letter-spacing: 1px;
            }
            .lang-btn {
                background: none;
                border: none;
                color: #b3b3b3;
                cursor: pointer;
                padding: 0;
                font-family: 'Montserrat', sans-serif;
                text-transform: uppercase;
            }
            .lang-btn.active {
                color: #1a1a1a;
                font-weight: 400;
                text-decoration: underline;
                text-underline-offset: 3px;
            }

            .cart-link {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 0.65rem;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                font-weight: 300;
                display: flex;
                align-items: center;
                gap: 0.4rem;
            }
            .cart-count-badge {
                background-color: #1a1a1a;
                color: #ffffff;
                font-size: 0.6rem;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 400;
            }

            @media (max-width: 850px) {
                .main-navbar {
                    padding: 1rem;
                    flex-direction: column;
                    gap: 0.8rem;
                }
                .nav-links { justify-content: center; width: 100%; order: 2; }
                .nav-brand { order: 1; width: 100%; }
                .nav-meta { justify-content: center; width: 100%; order: 3; border-top: 1px solid #f7f7f7; padding-top: 0.4rem; }
            }
        </style>
    `;

    function renderNavbar() {
        const container = document.getElementById('dynamicNavContainer');
        if (!container) return;

        container.innerHTML = `
            <header class="main-navbar">
                <nav class="nav-links">
                    <a href="index.html?cat=new">${t.links[0]}</a>
                    <a href="index.html?cat=dresses">${t.links[1]}</a>
                    <a href="index.html?cat=lingerie">${t.links[2]}</a>
                </nav>

                <div class="nav-brand">
                    <a href="index.html">La Libre</a>
                </div>

                <div class="nav-meta">
                    <div class="lang-container">
                        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                        <button class="lang-btn ${currentLang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
                        <button class="lang-btn ${currentLang === 'zh' ? 'active' : ''}" data-lang="zh">ZH</button>
                    </div>
                    <a href="#cart" class="cart-link">
                        ${t.bag} <span class="cart-count-badge">0</span>
                    </a>
                </div>
            </header>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const targetLang = this.getAttribute('data-lang');
                if (targetLang !== currentLang) {
                    localStorage.setItem('selectedLang', targetLang);
                    window.location.reload();
        // Aggiungi questo ai link nella tua funzione renderNavbar():
 container.innerHTML = `
    <header class="main-navbar">
        <nav class="nav-links">
            <a href="index.html?cat=new-arrivals">New Arrivals</a>
            <a href="index.html?cat=dresses">Dresses</a>
            <a href="index.html?cat=lingerie">Lingerie</a>
        </nav>
        </header>
`;
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavbar);
    } else {
        renderNavbar();
    }
})();
