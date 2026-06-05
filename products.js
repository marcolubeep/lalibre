// products.js - Database Multilingua per La Libre (Nomi in originale)

const productsMaster = [
   {
       id: "amour-lace",
       title: "Amour Lace Blouse",
       price: "€ 135,00",
       priceNum: 135,  // ← AGGIUNTO per ordinamento prezzo
       category: "lingerie",  // ← AGGIUNTO (categoria principale)
       categories: ["lingerie", "new arrivals"],
       image: "images/amour-lace.jpg",
       fallbackColor: "#f7f5f2",
       status: "active",
       description: "Romantic silhouette crafted in delicate eyelash lace",  // ← AGGIUNTO
       material: "Eyelash lace, 100% cotton lining",  // ← AGGIUNTO
       dimensions: "One size, EU 34-42",  // ← AGGIUNTO
       translations: {
           en: {
               description: "Romantic silhouette crafted in delicate eyelash lace",
               tagline: "Delicate eyelash lace blouse"
           },
           es: {
               description: "Silueta romántica confeccionada en delicado encaje de pestañas",
               tagline: "Blusa de encaje delicado"
           },
           zh: {
               description: "精致睫毛蕾丝打造的浪漫廓形",
               tagline: "精致睫毛蕾丝衬衫"
           }
       }
   },
   {
       id: "eliah-dress",
       title: "Eliah Timeless Dress",
       price: "€ 195,00",
       priceNum: 195,  // ← AGGIUNTO
       category: "dresses",  // ← AGGIUNTO
       categories: ["dresses", "new arrivals"],
       image: "images/eliah-dress.jpg",
       fallbackColor: "#f2f0eb",
       status: "active",
       description: "Atemporal flowing midi dress in organic washed silk",  // ← AGGIUNTO
       material: "Organic washed silk",  // ← AGGIUNTO
       dimensions: "XS, S, M, L",  // ← AGGIUNTO
       translations: {
           en: {
               description: "Atemporal flowing midi dress in organic washed silk",
               tagline: "Flowing midi dress in organic washed silk"
           },
           es: {
               description: "Vestido midi fluido y atemporal en seda lavada orgánica",
               tagline: "Vestido midi fluido en seda lavada"
           },
           zh: {
               description: "有机水洗真丝面料打造的永恒飘逸中长连衣裙",
               tagline: "有机水洗真丝中长连衣裙"
           }
       }
   },
   {
       id: "grace-lace",
       title: "Grace Lace Triangle",
       price: "€ 75,00",
       priceNum: 75,  // ← AGGIUNTO
       category: "lingerie",  // ← AGGIUNTO
       categories: ["lingerie"],
       image: "images/grace-lace.jpg",
       fallbackColor: "#ebdcd0",
       status: "active",
       description: "Unlined second-skin bralette with raw edge finish",  // ← AGGIUNTO
       material: "Delicate lace, elastic trim",  // ← AGGIUNTO
       dimensions: "XS, S, M, L",  // ← AGGIUNTO
       translations: {
           en: {
               description: "Unlined second-skin bralette with raw edge finish",
               tagline: "Second-skin lace bralette"
           },
           es: {
               description: "Sujetador estilo bralette sin forro efecto segunda piel con acabado de corte vivo",
               tagline: "Bralette encaje efecto segunda piel"
           },
           zh: {
               description: "无衬垫第二层肌肤质感文胸，采用毛边工艺处理",
               tagline: "第二层肌肤质感蕾丝文胸"
           }
       }
   }
];

// Per debug - controlla se il file è caricato correttamente
console.log('✅ products.js caricato. Prodotti:', productsMaster.length);
