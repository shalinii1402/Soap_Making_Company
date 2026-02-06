// Product data with detailed information
const productData = {
    'Lavender Dreams': {
        description: 'Indulge in the calming embrace of our Lavender Dreams soap. Handcrafted with pure lavender essential oil and enriched with nourishing shea butter, this soap provides a luxurious lather that gently cleanses while moisturizing your skin.',
        benefits: [
            'Promotes relaxation and reduces stress',
            'Deeply moisturizes with shea butter',
            'Natural antibacterial properties',
            'Gentle enough for daily use',
            'Helps improve sleep quality'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lavender Essential Oil, Distilled Water, Sodium Hydroxide'
    },
    'Honey & Oat': {
        description: 'Experience gentle exfoliation with our Honey & Oat soap. Made with real honey and finely ground oats, this soap is perfect for sensitive skin, providing mild exfoliation while the honey naturally moisturizes and soothes.',
        benefits: [
            'Gentle exfoliation with natural oats',
            'Honey provides natural antibacterial benefits',
            'Soothes irritated and sensitive skin',
            'Rich in antioxidants',
            'Unscented - perfect for fragrance-sensitive skin'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Raw Honey, Colloidal Oatmeal, Distilled Water, Sodium Hydroxide'
    },
    'Activated Charcoal': {
        description: 'Detoxify your skin with our Activated Charcoal soap. Infused with tea tree oil and activated charcoal, this powerful cleanser draws out impurities, unclogs pores, and leaves your skin feeling refreshed and renewed.',
        benefits: [
            'Deep cleanses and detoxifies skin',
            'Draws out impurities and toxins',
            'Helps control excess oil',
            'Tea tree oil fights acne-causing bacteria',
            'Minimizes appearance of pores'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Activated Charcoal, Tea Tree Essential Oil, Distilled Water, Sodium Hydroxide'
    },
    'Rose Garden': {
        description: 'Luxuriate in the elegance of our Rose Garden soap. Crafted with real rose petals and nourishing coconut oil, this soap offers a rich, creamy lather and a delicate floral fragrance that transforms your daily routine into a spa-like experience.',
        benefits: [
            'Luxurious moisturization with coconut oil',
            'Rose petals provide gentle exfoliation',
            'Anti-aging properties',
            'Balances skin pH',
            'Beautiful natural fragrance'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Rose Petals, Rose Essential Oil, Distilled Water, Sodium Hydroxide'
    },
    'Eucalyptus Mint': {
        description: 'Awaken your senses with our Eucalyptus Mint soap. The refreshing combination of eucalyptus and peppermint essential oils creates an invigorating shower experience while providing natural antibacterial and anti-inflammatory benefits.',
        benefits: [
            'Refreshing and energizing aromatherapy',
            'Natural decongestant properties',
            'Soothes muscle aches and tension',
            'Antibacterial and antifungal',
            'Cooling sensation on skin'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Eucalyptus Essential Oil, Peppermint Essential Oil, Distilled Water, Sodium Hydroxide'
    },
    'Citrus Burst': {
        description: 'Start your day with a burst of energy! Our Citrus Burst soap combines sweet orange and zesty lemon essential oils to create an uplifting, vitamin-rich cleanser that brightens both your skin and your mood.',
        benefits: [
            'Energizing citrus aromatherapy',
            'Rich in Vitamin C for skin brightening',
            'Natural astringent properties',
            'Helps balance oily skin',
            'Uplifting and mood-boosting scent'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Sweet Orange Essential Oil, Lemon Essential Oil, Distilled Water, Sodium Hydroxide'
    },
    'Gentle Baby': {
        description: 'Specially formulated for the most delicate skin. Our Gentle Baby soap is unscented and made with ultra-mild ingredients, making it perfect for babies, children, and anyone with sensitive or easily irritated skin.',
        benefits: [
            'Ultra-gentle formula for sensitive skin',
            'Fragrance-free and hypoallergenic',
            'Extra moisturizing with added oils',
            'pH balanced for delicate skin',
            'Pediatrician recommended'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Sweet Almond Oil, Chamomile Extract, Distilled Water, Sodium Hydroxide'
    },
    'Coffee Scrub': {
        description: 'Energize and exfoliate with our Coffee Scrub soap. Made with real coffee grounds and a hint of vanilla, this soap provides excellent exfoliation to remove dead skin cells while the caffeine helps reduce the appearance of cellulite and puffiness.',
        benefits: [
            'Excellent exfoliation with coffee grounds',
            'Caffeine helps reduce cellulite appearance',
            'Improves circulation',
            'Reduces puffiness and inflammation',
            'Warm vanilla scent'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Ground Coffee, Vanilla Essential Oil, Distilled Water, Sodium Hydroxide'
    },
    'Peppermint Fresh': {
        description: 'Cool, refresh, and revitalize with our Peppermint Fresh soap. Infused with peppermint essential oil and soothing aloe vera, this soap provides a tingling, cooling sensation that awakens your senses and leaves your skin feeling refreshed.',
        benefits: [
            'Cooling and refreshing sensation',
            'Aloe vera soothes and hydrates',
            'Natural pain relief for sore muscles',
            'Helps relieve itchy skin',
            'Invigorating peppermint aroma'
        ],
        ingredients: 'Olive Oil, Coconut Oil, Peppermint Essential Oil, Aloe Vera Gel, Distilled Water, Sodium Hydroxide'
    }
};

// Filter and sort functionality
const categoryFilter = document.getElementById('category');
const scentFilter = document.getElementById('scent');
const sortSelect = document.getElementById('sort');
const productGrid = document.getElementById('productGrid');

function filterAndSortProducts() {
    const category = categoryFilter.value;
    const scent = scentFilter.value;
    const sortBy = sortSelect.value;

    const products = Array.from(productGrid.children);

    // Filter products
    products.forEach(product => {
        const productCategory = product.dataset.category;
        const productScent = product.dataset.scent;

        const categoryMatch = category === 'all' || productCategory === category;
        const scentMatch = scent === 'all' || productScent === scent;

        if (categoryMatch && scentMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    // Get visible products
    const visibleProducts = products.filter(p => p.style.display !== 'none');

    // Sort products
    visibleProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
            case 'price-high':
                return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
            case 'name':
                return a.dataset.name.localeCompare(b.dataset.name);
            default:
                return 0;
        }
    });

    // Reorder products in DOM
    visibleProducts.forEach(product => {
        productGrid.appendChild(product);
    });
}

// Add event listeners to filters
categoryFilter.addEventListener('change', filterAndSortProducts);
scentFilter.addEventListener('change', filterAndSortProducts);
sortSelect.addEventListener('change', filterAndSortProducts);

// Filter panel toggle functionality (Mobile/Tablet)
const filterToggleBtn = document.getElementById('filterToggleBtn');
const filterPanel = document.getElementById('filterPanel');
const filterPanelClose = document.getElementById('filterPanelClose');

function openFilterPanel() {
    filterPanel.classList.add('active');
    document.body.classList.add('filter-panel-open');
}

function closeFilterPanel() {
    filterPanel.classList.remove('active');
    document.body.classList.remove('filter-panel-open');
}

// Open filter panel when button is clicked
if (filterToggleBtn) {
    filterToggleBtn.addEventListener('click', openFilterPanel);
}

// Close filter panel when close button is clicked
if (filterPanelClose) {
    filterPanelClose.addEventListener('click', closeFilterPanel);
}

// Close filter panel when clicking on overlay (outside the panel)
document.addEventListener('click', (e) => {
    if (document.body.classList.contains('filter-panel-open')) {
        if (!filterPanel.contains(e.target) && !filterToggleBtn.contains(e.target)) {
            closeFilterPanel();
        }
    }
});

// Close filter panel when filter is changed (auto-close after selection)
if (filterPanel) {
    filterPanel.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', () => {
            // Only auto-close on mobile/tablet
            if (window.innerWidth <= 1024) {
                setTimeout(closeFilterPanel, 300);
            }
        });
    });
}

// Product modal functionality
const modal = document.getElementById('productModal');

// Open modal when clicking on product card (but not the button)
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn') && !e.target.closest('.btn')) {
            openProductModal(card);
        }
    });
});

