// products.js - Database Multilingua per La Libre (EN, ES, ZH)

const productsMaster = [
    {
        id: "silk-dress-01",
        price: "€ 180,00",
        categories: ["dresses", "new-arrivals"],
        image: "images/products/silk-slip-dress.jpg",
        fallbackColor: "#f5f5f3",
        status: "active",
        translations: {
            en: {
                title: "Silk Slip Dress",
                tagline: "Atemporal silhouette in pure organic silk"
            },
            es: {
                title: "Vestido Combinación de Seda",
                tagline: "Silueta atemporal en pura seda orgánica"
            },
            zh: {
                title: "真丝吊带连衣裙",
                tagline: "纯天然有机丝打造的永恒廓形"
            }
        }
    },
    {
        id: "lace-bra-02",
        price: "€ 85,00",
        categories: ["lingeries"],
        image: "images/products/lace-bra.jpg",
        fallbackColor: "#ebdcd0",
        status: "active",
        translations: {
            en: {
                title: "Delicate Lace Bra",
                tagline: "Second skin feeling, crafted in Italy"
            },
            es: {
                title: "Sujetador de Encaje Delicado",
                tagline: "Sensación de segunda piel, confeccionado en Italia"
            },
            zh: {
                title: "精致蕾丝文胸",
                tagline: "宛如第二层肌肤，意大利工艺制造"
            }
        }
    }
];
