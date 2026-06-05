// navbar.js - Gestisce unicamente la Barra di Navigazione principale di La Libre

(function() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const navTranslations = {
        en: { shop: "Collection", studio: "The Studio", cart: "Cart" },
        es: { shop: "Colección", studio: "El Estudio", cart: "Carrito" },
        zh: { shop: "系列作品", studio: "工作室", cart: "购物车" }
    };

    const t = navTranslations[currentLang] || navTranslations['en'];

    const styles = `
        <style>
            .main-navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.2rem 2rem;
                background-color: #ffffff;
                border-bottom: 1px solid #f5f5f5;
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }

            .nav-links {
                display: flex;
                gap: 1.5rem;
            }
            .nav-links a {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 300;
                transition: opacity 0.2s ease;
            }
            .nav-links a:hover {
                opacity: 0.6;
            }

            .nav-brand a {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 1.1rem;
                font-weight: 400;
                letter-spacing: 4px;
                text-transform: uppercase;
            }

            .nav-meta {
                display: flex;
                align-items: center;
                gap: 1.5rem;
            }
            
            .lang-selector {
                border: none;
                background: transparent;
                color: #1a1a1a;
                font-size: 0.7rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                cursor: pointer;
                padding: 0;
                font-weight: 300;
                outline: none;
            }

            .cart-link {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 300;
            }

            @media (max-width: 768px) {
                .main-navbar {
                    padding: 1rem;
                    flex-direction: column;
                    gap: 0.8rem;
                }
                .nav-links { order: 2; gap: 1.2rem; }
                .nav-brand { order: 1; }
                .nav-meta {
                    order: 3;
                    width: 100%;
                    justify-content: center;
                    gap: 1.5rem;
                    border-top: 1px solid #f9f9f9;
                    padding-top: 0.6rem;
                }
            }
        </style>
    `;

    function renderNavbar() {
        // Aggancia espressamente il contenitore del Menu Navigazione
        const container = document.getElementById('dynamicNavContainer');
        if (!container) return;

        container.innerHTML = `
            <header class="main-navbar">
                <nav class="nav-links">
                    <a href="index.html">${t.shop}</a>
                    <a href="#studio">${t.studio}</a>
                </nav>

                <div class="nav-brand">
                    <a href="index.html">La Libre</a>
                </div>

                <div class="nav-meta">
                    <select class="lang-selector" id="siteLanguageSelect">
                        <option value="en" ${currentLang === 'en' ? 'selected' : ''}>EN</option>
                        <option value="es" ${currentLang === 'es' ? 'selected' : ''}>ES</option>
                        <option value="zh" ${currentLang === 'zh' ? 'selected' : ''}>ZH</option>
                    </select>
                    <a href="#cart" class="cart-link">${t.cart}</a>
                </div>
            </header>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);

        const selector = document.getElementById('siteLanguageSelect');
        if (selector) {
            selector.addEventListener('change', function(e) {
                localStorage.setItem('selectedLang', e.target.value);
                window.location.reload();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavbar);
    } else {
        renderNavbar();
    }
})();