function openProductModal(card) {
    const productName = card.querySelector('h3').textContent;
    const productImage = card.querySelector('.product-image img').src;
    const productPrice = card.querySelector('.price').textContent;
    const productStars = card.querySelector('.stars').textContent;
    const productReviews = card.querySelector('.reviews').textContent;

    const data = productData[productName];

    if (data) {
        document.getElementById('modalImage').src = productImage;
        document.getElementById('modalTitle').textContent = productName;
        document.getElementById('modalPrice').textContent = productPrice;
        document.getElementById('modalStars').textContent = productStars;
        document.getElementById('modalReviews').textContent = productReviews;
        document.getElementById('modalDescription').textContent = data.description;

        // Populate benefits
        const benefitsList = document.getElementById('modalBenefits');
        benefitsList.innerHTML = '';
        data.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });

        document.getElementById('modalIngredients').textContent = data.ingredients;

        modal.classList.add('active');
        document.body.classList.add('no-scroll');
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Add to cart functionality
function addToCart(button) {
    const card = button.closest('.product-card');
    const productName = card.querySelector('h3').textContent;
    const productPrice = card.querySelector('.price').textContent;

    showNotification(`${productName} added to cart!`);

    // Here you would typically add the product to a cart array or send to backend
    console.log('Added to cart:', { name: productName, price: productPrice });
}

function addToCartFromModal() {
    const productName = document.getElementById('modalTitle').textContent;
    const productPrice = document.getElementById('modalPrice').textContent;

    showNotification(`${productName} added to cart!`);
    closeModal();

    // Here you would typically add the product to a cart array or send to backend
    console.log('Added to cart:', { name: productName, price: productPrice });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--color-primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

console.log('Products page loaded successfully!');
