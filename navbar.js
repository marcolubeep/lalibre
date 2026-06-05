(function() {
    const container = document.getElementById('dynamicNavContainer');
    if (!container) return;

    // Inseriamo lo stile direttamente qui per mantenerlo modulare
    const styles = `
        <style>
            .main-navbar { 
                display: flex; 
                justify-content: space-between; 
                align-items: center; 
                padding: 1.4rem 2rem; 
                background: #ffffff;
            }
            .nav-links { display: flex; gap: 2rem; }
            .nav-links a { 
                text-decoration: none; 
                color: #1a1a1a; 
                font-size: 0.7rem; 
                text-transform: uppercase; 
                letter-spacing: 1.5px; 
                font-weight: 300;
            }
            .nav-brand a { 
                font-family: 'Cormorant Garamond', serif; 
                font-size: 1.8rem; 
                text-decoration: none; 
                color: #1a1a1a; 
                letter-spacing: 4px;
            }
            .nav-meta { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; }
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
            <div class="nav-meta">Bag (0)</div>
        </header>
    `;
})();
