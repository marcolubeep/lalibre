// navbar.js - Navbar minimale, Gestione Lingua e Top Announcement Banner per La Libre

(function() {
    // 1. Recupero o inizializzazione della lingua (default: inglese)
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    // 2. Traduzioni per la Navbar e il Top Banner
    const navTranslations = {
        en: {
            announcement: "Complimentary worldwide shipping on architectural orders",
            shop: "Collection",
            studio: "The Studio",
            cart: "Cart"
        },
        es: {
            announcement: "Envío internacional de cortesía en pedidos arquitectónicos",
            shop: "Colección",
            studio: "El Estudio",
            cart: "Carrito"
        },
        zh: {
            announcement: "建筑系列订单享受全球免费配送服务",
            shop: "系列作品",
            studio: "工作室",
            cart: "购物车"
        }
    };

    const t = navTranslations[currentLang] || navTranslations['en'];

    // 3. Stili CSS iniettati in modo pulito (Zero spazi vuoti, massima aderenza al video)
    const styles = `
        <style>
            /* Reset locale per evitare sorprese tra i browser */
            .nav-wrapper-clear {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }

            /* Top Announcement Banner */
            .top-announcement {
                background-color: #1a1a1a;
                color: #ffffff;
                text-align: center;
                padding: 0.5rem 1rem;
                font-size: 0.65rem;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                font-weight: 300;
            }

            /* Main Header Nav Bar */
            .main-navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.2rem 2rem;
                background-color: #ffffff;
                border-bottom: 1px solid #f5f5f5;
            }

            /* Left Side: Links di navigazione */
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

            /* Center: Brand Identity */
            .nav-brand {
                text-align: center;
            }
            .nav-brand a {
                text-decoration: none;
                color: #1a1a1a;
                font-size: 1.1rem;
                font-weight: 400;
                letter-spacing: 4px;
                text-transform: uppercase;
            }

            /* Right Side: Lingua e Carrello */
            .nav-meta {
                display: flex;
                align-items: center;
                gap: 1.5rem;
            }
            
            /* Selettore della Lingua Minimalista */
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

            /* Ottimizzazione Mobile */
            @media (max-width: 768px) {
                .main-navbar {
                    padding: 1rem;
                    flex-direction: column;
                    gap: 0.8rem;
                }
                .nav-links {
                    order: 2;
                    gap: 1.2rem;
                }
                .nav-brand {
                    order: 1;
                }
                .nav-meta {
                    order: 3;
                    width: 100%;
                    justify-content: center;
                    gap: 1.5rem;
                    border-top: 1px solid #f9f9f9;
                    padding-top: 0.6rem;
                }
                .top-announcement {
                    font-size: 0.6rem;
                    line-height: 1.3;
                }
            }
        </style>
    `;

    // 4. Generazione dinamica della struttura all'interno del container dedicato
    function renderNavbar() {
        const container = document.getElementById('dynamicBannerContainer');
        if (!container) return;

        // Puliamo eventuali residui per evitare duplicazioni
        container.innerHTML = '';
        container.className = 'nav-wrapper-clear';

        container.innerHTML = `
            <div class="top-announcement">
                ${t.announcement}
            </div>

            <header class="main-navbar">
                <nav class="nav-links">
                    <a href="index.html">${t.shop}</a>
                    <a href="#studio">${t.studio}</a>
                </nav>

                <div class="nav-brand">
                    <a href="index.html">La Libre</a>
                </div>

                <div class="nav-meta">
