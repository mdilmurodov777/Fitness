/* ================= 1. COMPLETE PRODUCTS DATABASE (32 ITEMS) ================= */
const PRODUCTS = [
    // 1. GANTELLAR (7 items)
    {
        id: 1,
        name: "2 kg Neopren Gantel (Juftlik)",
        category: "gantellar",
        categoryLabel: "Gantellar",
        price: 180000,
        oldPrice: 220000,
        rating: 4.8,
        reviews: 64,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
        desc: "Sirpanmaydigan yumshoq neopren qoplamali 2 kg gantellar. Fitnes va aerobika mashqlari uchun ideal."
    },
    {
        id: 2,
        name: "5 kg Xromlangan Gantel",
        category: "gantellar",
        categoryLabel: "Gantellar",
        price: 340000,
        oldPrice: 400000,
        rating: 4.9,
        reviews: 82,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
        desc: "Ergonomik tutqichli, zanglamaydigan po'latdan yasalgan 5 kg professional gantel."
    },
    {
        id: 3,
        name: "10 kg Hex Rezina Gantel",
        category: "gantellar",
        categoryLabel: "Gantellar",
        price: 520000,
        oldPrice: 600000,
        rating: 4.9,
        reviews: 115,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=700&q=80",
        desc: "Olti burchakli shakli tufayli polda dumalab ketmaydi, zarbani yutuvchi qalin rezina qoplama."
    },
    {
        id: 4,
        name: "15 kg Pro Gantel",
        category: "gantellar",
        categoryLabel: "Gantellar",
        price: 750000,
        oldPrice: 880000,
        rating: 4.7,
        reviews: 49,
        bestseller: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=700&q=80",
        desc: "Kuch mashqlari va mushak massasini oshirish uchun mo'ljallangan og'ir vaznli 15 kg gantel."
    },
    {
        id: 5,
        name: "20 kg Heavy-Duty Gantel",
        category: "gantellar",
        categoryLabel: "Gantellar",
        price: 980000,
        oldPrice: null,
        rating: 4.9,
        reviews: 38,
        bestseller: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=700&q=80",
        desc: "Professional bodibilding va zal mashg'ulotlari uchun yuqori mustahkamlikdagi 20 kg gantel."
    },
    {
        id: 6,
        name: "Sozlanadigan Gantellar (2.5 - 24 kg)",
        category: "gantellar",
        categoryLabel: "Gantellar",
        price: 1850000,
        oldPrice: 2300000,
        rating: 5.0,
        reviews: 142,
        bestseller: true,
        isNew: true,
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=80",
        desc: "Birgina burash mexanizmi bilan vaznni 2.5 kg dan 24 kg gacha tez o'zgartirish imkoniyati."
    },
    {
        id: 7,
        name: "Professional Gantel To‘plami (50 kg)",
        category: "gantellar",
        categoryLabel: "Gantellar",
        price: 2650000,
        oldPrice: 3100000,
        rating: 4.9,
        reviews: 76,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
        desc: "Maxsus keysda keladigan, shtanga ulagichiga ega 50 kg li universal quyma temir to'plam."
    },

    // 2. YUGURISH YO'LAKCHALARI (5 items)
    {
        id: 8,
        name: "Elektron Yugurish Yo‘lakchasi X5",
        category: "treadmill",
        categoryLabel: "Yugurish yo‘lakchalari",
        price: 5400000,
        oldPrice: 6500000,
        rating: 4.9,
        reviews: 93,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=700&q=80",
        desc: "LED displey, puls o'lchagich, Bluetooth dinamik va 12 ta avtomatik mashq dasturiga ega."
    },
    {
        id: 9,
        name: "Professional Treadmill Pro-900",
        category: "treadmill",
        categoryLabel: "Yugurish yo‘lakchalari",
        price: 12800000,
        oldPrice: 14500000,
        rating: 5.0,
        reviews: 41,
        bestseller: true,
        isNew: true,
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80",
        desc: "Fitnes klublar uchun 4.0 ot kuchiga ega quvvatli motor, 180 kg gacha vazn ko'tarish qobiliyati."
    },
    {
        id: 10,
        name: "Buklanadigan Yugurish Yo‘lakchasi SlimWalk",
        category: "treadmill",
        categoryLabel: "Yugurish yo‘lakchalari",
        price: 3900000,
        oldPrice: 4600000,
        rating: 4.8,
        reviews: 108,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&w=700&q=80",
        desc: "Kvartira uchun ixcham dizayn, yig'ilganda krovat ostiga sig'adi, masofadan boshqarish pulti bor."
    },
    {
        id: 11,
        name: "Tez Yugurish Uchun Sport Yo‘lakchasi TurboRun",
        category: "treadmill",
        categoryLabel: "Yugurish yo‘lakchalari",
        price: 7200000,
        oldPrice: null,
        rating: 4.8,
        reviews: 34,
        bestseller: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
        desc: "22 km/soat maksimal tezlik va 15 darajagacha avtomatik ko'tarilish burchagi."
    },
    {
        id: 12,
        name: "Uy Sharoitidagi Yugurish Yo‘lakchasi HomeFit",
        category: "treadmill",
        categoryLabel: "Yugurish yo‘lakchalari",
        price: 4450000,
        oldPrice: 5100000,
        rating: 4.7,
        reviews: 67,
        bestseller: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80",
        desc: "Tizzalarni himoya qiluvchi 6 qavatli amortizatsiya tizimi va shovqinsiz dvigatel."
    },

    // 3. TURNIKLAR (5 items)
    {
        id: 13,
        name: "Eshikka O‘rnatiladigan Turnik DoorGym",
        category: "turniklar",
        categoryLabel: "Turniklar",
        price: 240000,
        oldPrice: 300000,
        rating: 4.7,
        reviews: 154,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=700&q=80",
        desc: "Mix va parmasiz eshik romiga mustahkam o'rnatiladi. 130 kg gacha vaznga chidamli."
    },
    {
        id: 14,
        name: "Devorga O‘rnatiladigan Turnik IronBar",
        category: "turniklar",
        categoryLabel: "Turniklar",
        price: 420000,
        oldPrice: 500000,
        rating: 4.9,
        reviews: 89,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=700&q=80",
        desc: "Qalin po'lat profil, keng va tor ushlash uchun neopren tutqichlar, anker boltlar to'plamda."
    },
    {
        id: 15,
        name: "Shiftga O‘rnatiladigan Turnik CeilingPro",
        category: "turniklar",
        categoryLabel: "Turniklar",
        price: 480000,
        oldPrice: null,
        rating: 4.8,
        reviews: 45,
        bestseller: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=700&q=80",
        desc: "Shiftga mahkamlanadigan professional konstruksiya, boks qopi ilish uchun maxsus halqasi bor."
    },
    {
        id: 16,
        name: "Professional Ko‘p Funksiyali Turnik 4-in-1",
        category: "turniklar",
        categoryLabel: "Turniklar",
        price: 790000,
        oldPrice: 950000,
        rating: 5.0,
        reviews: 121,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=700&q=80",
        desc: "Turnik, brus, press va parallel ushlash funksiyalarini o'zida jamlagan universal trenajyor."
    },
    {
        id: 17,
        name: "Turnik va Brus Kombinatsiyasi PowerTower",
        category: "turniklar",
        categoryLabel: "Turniklar",
        price: 1650000,
        oldPrice: 1950000,
        rating: 4.9,
        reviews: 63,
        bestseller: true,
        isNew: true,
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=700&q=80",
        desc: "Devorga teshik ochmasdan polda turuvchi mustahkam stansiya. 200 kg gacha yuk ko'taradi."
    },

    // 4. MUSHAKLARNI RIVOJLANTIRISH JIHOZLARI (8 items)
    {
        id: 18,
        name: "Sozlanadigan Bench Press Skameykasi",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 1450000,
        oldPrice: 1750000,
        rating: 4.9,
        reviews: 78,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=700&q=80",
        desc: "7 xil burchak ostida sozlanuvchi suyanchiq, yumshoq eko-charm qoplama va po'lat karkas."
    },
    {
        id: 19,
        name: "Olimpiya Shtangasi (20 kg, 220 sm)",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 1950000,
        oldPrice: 2250000,
        rating: 4.9,
        reviews: 52,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=700&q=80",
        desc: "Podshipnikli aylanuvchi uchlar, 300 kg gacha yuk ko'taruvchi xromlangan olimpiya grifi."
    },
    {
        id: 20,
        name: "EZ-Egri Barbell Shtanga To‘plami",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 1150000,
        oldPrice: null,
        rating: 4.8,
        reviews: 44,
        bestseller: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=700&q=80",
        desc: "Bitseps va tritseps mashqlarida bilaklarga tushadigan yukni kamaytiruvchi maxsus barbell."
    },
    {
        id: 21,
        name: "Kettlebell Quyma Temir (16 kg)",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 490000,
        oldPrice: 560000,
        rating: 4.9,
        reviews: 91,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&w=700&q=80",
        desc: "Crossfit va funksional mashg'ulotlar uchun silliq tutqichli klassik 16 kg girya."
    },
    {
        id: 22,
        name: "Yog‘och Gimnastika Halqalari Pro",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 320000,
        oldPrice: 380000,
        rating: 4.8,
        reviews: 61,
        bestseller: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=700&q=80",
        desc: "Tabiiy qayin yog'ochidan yasalgan halqalar va 4.5 metrli raqamlangan mustahkam tasmalar."
    },
    {
        id: 23,
        name: "Ko‘p Funksiyali Kuch Trenajyori MultiGym",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 8900000,
        oldPrice: 10500000,
        rating: 5.0,
        reviews: 29,
        bestseller: true,
        isNew: true,
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=700&q=80",
        desc: "Barcha mushak guruhlarini mashq qildiruvchi 75 kg tosh blokli uy va zal trenajyori."
    },
    {
        id: 24,
        name: "Press Trenajyori AbRoller Pro",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 210000,
        oldPrice: 260000,
        rating: 4.7,
        reviews: 112,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
        desc: "Qaytaruvchi prujinali mexanizm va tizza osti gilamchasi bilan jihozlangan press roligi."
    },
    {
        id: 25,
        name: "Rezina Ekspanderlar To‘plami (5 daraja)",
        category: "mushaklar",
        categoryLabel: "Mushaklar uchun jihozlar",
        price: 280000,
        oldPrice: 350000,
        rating: 4.8,
        reviews: 135,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=700&q=80",
        desc: "5 kg dan 45 kg gacha qarshilik kuchiga ega 5 ta espander, tutqichlar va eshik mahkamlagichi."
    },

    // 5. QO'SHIMCHA MAHSULOTLAR (7 items)
    {
        id: 26,
        name: "Sport Gilami Yoga & Fitness Mat (10 mm)",
        category: "qoshimcha",
        categoryLabel: "Qo‘shimcha mahsulotlar",
        price: 190000,
        oldPrice: 240000,
        rating: 4.9,
        reviews: 148,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=700&q=80",
        desc: "Ekologik toza NBR material, sirpanmaydi, o'rab olib yurish uchun maxsus tasmasi mavjud."
    },
    {
        id: 27,
        name: "Professional Sport Qo‘lqoplari GripPro",
        category: "qoshimcha",
        categoryLabel: "Qo‘shimcha mahsulotlar",
        price: 135000,
        oldPrice: 170000,
        rating: 4.8,
        reviews: 97,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&w=700&q=80",
        desc: "Bilakni fiksatsiya qiluvchi tasma va kaft qismida yumshoq himoya yostiqchalari bor."
    },
    {
        id: 28,
        name: "Og‘ir Atletika Sport Kamari (Charm)",
        category: "qoshimcha",
        categoryLabel: "Qo‘shimcha mahsulotlar",
        price: 360000,
        oldPrice: 430000,
        rating: 4.9,
        reviews: 58,
        bestseller: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80",
        desc: "Bel umurtqasini og'ir shtanga va pritasedaniya mashqlarida ishonchli himoya qiladi."
    },
    {
        id: 29,
        name: "Proteinni Saqlash Idishi SmartShaker (700 ml)",
        category: "qoshimcha",
        categoryLabel: "Qo‘shimcha mahsulotlar",
        price: 95000,
        oldPrice: 120000,
        rating: 4.8,
        reviews: 176,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=700&q=80",
        desc: "BPA-free xavfsiz plastik, zanglamaydigan aralashtiruvchi sharik va qo'shimcha kukun bo'limi."
    },
    {
        id: 30,
        name: "Katta Hajmli Sport Sumkasi GymBag 45L",
        category: "qoshimcha",
        categoryLabel: "Qo‘shimcha mahsulotlar",
        price: 310000,
        oldPrice: 390000,
        rating: 4.9,
        reviews: 84,
        bestseller: true,
        isNew: true,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
        desc: "Suv o'tkazmaydigan mato, krossovkalar uchun alohida havo aylanuvchi bo'lmaga ega."
    },
    {
        id: 31,
        name: "Massaj Roligi Foam Roller 3D",
        category: "qoshimcha",
        categoryLabel: "Qo‘shimcha mahsulotlar",
        price: 165000,
        oldPrice: null,
        rating: 4.7,
        reviews: 69,
        bestseller: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?auto=format&fit=crop&w=700&q=80",
        desc: "Mashg'ulotdan keyin mushaklardagi charchoq va taranglikni tez bartaraf etuvchi 3D rolik."
    },
    {
        id: 32,
        name: "Fitness Rezinalari Mini-Bands (3 dona)",
        category: "qoshimcha",
        categoryLabel: "Qo‘shimcha mahsulotlar",
        price: 125000,
        oldPrice: 160000,
        rating: 4.9,
        reviews: 192,
        bestseller: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=700&q=80",
        desc: "Matoli mustahkam fitnes rezinalari: yengil, o'rta va og'ir yuklama darajalari."
    }
];

