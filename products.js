// IL TUO DATABASE PRODOTTI
const productsMaster = [
    {
        id: "eliah-maxi",
        title: "Eliah Maxi Dress",
        tagline: "Slow Collection in Black",
        price: "£71.00",
        image: "eliah-dress.jpg",
        fallbackColor: "#e2dedb",
        categories: ["dresses", "new-arrivals"], // Appare in entrambe le sezioni!
        status: "active" // active = visibile, hidden o archived = nascosto
    },
    {
        id: "grace-maxi",
        title: "The Grace Lace Maxi",
        tagline: "Slow Collection in White",
        price: "£110.00",
        image: "grace-lace.jpg",
        fallbackColor: "#f4f1ef",
        categories: ["dresses"],
        status: "active"
    },
    {
        id: "amour-bustier",
        title: "Amour Lace Bustier",
        tagline: "Delicate French Trim",
        price: "£85.00",
        image: "amour-lace.jpg",
        fallbackColor: "#eae5e2",
        categories: ["lingeries", "new-arrivals"], // Appare in entrambe le sezioni!
        status: "active"
    },
    {
        id: "soul-slip",
        title: "Free Soul Slip",
        tagline: "Sheer Silk Accents",
        price: "£95.00",
        image: "", 
        fallbackColor: "#2c2a29",
        categories: ["lingeries"],
        status: "hidden" // NASCOSTO: Non apparirà sul sito
    },
    {
        id: "lace-corset",
        title: "Slow Lace Corset",
        tagline: "Structured Delicate Lace",
        price: "£120.00",
        image: "",
        fallbackColor: "#fcfbfa",
        categories: ["lingeries"],
        status: "archived" // ARCHIVIATO: Non apparirà sul sito
    },
    {
        id: "noir-skin",
        title: "Noir Second Skin Gown",
        tagline: "Premium Intricate Floral Pattern",
        price: "£165.00",
        image: "",
        fallbackColor: "#111111",
        categories: ["dresses", "new-arrivals"],
        status: "active"
    }
];
