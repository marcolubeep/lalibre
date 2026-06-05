// products.js - Database Multilingua per La Libre (Nomi in originale)

const productsMaster = [
   {
       id: "amour-lace",
       title: "Amour Lace Blouse",
       price: "€ 135,00",
       categories: ["lingerie", "new arrivals"],
       image: "images/amour-lace.jpg",
       fallbackColor: "#f7f5f2",
       status: "active",
       translations: {
           en: {
               description: "Romantic silhouette crafted in delicate eyelash lace"
           },
           es: {
               description: "Silueta romántica confeccionada en delicado encaje de pestañas"
           },
           zh: {
               description: "精致睫毛蕾丝打造的浪漫廓形"
           }
       }
   },
   {
       id: "eliah-dress",
       title: "Eliah Timeless Dress",
       price: "€ 195,00",
       categories: ["dresses", "new arrivals"],
       image: "images/eliah-dress.jpg",
       fallbackColor: "#f2f0eb",
       status: "active",
       translations: {
           en: {
               description: "Atemporal flowing midi dress in organic washed silk"
           },
           es: {
               description: "Vestido midi fluido y atemporal en seda lavada orgánica"
           },
           zh: {
               description: "有机水洗真丝面料打造的永恒飘逸中长连衣裙"
           }
       }
   },
   {
       id: "grace-lace",
       title: "Grace Lace Triangle",
       price: "€ 75,00",
       categories: ["lingerie"],
       image: "images/grace-lace.jpg",
       fallbackColor: "#ebdcd0",
       status: "active",
       translations: {
           en: {
               description: "Unlined second-skin bralette with raw edge finish"
           },
           es: {
               description: "Sujetador estilo bralette sin forro efecto segunda piel con acabado de corte vivo"
           },
           zh: {
               description: "无衬垫第二层肌肤质感文胸，采用毛边工艺处理"
           }
       }
   }
];
