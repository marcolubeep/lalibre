(function() {
    const container = document.getElementById('dynamicNavContainer');
    if (!container) return;

    container.innerHTML = `
        <style>
            .main-navbar { display: flex; justify-content: space-between; align-items: center; padding: 1.4rem 2rem; }
            .nav-links a { text-decoration: none; color: #1a1a1a; font-size: 0.7rem; text-transform: uppercase; margin-right: 1.5rem; letter-spacing: 1px; }
            .nav-brand a { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; text-decoration: none; color: #1a1a1a; }
        </style>
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
