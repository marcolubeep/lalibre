(function() {
    const container = document.getElementById('dynamicNavContainer');
    if (!container) return;

    const currentLang = localStorage.getItem('selectedLang') || 'en';
    
    // Bandierine discrete (utilizzando caratteri Unicode)
    const flags = { en: "🇬🇧", es: "🇪🇸", zh: "🇨🇳" };

    const styles = `
        <style>
            .main-navbar { 
                display: flex; justify-content: space-between; align-items: center; 
                padding: 1.5rem 3rem; background: #ffffff; border-bottom: 1px solid #f9f9f9;
            }
            .nav-links { display: flex; gap: 2rem; flex: 1; justify-content: flex-start; }
            .nav-links a { 
                text-decoration: none; color: #1a1a1a; font-size: 0.7rem; 
                text-transform: uppercase; letter-spacing: 2px; font-weight: 300; 
            }
            .nav-brand { flex: 1; text-align: center; }
            .nav-brand a { 
                font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; 
                text-decoration: none; color: #1a1a1a; letter-spacing: 6px; 
            }
            .nav-meta { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 1.5rem; }
            .lang-selector { display: flex; gap: 0.5rem; font-size: 0.7rem; text-transform: uppercase; }
            .lang-item { cursor: pointer; opacity: 0.5; transition: opacity 0.3s; }
            .lang-item.active { opacity: 1; font-weight: bold; }
        </style>
    `;

    container.innerHTML = styles + `
        <header class="main-navbar">
            <nav class="nav-links">
                <a href="index.html?cat=new-arrivals">NEW ARRIVALS</a>
                <a href="index.html?cat=dresses">DRESSES</a>
                <a href="index.html?cat=lingerie">LINGERIE</a>
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
                <div class="bag-link" style="font-size: 0.7rem; letter-spacing: 1px;">BAG (0)</div>
            </div>
        </header>
    `;

    window.setLang = (lang) => {
        localStorage.setItem('selectedLang', lang);
        location.reload();
    };
})();