/* ================= 2. APPLICATION STATE ================= */
let state = {
    cart: JSON.parse(localStorage.getItem('fs_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('fs_wishlist')) || [],
    user: JSON.parse(localStorage.getItem('fs_user')) || null,
    orders: JSON.parse(localStorage.getItem('fs_orders')) || [],
    theme: localStorage.getItem('fs_theme') || 'dark',
    filterCategory: 'all',
    searchQuery: '',
    maxPrice: 15000000,
    sortBy: 'default',
    directBuyItem: null,
    carouselIndex: 0
};

/* ================= 3. INITIALIZATION & INTRO ================= */
document.addEventListener('DOMContentLoaded', () => {
    // Apply Saved Theme
    applyTheme(state.theme);

    // Intro Preloader Dismiss
    const introLoader = document.getElementById('intro-loader');
    setTimeout(() => {
        introLoader.classList.add('fade-out');
    }, 1850);

    // Render Initial Views
    renderCarousel();
    renderCatalog();
    renderDiscountsSection();
    updateBadges();
    updateProfileUI();
    setupEventListeners();
    startCarouselAutoPlay();
});

/* ================= 4. HELPER FUNCTIONS ================= */
function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

function calcDiscountPercent(price, oldPrice) {
    if (!oldPrice || oldPrice <= price) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function showToast(message, icon = "fa-circle-check") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--primary);"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function saveState() {
    localStorage.setItem('fs_cart', JSON.stringify(state.cart));
    localStorage.setItem('fs_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('fs_user', JSON.stringify(state.user));
    localStorage.setItem('fs_orders', JSON.stringify(state.orders));
    updateBadges();
}

function updateBadges() {
    const totalCartQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-badge').textContent = totalCartQty;
    document.getElementById('drawer-cart-count').textContent = totalCartQty;
    document.getElementById('wishlist-badge').textContent = state.wishlist.length;
    document.getElementById('drawer-wish-count').textContent = state.wishlist.length;
}

/* ================= 5. PRODUCT CARD GENERATOR ================= */
function createProductCardHTML(product) {
    const discount = calcDiscountPercent(product.price, product.oldPrice);
    const isWished = state.wishlist.includes(product.id);

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-img-box">
                ${discount > 0 ? `<span class="discount-pill">-${discount}%</span>` : (product.isNew ? `<span class="new-pill">YANGI</span>` : '')}
                <div class="card-top-actions">
                    <button class="card-action-icon ${isWished ? 'wish-active' : ''}" onclick="toggleWishlist(${product.id})" title="Sevimlilarga qo'shish">
                        <i class="fa-${isWished ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                    <button class="card-action-icon" onclick="openProductModal(${product.id})" title="Batafsil ko'rish">
                        <i class="fa-regular fa-eye"></i>
                    </button>
                </div>
                <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openProductModal(${product.id})" style="cursor:pointer;">
            </div>
            <div class="product-body">
                <span class="product-cat-label">${product.categoryLabel}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i> ${product.rating} <span>(${product.reviews} sharh)</span>
                </div>
                <p class="product-desc">${product.desc}</p>
                <div class="product-price-box">
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                    <span class="current-price">${formatPrice(product.price)}</span>
                </div>
                <div class="product-card-btns">
                    <button class="btn-cart-add" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i> Savatchaga
                    </button>
                    <button class="btn-buy-now" onclick="openDirectBuy(${product.id})">
                        Sotib olish
                    </button>
                </div>
            </div>
        </div>
    `;
}

/* ================= 6. CATALOG FILTERING & RENDERING ================= */
function renderCatalog() {
    const grid = document.getElementById('products-grid');
    const noMsg = document.getElementById('no-products-msg');
    const countEl = document.getElementById('total-products-count');

    let filtered = PRODUCTS.filter(p => {
        const matchCat = state.filterCategory === 'all' || p.category === state.filterCategory;
        const matchPrice = p.price <= state.maxPrice;
        const q = state.searchQuery.toLowerCase().trim();
        const matchSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q);
        return matchCat && matchPrice && matchSearch;
    });

    // Sorting
    if (state.sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'bestseller') {
        filtered.sort((a, b) => (b.bestseller === a.bestseller ? 0 : b.bestseller ? 1 : -1));
    } else if (state.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'discount') {
        filtered = filtered.filter(p => p.oldPrice && p.oldPrice > p.price);
    }

    countEl.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noMsg.classList.remove('hidden');
    } else {
        noMsg.classList.add('hidden');
        grid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
}

function renderDiscountsSection() {
    const discountGrid = document.getElementById('discounts-grid');
    const discounted = PRODUCTS.filter(p => p.oldPrice && p.oldPrice > p.price).slice(0, 8);
    discountGrid.innerHTML = discounted.map(createProductCardHTML).join('');
}

/* ================= 7. CAROUSEL / SLIDER (BUTTONS, AUTO, TOUCH) ================= */
let carouselTimer;
const featuredProducts = PRODUCTS.filter(p => p.bestseller || p.isNew).slice(0, 10);

function renderCarousel() {
    const track = document.getElementById('carousel-track');
    track.innerHTML = featuredProducts.map(p => `
        <div class="carousel-slide">
            ${createProductCardHTML(p)}
        </div>
    `).join('');
}

function getVisibleSlidesCount() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1180) return 3;
    return 4;
}

function moveCarousel(direction) {
    const track = document.getElementById('carousel-track');
    const visible = getVisibleSlidesCount();
    const maxIndex = featuredProducts.length - visible;

    state.carouselIndex += direction;
    if (state.carouselIndex < 0) state.carouselIndex = maxIndex;
    if (state.carouselIndex > maxIndex) state.carouselIndex = 0;

    const slideWidthPercent = 100 / visible;
    track.style.transform = `translateX(-${state.carouselIndex * slideWidthPercent}%)`;
}

function startCarouselAutoPlay() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => moveCarousel(1), 4000);
}

/* ================= 8. CART & WISHLIST FUNCTIONS ================= */
function addToCart(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        state.cart.push({ id: productId, qty });
    }

    saveState();
    renderCartDrawer();
    showToast(`"${product.name}" savatchaga qo‘shildi!`, "fa-cart-shopping");
}

function changeCartQty(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
    }
    saveState();
    renderCartDrawer();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveState();
    renderCartDrawer();
    showToast("Mahsulot savatchadan o‘chirildi", "fa-trash");
}

function renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');

    if (state.cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">Savatchangiz hozircha bo‘sh.</p>`;
        totalEl.textContent = "0 so‘m";
        return;
    }

    let totalSum = 0;
    container.innerHTML = state.cart.map(item => {
        const p = PRODUCTS.find(prod => prod.id === item.id);
        if (!p) return '';
        totalSum += p.price * item.qty;

        return `
            <div class="drawer-item">
                <img src="${p.image}" alt="${p.name}">
                <div class="drawer-item-info">
                    <h4>${p.name}</h4>
                    <span class="drawer-item-price">${formatPrice(p.price)}</span>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeCartQty(${p.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeCartQty(${p.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${p.id})" title="O'chirish">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');

    totalEl.textContent = formatPrice(totalSum);
}

function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    const p = PRODUCTS.find(prod => prod.id === productId);

    if (idx === -1) {
        state.wishlist.push(productId);
        showToast(`"${p.name}" sevimlilarga qo‘shildi ❤️`, "fa-heart");
    } else {
        state.wishlist.splice(idx, 1);
        showToast(`"${p.name}" sevimlilardan olib tashlandi`, "fa-heart-crack");
    }

    saveState();
    renderCatalog();
    renderDiscountsSection();
    renderCarousel();
    renderWishlistDrawer();
    updateProfileUI();
}

function renderWishlistDrawer() {
    const container = document.getElementById('wishlist-items-container');
    if (state.wishlist.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">Sevimlilar ro‘yxati bo‘sh.</p>`;
        return;
    }

    container.innerHTML = state.wishlist.map(id => {
        const p = PRODUCTS.find(prod => prod.id === id);
        if (!p) return '';
        return `
            <div class="drawer-item">
                <img src="${p.image}" alt="${p.name}">
                <div class="drawer-item-info">
                    <h4>${p.name}</h4>
                    <span class="drawer-item-price">${formatPrice(p.price)}</span>
                    <div style="margin-top:0.5rem;">
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Savatchaga</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="toggleWishlist(${p.id})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
    }).join('');
}

/* ================= 9. MODALS: PRODUCT DETAILS & CHECKOUT ================= */
function openProductModal(productId) {
    const p = PRODUCTS.find(prod => prod.id === productId);
    if (!p) return;

    const modal = document.getElementById('product-modal');
    const content = document.getElementById('product-modal-content');
    const discount = calcDiscountPercent(p.price, p.oldPrice);

    content.innerHTML = `
        <div>
            <img src="${p.image}" alt="${p.name}">
        </div>
        <div>
            <span class="product-cat-label">${p.categoryLabel}</span>
            <h2 style="margin: 0.4rem 0 0.6rem; font-size:1.5rem;">${p.name}</h2>
            <div class="product-rating" style="margin-bottom:1rem;">
                <i class="fa-solid fa-star"></i> ${p.rating} <span>(${p.reviews} mijoz bahosi)</span>
            </div>
            <p style="color:var(--text-muted); margin-bottom:1.25rem; font-size:0.95rem;">${p.desc}</p>
            <div style="margin-bottom:1.5rem;">
                ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)} (-${discount}%)</span>` : ''}
                <span style="font-size:1.6rem; font-weight:800; color:var(--primary);">${formatPrice(p.price)}</span>
            </div>
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                <button class="btn btn-outline" onclick="addToCart(${p.id}); closeModal('product-modal');">
                    <i class="fa-solid fa-cart-plus"></i> Savatchaga qo‘shish
                </button>
                <button class="btn btn-primary" onclick="closeModal('product-modal'); openDirectBuy(${p.id});">
                    Hozir sotib olish
                </button>
            </div>
        </div>
    `;

    modal.classList.add('open');
}

function openDirectBuy(productId) {
    const p = PRODUCTS.find(prod => prod.id === productId);
    if (!p) return;

    state.directBuyItem = { id: p.id, name: p.name, qty: 1, price: p.price };
    openCheckoutModal();
}

function openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    const formView = document.getElementById('checkout-form-view');
    const successView = document.getElementById('order-success-view');
    const summaryBox = document.getElementById('order-summary-box');

    formView.classList.remove('hidden');
    successView.classList.add('hidden');

    // Pre-fill user info if logged in
    if (state.user) {
        document.getElementById('order-name').value = state.user.name || '';
        document.getElementById('order-phone').value = state.user.phone || '';
    }

    if (state.directBuyItem) {
        const item = state.directBuyItem;
        summaryBox.innerHTML = `
            <p><strong>Mahsulot:</strong> ${item.name}</p>
            <p><strong>Soni:</strong> ${item.qty} dona</p>
            <p style="margin-top:0.4rem; color:var(--primary); font-size:1.05rem;"><strong>Umumiy summa: ${formatPrice(item.price * item.qty)}</strong></p>
        `;
    } else {
        if (state.cart.length === 0) {
            showToast("Savatchangiz bo‘sh!", "fa-circle-exclamation");
            return;
        }
        let total = 0;
        let totalQty = 0;
        const names = state.cart.map(c => {
            const p = PRODUCTS.find(prod => prod.id === c.id);
            total += p.price * c.qty;
            totalQty += c.qty;
            return `${p.name} (${c.qty}x)`;
        }).join(', ');

        summaryBox.innerHTML = `
            <p><strong>Mahsulotlar:</strong> ${names}</p>
            <p><strong>Jami soni:</strong> ${totalQty} dona</p>
            <p style="margin-top:0.4rem; color:var(--primary); font-size:1.05rem;"><strong>Umumiy summa: ${formatPrice(total)}</strong></p>
        `;
    }

    modal.classList.add('open');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('open');
}

/* ================= 10. PROFILE & DEMO AUTH ================= */
function updateProfileUI() {
    const authView = document.getElementById('auth-view');
    const dashView = document.getElementById('dashboard-view');

    if (!state.user) {
        authView.classList.remove('hidden');
        dashView.classList.add('hidden');
        return;
    }

    authView.classList.add('hidden');
    dashView.classList.remove('hidden');

    document.getElementById('user-display-name').textContent = state.user.name;
    document.getElementById('user-display-phone').textContent = state.user.phone;
    document.getElementById('user-orders-count').textContent = state.orders.length;
    document.getElementById('user-favs-count').textContent = state.wishlist.length;

    const ordersList = document.getElementById('profile-orders-list');
    if (state.orders.length === 0) {
        ordersList.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Hali buyurtmalar mavjud emas.</p>`;
    } else {
        ordersList.innerHTML = state.orders.map(o => `
            <div class="history-card">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
                    <strong>Buyurtma #${o.id}</strong>
                    <span style="color:var(--accent-green); font-weight:700;">Tasdiqlangan</span>
                </div>
                <p style="color:var(--text-muted);">${o.items}</p>
                <p style="margin-top:0.3rem;"><strong>Summa:</strong> ${formatPrice(o.total)} | <small>${o.date}</small></p>
            </div>
        `).join('');
    }

    const favsList = document.getElementById('profile-favs-list');
    if (state.wishlist.length === 0) {
        favsList.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Sevimli mahsulotlar yo‘q.</p>`;
    } else {
        favsList.innerHTML = state.wishlist.map(id => {
            const p = PRODUCTS.find(prod => prod.id === id);
            return p ? `<div class="history-card"><strong>${p.name}</strong> — <span style="color:var(--primary);">${formatPrice(p.price)}</span></div>` : '';
        }).join('');
    }
}

/* ================= 11. THEME SWITCHER ================= */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('theme-icon');
    if (theme === 'light') {
        icon.className = 'fa-solid fa-moon';
    } else {
        icon.className = 'fa-solid fa-sun';
    }
    localStorage.setItem('fs_theme', theme);
}

