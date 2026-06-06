// products.js - Database Multilingua per La Libre

window.productsMaster = [
   {
       id: "amour-lace",
       title: "Amour Lace Blouse",
       price: "€ 135,00",
       category: "lingerie",
       categories: ["lingerie", "new-arrivals"],
       image: "images/amour-lace1.jpg",
       fallbackColor: "#f7f5f2",
       status: "active",
       translations: {
           en: { description: "Romantic silhouette crafted in delicate eyelash lace", tagline: "Delicate eyelash lace blouse" },
           es: { description: "Silueta romántica confeccionada en delicado encaje de pestañas", tagline: "Blusa de encaje delicado" },
           zh: { description: "精致睫毛蕾丝打造的浪漫廓形", tagline: "精致睫毛蕾丝衬衫" }
       }
   },
   {
       id: "eliah-dress",
       title: "Eliah Timeless Dress",
       price: "€ 195,00",
       category: "dresses",
       categories: ["dresses", "new arrivals"],
       image: "images/eliah-dress.jpg",
       fallbackColor: "#f2f0eb",
       status: "active",
       translations: {
           en: { description: "Atemporal flowing midi dress in organic washed silk", tagline: "Flowing midi dress" },
           es: { description: "Vestido midi fluido y atemporal en seda lavada orgánica", tagline: "Vestido midi fluido" },
           zh: { description: "有机水洗真丝面料打造的永恒飘逸中长连衣裙", tagline: "有机水洗真丝中长连衣裙" }
       }
   },
   {
       id: "grace-lace",
       title: "Grace Lace Triangle",
       price: "€ 75,00",
       category: "lingerie",
       categories: ["lingerie"],
       image: "images/grace-lace1.jpg",
       fallbackColor: "#ebdcd0",
       status: "active",
       translations: {
           en: { description: "Unlined second-skin bralette with raw edge finish", tagline: "Second-skin lace bralette" },
           es: { description: "Sujetador estilo bralette sin forro efecto segunda piel", tagline: "Bralette encaje" },
           zh: { description: "无衬垫第二层肌肤质感文胸", tagline: "蕾丝文胸" }
       }
   }
];
