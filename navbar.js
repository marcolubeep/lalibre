(function() {
    const container = document.getElementById('dynamicNavContainer');
    if (!container) return;

    // Recupera la lingua corrente dal localStorage (o default 'en')
    const currentLang = localStorage.getItem('selectedLang') || 'en';

    const styles = `
        <style>
            .main-navbar { 
                display: flex; 
                justify-content: space-between; 
                align-items: center; 
                padding: 1.5rem 3rem; 
                background: #ffffff;
                border-bottom: 1px solid #f0f0f0;
            }
            .nav-links { display: flex; gap: 2.5rem; flex: 1; }
            .nav-links a { 
                text-decoration: none; 
                color: #1a1a1a; 
                font-size: 0.75rem; 
                text-transform: uppercase; 
                letter-spacing: 2px; 
                font-weight: 300;
            }
            .nav-brand { flex: 1; text-align: center; }
            .nav-brand a { 
                font-family: 'Cormorant Garamond', serif; 
                font-size: 2.2rem; 
                text-decoration: none; 
                color: #1a1a1a; 
                letter-spacing: 5px;
            }
            .nav-meta { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 1.5rem; }
            .lang-selector { 
                font-size: 0.7rem; 
                text-transform: uppercase; 
                cursor: pointer; 
                letter-spacing: 1px;
            }
        </style>
    `;

    container.innerHTML = styles + `
        <header class="main-navbar">
            <nav class="nav-links">
                <a href="index.html?cat=new-arrivals">New Arrivals</a>
                <a href="index.html?cat=dresses">Dresses</a>
                <a href="index.html?cat=lingerie">Lingerie</a>
            </nav>
            
            <div class="nav-brand"><a href="index.html">LA LIBRE</a></div>
            
            <div class="nav-meta">
                <div class="lang-selector">
                    <span id="langEn" style="font-weight: ${currentLang === 'en' ? '600' : '300'}">EN</span> / 
                    <span id="langEs" style="font-weight: ${currentLang === 'es' ? '600' : '300'}">ES</span>
                </div>
                <div class="bag-link">BAG (0)</div>
            </div>
        </header>
    `;

    // Logica selezione lingua
    document.getElementById('langEn').addEventListener('click', () => { localStorage.setItem('selectedLang', 'en'); location.reload(); });
    document.getElementById('langEs').addEventListener('click', () => { localStorage.setItem('selectedLang', 'es'); location.reload(); });
})();