/* ================= 12. ALL EVENT LISTENERS ================= */
function setupEventListeners() {
    // Theme Toggle
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(state.theme);
        showToast(state.theme === 'dark' ? "Tun rejimi yoqildi 🌙" : "Kun rejimi yoqildi ☀️", "fa-circle-half-stroke");
    });

    // Mobile Menu Toggle
    const navMenu = document.getElementById('nav-menu');
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Navbar Category Filter Links
    document.querySelectorAll('[data-filter-link]').forEach(link => {
        link.addEventListener('click', () => {
            const cat = link.getAttribute('data-filter-link');
            state.filterCategory = cat;
            syncCategoryTabs(cat);
            renderCatalog();
            navMenu.classList.remove('open');
        });
    });

    // Category Showcase Cards
    document.querySelectorAll('[data-cat-select]').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-cat-select');
            state.filterCategory = cat;
            syncCategoryTabs(cat);
            renderCatalog();
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Catalog Category Tabs
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const cat = tab.getAttribute('data-category');
            state.filterCategory = cat;
            syncCategoryTabs(cat);
            renderCatalog();
        });
    });

    function syncCategoryTabs(activeCat) {
        document.querySelectorAll('.cat-tab').forEach(t => {
            t.classList.toggle('active', t.getAttribute('data-category') === activeCat);
        });
    }

    // View All Discounts Button
    document.getElementById('view-all-discounts-btn').addEventListener('click', () => {
        state.filterCategory = 'all';
        state.sortBy = 'discount';
        document.getElementById('sort-select').value = 'discount';
        syncCategoryTabs('all');
        renderCatalog();
    });

    // Top Navbar Search Toggle & Live Search
    const searchOverlay = document.getElementById('search-bar-overlay');
    const globalSearchInput = document.getElementById('global-search-input');
    const catalogSearchInput = document.getElementById('catalog-search-input');

    document.getElementById('search-toggle-btn').addEventListener('click', () => {
        searchOverlay.classList.toggle('open');
        if (searchOverlay.classList.contains('open')) {
            globalSearchInput.focus();
        }
    });

    document.getElementById('search-clear-btn').addEventListener('click', () => {
        globalSearchInput.value = '';
        catalogSearchInput.value = '';
        state.searchQuery = '';
        renderCatalog();
        searchOverlay.classList.remove('open');
    });

    function handleSearchInput(val) {
        state.searchQuery = val;
        globalSearchInput.value = val;
        catalogSearchInput.value = val;
        renderCatalog();
    }

    globalSearchInput.addEventListener('input', (e) => {
        handleSearchInput(e.target.value);
        if (e.target.value.trim().length > 0) {
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    catalogSearchInput.addEventListener('input', (e) => {
        handleSearchInput(e.target.value);
    });

    // Price Range Slider
    const priceRange = document.getElementById('max-price-range');
    const priceVal = document.getElementById('price-range-val');
    priceRange.addEventListener('input', (e) => {
        state.maxPrice = Number(e.target.value);
        priceVal.textContent = state.maxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        renderCatalog();
    });

    // Sort Select
    document.getElementById('sort-select').addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderCatalog();
    });

    // Reset Filters
    document.getElementById('reset-filters-btn').addEventListener('click', () => {
        state.filterCategory = 'all';
        state.searchQuery = '';
        state.maxPrice = 15000000;
        state.sortBy = 'default';
        globalSearchInput.value = '';
        catalogSearchInput.value = '';
        priceRange.value = 15000000;
        priceVal.textContent = "15 000 000";
        document.getElementById('sort-select').value = 'default';
        syncCategoryTabs('all');
        renderCatalog();
    });

    // Carousel Buttons & Touch Swipe
    document.getElementById('carousel-prev').addEventListener('click', () => {
        moveCarousel(-1);
        startCarouselAutoPlay();
    });

    document.getElementById('carousel-next').addEventListener('click', () => {
        moveCarousel(1);
        startCarouselAutoPlay();
    });

    const carouselWrapper = document.getElementById('carousel-wrapper');
    let touchStartX = 0;
    carouselWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselWrapper.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 40) moveCarousel(1);
        if (touchEndX - touchStartX > 40) moveCarousel(-1);
        startCarouselAutoPlay();
    }, { passive: true });

    window.addEventListener('resize', () => {
        state.carouselIndex = 0;
        moveCarousel(0);
    });

    // Drawers Open/Close
    document.getElementById('cart-open-btn').addEventListener('click', () => {
        renderCartDrawer();
        document.getElementById('cart-drawer').classList.add('open');
    });

    document.getElementById('wishlist-open-btn').addEventListener('click', () => {
        renderWishlistDrawer();
        document.getElementById('wishlist-drawer').classList.add('open');
    });

    document.getElementById('profile-open-btn').addEventListener('click', () => {
        updateProfileUI();
        document.getElementById('profile-modal').classList.add('open');
    });

    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.getAttribute('data-close'));
        });
    });

    // Checkout from Cart
    document.getElementById('checkout-from-cart-btn').addEventListener('click', () => {
        state.directBuyItem = null;
        closeModal('cart-drawer');
        openCheckoutModal();
    });

    // Submit Order Form
    document.getElementById('order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('order-name').value.trim();
        const phone = document.getElementById('order-phone').value.trim();
        const address = document.getElementById('order-address').value.trim();

        let itemsDesc = "";
        let totalAmount = 0;

        if (state.directBuyItem) {
            itemsDesc = `${state.directBuyItem.name} (1 dona)`;
            totalAmount = state.directBuyItem.price;
            state.directBuyItem = null;
        } else {
            itemsDesc = state.cart.map(c => {
                const p = PRODUCTS.find(prod => prod.id === c.id);
                totalAmount += p.price * c.qty;
                return `${p.name} (${c.qty} dona)`;
            }).join(', ');
            state.cart = [];
            saveState();
            renderCartDrawer();
        }

        const newOrder = {
            id: Math.floor(100000 + Math.random() * 900000),
            customer: name,
            phone,
            address,
            items: itemsDesc,
            total: totalAmount,
            date: new Date().toLocaleDateString('uz-UZ')
        };

        state.orders.unshift(newOrder);
        saveState();
        updateProfileUI();

        document.getElementById('checkout-form-view').classList.add('hidden');
        document.getElementById('order-success-view').classList.remove('hidden');
        showToast("Buyurtmangiz muvaffaqiyatli rasmiylashtirildi!");
    });

    // Profile Auth Tabs & Forms
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const isLogin = tab.getAttribute('data-auth') === 'login';
            document.getElementById('login-form').classList.toggle('hidden', !isLogin);
            document.getElementById('register-form').classList.toggle('hidden', isLogin);
        });
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value.trim();
        const phone = document.getElementById('reg-phone').value.trim();
        state.user = { name, phone };
        saveState();
        updateProfileUI();
        showToast(`Xush kelibsiz, ${name}!`);
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('login-phone').value.trim();
        state.user = { name: "Sportchi Mijoz", phone };
        saveState();
        updateProfileUI();
        showToast("Tizimga muvaffaqiyatli kirdingiz!");
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        state.user = null;
        saveState();
        updateProfileUI();
        showToast("Tizimdan chiqdingiz", "fa-right-from-bracket");
    });

    // Profile Dashboard Sub-tabs
    document.querySelectorAll('.p-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.getAttribute('data-ptab');
            document.getElementById('profile-orders-list').classList.toggle('hidden', target !== 'orders');
            document.getElementById('profile-favs-list').classList.toggle('hidden', target !== 'favs');
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.classList.toggle('active');
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 450) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}