// navbar.js - Menu di navigazione condiviso e globale per La Libre

(function() {
    // 1. Iniezione degli stili CSS della Nav Bar per garantire consistenza assoluta
    const navStyles = `
        header {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: 1.5rem 4%;
            border-bottom: 1px solid #eee;
            position: sticky;
            top: 0;
            background: white;
            z-index: 100;
        }
        
        .nav-left { display: flex; gap: 1.5rem; }
        .nav-left a { text-decoration: none; color: var(--text-color); font-size: 0.9rem; font-weight: 400; transition: color 0.2s; }
        .nav-left a:hover { color: var(--accent-color); }
        
        .logo { 
            font-family: serif; 
            font-size: 1.6rem; 
            letter-spacing: 0.3rem; 
            text-transform: uppercase; 
            font-weight: 400; 
            cursor: pointer;
            text-align: center;
        }
        
        .nav-right { 
            display: flex; 
            justify-content: flex-end; 
            align-items: center; 
            gap: 1.8rem; 
        }
        
        .social-icons { 
            display: flex; 
            align-items: center; 
        }
        
        .social-icons a {
            color: var(--text-color); 
            display: inline-flex; 
            align-items: center;
            text-decoration: none;
            transition: opacity 0.2s;
        }
        .social-icons a:hover { opacity: 0.7; }
        
        /* Icona IG SVG nativa in Bianco/Nero */
        .instagram-icon {
            width: 18px;
            height: 18px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        
        .lang-select {
            font-size: 0.8rem;
            border: none;
            background: transparent;
            cursor: pointer;
            outline: none;
            letter-spacing: 1px;
            font-weight: 400;
            color: var(--text-color);
            width: auto;
            padding-right: 5px;
            text-transform: uppercase;
        }

        .cart-icon-wrapper { 
            position: relative; 
            display: flex; 
            align-items: center; 
            text-decoration: none; 
            color: var(--text-color);
            transition: opacity 0.2s;
        }
        .cart-icon-wrapper:hover { opacity: 0.7; }
        
        .cart-icon-svg {
            width: 20px;
            height: 20px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        
        .cart-badge {
            position: absolute; top: -8px; right: -12px;
            background: var(--text-color); color: white;
            font-size: 0.65rem; padding: 2px 5px; border-radius: 50%;
        }

        @media (max-width: 900px) {
            header { grid-template-columns: 1fr; gap: 1rem; text-align: center; }
            .nav-left, .nav-right { justify-content: center; }
            .logo { order: -1; }
        }
    `;

    // Inserisce gli stili nell'head del documento
    const styleSheet = document.createElement("style");
    styleSheet.innerText = navStyles;
    document.head.appendChild(styleSheet);

    // 2. Struttura HTML dell'header (Isolando l'azione corretta per la Home o i Filtri)
    const isProductPage = window.location.pathname.includes('product.html');
    
    const homeAction = isProductPage ? "href='index.html'" : "href='#' onclick='changeCategory(\"all\"); return false;'";
    const dressesAction = isProductPage ? "href='index.html'" : "href='#' onclick='changeCategory(\"dresses\"); return false;'";
    const lingeriesAction = isProductPage ? "href='index.html'" : "href='#' onclick='changeCategory(\"lingeries\"); return false;'";
    const newArrivalsAction = isProductPage ? "href='index.html'" : "href='#' onclick='changeCategory(\"new-arrivals\"); return false;'";

    const headerHTML = `
        <header>
            <div class="nav-left">
                <a ${homeAction}>Home</a>
                <a ${dressesAction}>Dresses</a>
                <a ${lingeriesAction}>Lingeries</a>
                <a ${newArrivalsAction}>New Arrivals</a>
            </div>
            
            <div class="logo" onclick="window.location.href='index.html'">La Libre</div>
            
            <div class="nav-right">
                <div class="social-icons">
                    <a href="https://www.instagram.com/lalibreofficial/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <svg class="instagram-icon" viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>
                <select class="lang-select">
                    <option>EN (UK)</option>
                    <option>FR</option>
                </select>
                <a href="cart.html" class="cart-icon-wrapper" title="Shopping Bag">
                    <svg class="cart-icon-svg" viewBox="0 0 24 24">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span class="cart-badge">0</span>
                </a>
            </div>
        </header>
    `;

    // Inserisce l'header all'inizio del body appena il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        document.body.insertAdjacentHTML("afterbegin", headerHTML);
        
        // Sincronizza immediatamente il contatore del carrello globale
        const currentCount = localStorage.getItem('cartItemCount') || 0;
        const badge = document.querySelector('.cart-badge');
        if(badge) badge.innerText = currentCount;
    });
})();
