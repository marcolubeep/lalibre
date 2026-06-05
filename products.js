// products.js - Database Multilingua per La Libre (Nomi in originale)

const productsMaster = [
    {
        id: "silk-dress-01",
        title: "Silk Slip Dress", // <--- Nome originale fisso per tutto il mondo
        price: "€ 180,00",
        categories: ["dresses", "new-arrivals"],
        image: "images/products/silk-slip-dress.jpg",
        fallbackColor: "#f5f5f3",
        status: "active",
        translations: {
            en: {
                tagline: "Atemporal silhouette in pure organic silk"
            },
            es: {
                tagline: "Silueta atemporal en pura seda orgánica"
            },
            zh: {
                tagline: "纯天然有机丝打造的永恒廓形"
            }
        }
    },
    {
        id: "lace-bra-02",
        title: "Delicate Lace Bra", // <--- Nome originale fisso per tutto il mondo
        price: "€ 85,00",
        categories: ["lingeries"],
        image: "images/products/lace-bra.jpg",
        fallbackColor: "#ebdcd0",
        status: "active",
        translations: {
            en: {
                tagline: "Second skin feeling, crafted in Italy"
            },
            es: {
                tagline: "Sensación de segunda piel, confeccionado en Italia"
            },
            zh: {
                tagline: "网状编织，宛如第二层肌肤，意大利工艺制造"
            }
        }
    }
];
