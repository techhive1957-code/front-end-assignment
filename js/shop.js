const products = [
    {
        "id": "g305",
        "type": "mouse",
        "category": "mouse",
        "brand": "Logitech G",
        "model": "G305 Lightspeed",
        "name": "Logitech G G305 Lightspeed",
        "price": 234.95,
        "images": ["img/g305-1.jpg", "img/g305-2.jpg", "img/g305-3.jpg"],
        "dimensions": { "w": 62, "l": 116, "h": 38 },
        "weight": 99,
        "grip": ["claw", "finger"],
        "handSizeFit": "small",
        "sensor": "HERO 12K",
        "dpi": "200–12000",
        "switch": "Mechanical",
        "polling": "1000 Hz",
        "connectivity": "2.4G",
        "battery": "250h",
        "lighting": "none",
        "layout": null,
        "switchType": null,
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 4,
        "features": ["Onboard memory", "6 buttons", "Low-latency wireless"],
        "newproduct": false,
        "bestseller": true
    },
    {
        "id": "viper-mini",
        "type": "mouse",
        "category": "mouse",
        "brand": "Razer",
        "model": "Viper Mini",
        "name": "Razer Viper Mini",
        "price": 187.95,
        "images": ["img/viper-mini-1.jpg", "img/viper-mini-2.jpg"],
        "dimensions": { "w": 61, "l": 118, "h": 38 },
        "weight": 61,
        "grip": ["claw", "finger"],
        "handSizeFit": "small",
        "sensor": "PixArt PMW3359",
        "dpi": "200–8500",
        "switch": "Optical",
        "polling": "1000 Hz",
        "connectivity": "wired",
        "battery": null,
        "lighting": "RGB",
        "layout": null,
        "switchType": null,
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 5,
        "features": ["Ultra-light 61g", "Speedflex cable", "PTFE feet"],
        "newproduct": false,
        "bestseller": false
    },
    {
        "id": "pulsar-xlitev2-l",
        "type": "mouse",
        "category": "mouse",
        "brand": "Pulsar",
        "model": "Xlite V2 Large Wireless",
        "name": "Pulsar Xlite V2 Large Wireless",
        "price": 422.95,
        "images": ["img/pulsar-xlitev2l-1.jpg", "img/pulsar-xlitev2l-2.jpg"],
        "dimensions": { "w": 66, "l": 129, "h": 42 },
        "weight": 59,
        "grip": ["palm", "claw", "finger"],
        "handSizeFit": "large",
        "sensor": "PAW3370",
        "dpi": "50–20000",
        "switch": "Optical",
        "polling": "1000 Hz",
        "connectivity": "2.4G",
        "battery": "70h",
        "lighting": "RGB",
        "layout": null,
        "switchType": null,
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 4,
        "features": ["Ergo large shell", "PTFE feet", "Onboard memory"],
        "newproduct": false,
        "bestseller": false
    },
    {
        "id": "gpx2",
        "type": "mouse",
        "category": "mouse",
        "brand": "Logitech G",
        "model": "Pro X Superlight 2",
        "name": "Logitech G Pro X Superlight 2",
        "price": 751.95,
        "images": ["img/gpx2-1.jpg", "img/gpx2-2.jpg", "img/gpx2-3.jpg"],
        "dimensions": { "w": 63.5, "l": 125, "h": 40 },
        "weight": 60,
        "grip": ["claw", "palm", "finger"],
        "handSizeFit": "medium",
        "sensor": "HERO 32K",
        "dpi": "100–32000",
        "switch": "Hybrid optical-mech",
        "polling": "4000 Hz",
        "connectivity": "2.4G",
        "battery": "95h",
        "lighting": "none",
        "layout": null,
        "switchType": null,
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 5,
        "features": ["60g weight", "PTFE feet", "Zero-additive glide"],
        "newproduct": false,
        "bestseller": true
    },

    {
        "id": "g213",
        "type": "keyboard",
        "category": "keyboard",
        "brand": "Logitech G",
        "model": "G213 Prodigy",
        "name": "Logitech G G213 Prodigy",
        "price": 234.95,
        "images": ["img/g213-1.jpg", "img/g213-2.jpg"],
        "dimensions": { "w": 452, "l": 218, "h": 33 },
        "weight": 1000,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": "1000 Hz",
        "connectivity": "wired",
        "battery": null,
        "lighting": "RGB",
        "layout": "100%",
        "switchType": "Membrane",
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 3,
        "features": ["Spill-resistant", "Media keys", "LightSync zones"],
        "newproduct": true,
        "bestseller": false
    },
    {
        "id": "aula-f2088",
        "type": "keyboard",
        "category": "keyboard",
        "brand": "AULA",
        "model": "F2088",
        "name": "AULA F2088",
        "price": 187.95,
        "images": ["img/aula-f2088-1.jpg", "img/aula-f2088-2.jpg"],
        "dimensions": { "w": 440, "l": 135, "h": 38 },
        "weight": 850,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": "1000 Hz",
        "connectivity": "wired",
        "battery": null,
        "lighting": "RGB",
        "layout": "100%",
        "switchType": "Clicky",
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 4,
        "features": ["Metal top plate", "Double-shot keycaps", "Anti-ghosting"],
        "newproduct": false,
        "bestseller": false
    },
    {
        "id": "huntsman-mini",
        "type": "keyboard",
        "category": "keyboard",
        "brand": "Razer",
        "model": "Huntsman Mini",
        "name": "Razer Huntsman Mini",
        "price": 422.95,
        "images": ["img/huntsman-mini-1.jpg", "img/huntsman-mini-2.jpg"],
        "dimensions": { "w": 293, "l": 104, "h": 37 },
        "weight": 523,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": "1000 Hz",
        "connectivity": "wired",
        "battery": null,
        "lighting": "RGB",
        "layout": "60%",
        "switchType": "Optical Linear",
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 5,
        "features": ["Doubleshot PBT", "Detachable USB-C", "Aluminium top"],
        "newproduct": false,
        "bestseller": false
    },
    {
        "id": "gpro-x-tkl",
        "type": "keyboard",
        "category": "keyboard",
        "brand": "Logitech G",
        "model": "Pro X TKL",
        "name": "Logitech G Pro X TKL",
        "price": 939.95,
        "images": ["img/gpro-x-tkl-1.jpg", "img/gpro-x-tkl-2.jpg"],
        "dimensions": { "w": 352, "l": 150, "h": 34 },
        "weight": 980,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": "1000 Hz",
        "connectivity": "2.4G",
        "battery": "50h",
        "lighting": "RGB",
        "layout": "TKL",
        "switchType": "GX Linear",
        "mic": null,
        "drivers": null,
        "surround": null,
        "rating": 5,
        "features": ["Lightspeed wireless", "Media wheel", "PBT caps"],
        "newproduct": true,
        "bestseller": false
    },

    {
        "id": "cloud-stinger",
        "type": "headset",
        "category": "headset",
        "brand": "HyperX",
        "model": "Cloud Stinger",
        "name": "HyperX Cloud Stinger",
        "price": 187.95,
        "images": ["img/cloud-stinger-1.jpg", "img/cloud-stinger-2.jpg"],
        "dimensions": { "w": 150, "l": 195, "h": 80 },
        "weight": 275,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": null,
        "connectivity": "wired",
        "battery": null,
        "lighting": "none",
        "layout": null,
        "switchType": null,
        "mic": "Swivel-to-mute",
        "drivers": "50mm",
        "surround": "Stereo",
        "rating": 5,
        "features": ["Comfortable earcups", "Steel slider", "Inline control"],
        "newproduct": false,
        "bestseller": true
    },
    {
        "id": "g435",
        "type": "headset",
        "category": "headset",
        "brand": "Logitech G",
        "model": "G435 Lightspeed",
        "name": "Logitech G G435 Lightspeed",
        "price": 281.95,
        "images": ["img/g435-1.jpg", "img/g435-2.jpg"],
        "dimensions": { "w": 163, "l": 180, "h": 75 },
        "weight": 165,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": null,
        "connectivity": "multi",
        "battery": "18h",
        "lighting": "none",
        "layout": null,
        "switchType": null,
        "mic": "Dual beamforming",
        "drivers": "40mm",
        "surround": "Stereo",
        "rating": 3,
        "features": ["Ultra-light 165g", "BT + 2.4G", "Youth fit"],
        "newproduct": true,
        "bestseller": true
    },
    {
        "id": "blackshark-v2",
        "type": "headset",
        "category": "headset",
        "brand": "Razer",
        "model": "BlackShark V2",
        "name": "Razer BlackShark V2",
        "price": 469.95,
        "images": ["img/blackshark-v2-1.jpg", "img/blackshark-v2-2.jpg"],
        "dimensions": { "w": 170, "l": 200, "h": 90 },
        "weight": 262,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": null,
        "connectivity": "wired",
        "battery": null,
        "lighting": "none",
        "layout": null,
        "switchType": null,
        "mic": "Detachable",
        "drivers": "50mm",
        "surround": "7.1",
        "rating": 5,
        "features": ["TriForce drivers", "THX Spatial", "USB sound card"],
        "newproduct": false,
        "bestseller": false
    },
    {
        "id": "gpro-x-wl",
        "type": "headset",
        "category": "headset",
        "brand": "Logitech G",
        "model": "Pro X Wireless",
        "name": "Logitech G Pro X Wireless",
        "price": 939.95,
        "images": ["img/gpro-x-wl-1.jpg", "img/gpro-x-wl-2.jpg"],
        "dimensions": { "w": 170, "l": 200, "h": 95 },
        "weight": 320,
        "grip": null,
        "handSizeFit": null,
        "sensor": null,
        "dpi": null,
        "switch": null,
        "polling": null,
        "connectivity": "2.4G",
        "battery": "20h",
        "lighting": "none",
        "layout": null,
        "switchType": null,
        "mic": "Detachable",
        "drivers": "50mm",
        "surround": "DTS 7.1",
        "rating": 5,
        "features": ["Blue VO!CE", "DTS Headphone:X 2.0", "Pro-G drivers"],
        "newproduct": true,
        "bestseller": false
    }
];




let filteredProducts = [...products];
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartUI();
    
    // Restore filters from session when page loads
    restoreFiltersOnLoad();
});

// ===== FILTER PERSISTENCE SYSTEM =====
const FILTERS_STORAGE_KEY = 'shopFilters';

// Save current filters to sessionStorage
function saveFilters(filters) {
    try {
        const filtersToSave = {
            category: filters.category || 'all',
            brand: filters.brand || 'all',
            searchTerm: filters.searchTerm || '',
            sortBy: filters.sortBy || 'default',
            timestamp: Date.now()
        };
        sessionStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filtersToSave));
        console.log('Filters saved:', filtersToSave);
    } catch (e) {
        console.warn('Failed to save filters to sessionStorage:', e);
    }
}

// Load filters from sessionStorage
function loadFilters() {
    try {
        const raw = sessionStorage.getItem(FILTERS_STORAGE_KEY);
        if (!raw) return getDefaultFilters();
        
        const parsed = JSON.parse(raw);
        return {
            category: parsed.category || 'all',
            brand: parsed.brand || 'all',
            searchTerm: parsed.searchTerm || '',
            sortBy: parsed.sortBy || 'default'
        };
    } catch (e) {
        console.warn('Failed to load filters from sessionStorage:', e);
        return getDefaultFilters();
    }
}

// Get default filter state
function getDefaultFilters() {
    return {
        category: 'all',
        brand: 'all',
        searchTerm: '',
        sortBy: 'default'
    };
}

// Restore filters when page loads
function restoreFiltersOnLoad() {
    const savedFilters = loadFilters();
    
    // Apply the saved filters
    applyAllFilters(savedFilters);
    
    // Update UI to reflect saved state
    updateFilterUI(savedFilters);
    
    console.log('Filters restored on page load:', savedFilters);
}

// ===== CATEGORY FILTERING =====
const CATEGORY_MAP = {
    'all': 'all',
    'all categories': 'all',
    'mouse': 'mouse',
    'mice': 'mouse',
    'mouses': 'mouse',
    'keyboard': 'keyboard',
    'keyboards': 'keyboard',
    'headset': 'headset',
    'headsets': 'headset'
};

// Filter by category
window.filterProducts = function(category) {
    const currentFilters = loadFilters();
    const normalizedCategory = CATEGORY_MAP[norm(category)] || category || 'all';
    
    const newFilters = {
        ...currentFilters,
        category: normalizedCategory
    };
    
    saveFilters(newFilters);
    applyAllFilters(newFilters);
    updateFilterUI(newFilters);
};

// ===== BRAND FILTERING =====
const BRAND_MAP = {
    'all': 'all',
    'logitech': 'logitech g',
    'logitech g': 'logitech g',
    'razer': 'razer',
    'pulsar': 'pulsar',
    'hyperx': 'hyperx',
    'aula': 'aula'
};

// Filter by brand
window.filterProductsBrand = function(brand) {
    const currentFilters = loadFilters();
    const normalizedBrand = BRAND_MAP[norm(brand)] || brand || 'all';
    
    const newFilters = {
        ...currentFilters,
        brand: normalizedBrand
    };
    
    saveFilters(newFilters);
    applyAllFilters(newFilters);
    updateFilterUI(newFilters);
};

// ===== SEARCH FUNCTIONALITY =====
window.searchProducts = function(searchTerm) {
    const currentFilters = loadFilters();
    
    const newFilters = {
        ...currentFilters,
        searchTerm: searchTerm || ''
    };
    
    saveFilters(newFilters);
    applyAllFilters(newFilters);
    updateFilterUI(newFilters);
};

// ===== SORT FUNCTIONALITY =====
window.sortProducts = function(sortBy) {
    const currentFilters = loadFilters();
    
    const newFilters = {
        ...currentFilters,
        sortBy: sortBy || 'default'
    };
    
    saveFilters(newFilters);
    applyAllFilters(newFilters);
    updateFilterUI(newFilters);
};

// ===== APPLY ALL FILTERS =====
function applyAllFilters(filters) {
    if (!Array.isArray(products) || !products.length) return;

    let filtered = [...products];
    
    // Apply category filter
    if (filters.category && filters.category !== 'all') {
        const wantCat = norm(filters.category);
        filtered = filtered.filter(p => norm(p.category) === wantCat);
    }
    
    // Apply brand filter
    if (filters.brand && filters.brand !== 'all') {
        const wantBrand = norm(filters.brand);
        filtered = filtered.filter(p => norm(p.brand).includes(wantBrand));
    }
    
    // Apply search filter
    if (filters.searchTerm && filters.searchTerm.trim()) {
        const searchLower = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchLower) ||
            p.category.toLowerCase().includes(searchLower) ||
            p.brand.toLowerCase().includes(searchLower) ||
            p.model.toLowerCase().includes(searchLower)
        );
    }
    
    // Apply sorting
    if (filters.sortBy && filters.sortBy !== 'default') {
        switch (filters.sortBy) {
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filtered.sort((a, b) => b.newproduct - a.newproduct);
                break;
            case 'bestseller':
                filtered.sort((a, b) => b.bestseller - a.bestseller);
                break;
        }
    }
    
    filteredProducts = filtered;
    displayProducts(filteredProducts);
    
    console.log(`Applied filters: Category=${filters.category}, Brand=${filters.brand}, Search="${filters.searchTerm}", Sort=${filters.sortBy}`);
    console.log(`Results: ${filtered.length} products found`);
}

// ===== UPDATE UI TO REFLECT CURRENT FILTERS =====
function updateFilterUI(filters) {
    // Update category active states
    setActiveCategory(filters.category);
    
    // Update brand active states  
    setActiveBrand(filters.brand);
    
    // Update search input
    const searchInput = document.querySelector('#search-input, .search-input, input[type="search"]');
    if (searchInput && filters.searchTerm) {
        searchInput.value = filters.searchTerm;
    }
    
    // Update sort dropdown
    const sortSelect = document.querySelector('#sort-select, .sort-select');
    if (sortSelect && filters.sortBy) {
        sortSelect.value = filters.sortBy;
    }
}

// ===== CLEAR ALL FILTERS =====
window.clearAllFilters = function() {
    const defaultFilters = getDefaultFilters();
    saveFilters(defaultFilters);
    applyAllFilters(defaultFilters);
    updateFilterUI(defaultFilters);
    
    // Clear search input
    const searchInput = document.querySelector('#search-input, .search-input, input[type="search"]');
    if (searchInput) searchInput.value = '';
    
    console.log('All filters cleared');
};

// ===== ACTIVE STATE MANAGEMENT =====
function setActiveCategory(category) {
    const want = norm(category);
    $('.category-link, .category-btn, #allCat a[data-category], [data-category]')
        .removeClass('active text-primary fw-bold');
    
    $('.category-link, .category-btn, #allCat a[data-category], [data-category]').each(function() {
        const dataCategory = $(this).data('category');
        if (norm(dataCategory) === want || (want === 'all' && (!dataCategory || dataCategory === 'all'))) {
            $(this).addClass('active text-primary fw-bold');
        }
    });
}

function setActiveBrand(brand) {
    const want = norm(brand);
    $('.brand-link, .brand-btn, #allBrand a[data-brand], [data-brand]')
        .removeClass('active text-primary fw-bold');
    
    $('.brand-link, .brand-btn, #allBrand a[data-brand], [data-brand]').each(function() {
        const dataBrand = $(this).data('brand');
        if (norm(dataBrand) === want || (want === 'all' && (!dataBrand || dataBrand === 'all'))) {
            $(this).addClass('active text-primary fw-bold');
        }
    });
}

// ===== EVENT HANDLERS =====

// Category filter clicks
$(document).on('click', '.category-link, .category-btn, #allCat a[data-category], [data-category]:not([data-brand])', function(e) {
    e.preventDefault();
    const cat = $(this).data('category') || 'all';
    filterProducts(cat);
});

// Brand filter clicks  
$(document).on('click', '.brand-link, .brand-btn, #allBrand a[data-brand], [data-brand]:not([data-category])', function(e) {
    e.preventDefault();
    const brand = $(this).data('brand') || 'all';
    filterProductsBrand(brand);
});

// Search input handler
$(document).on('input', '#search-input, .search-input, input[type="search"]', function() {
    const searchTerm = $(this).val();
    searchProducts(searchTerm);
});

// Sort dropdown handler
$(document).on('change', '#sort-select, .sort-select', function() {
    const sortBy = $(this).val();
    sortProducts(sortBy);
});

// Clear filters button
$(document).on('click', '#clearFilters, .clear-filters', function(e) {
    e.preventDefault();
    clearAllFilters();
});

// ===== UTILITY FUNCTIONS =====
function norm(x) {
    return (x || '').toString().trim().toLowerCase();
}

// Product display function for grid view
function displayProducts(productsToShow) {
    const grid = $('#tab-5 .row.g-4.product');
    const noProducts = $('#noProducts');

    if (productsToShow.length === 0) {
        if (noProducts.length === 0) {
            grid.after('<div id="noProducts" class="col-12 text-center"><h4>No products found</h4><p>Try adjusting your filters or search terms.</p></div>');
        } else {
            noProducts.show();
        }
        grid.find('.col-lg-4').hide();
        return;
    } else {
        $('#noProducts').hide();
        grid.find('.col-lg-4').show();
    }

    // Clear existing products (except pagination)
    grid.find('.col-lg-4').remove();

    productsToShow.forEach((product, index) => {
        const delay = ((index % 3) * 0.2 + 0.1).toFixed(1);
        const stars = generateStars(product.rating);

        const productCard = `
                <div class="col-lg-4">
                    <div class="product-item rounded">
                        <div class="product-item-inner border rounded text-center">
                            <a class="product-item-inner-item" href="product-detail.html?id=${product.id}">
                            <img src="${product.images[0]}" class="img-fluid w-100 rounded-top" alt="${product.name}">
                            </a>

                            <div class="text-center rounded-bottom p-4">
                                <div class="d-block mb-2">${product.category}</div>
                                <a href="product-detail.html?id=${product.id}" class="d-block h4 text-decoration-none">
                                    ${product.name}
                                </a>
                                <div class="me-2 fs-5">RM${product.price.toFixed(2)}</div>
                            </div>
                        </div>

                        <div class="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
                            <button type="button" 
                                class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4 add-to-cart" 
                                data-id="${product.id}">
                                <i class="fas fa-shopping-cart me-2"></i> Add To Cart
                            </button>
                            
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    ${stars}
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button type="button" 
                                        class="btn btn-outline-danger rounded-circle py-2 favourite-btn" 
                                            data-id="${product.id}">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        // Insert before pagination
        grid.find('.col-12.wow').before(productCard);
    });

    displayMiniProducts(productsToShow);
}

// Product display function for list view
function displayMiniProducts(productsToShow) {
    const miniGrid = $('#tab-6 .row.g-4.products-mini');

    // Clear existing mini products (except pagination)
    miniGrid.find('.col-lg-6').remove();

    productsToShow.forEach((product, index) => {
        const delay = ((index % 2) * 0.2 + 0.1).toFixed(1);

        const miniProductCard = `
<div class="col-lg-6">
    <div class="products-mini-item border rounded">
      <div class="row g-0">
        <div class="col-5">
          <div class="products-mini-img border-end h-100">
            <a class="product-item-inner-item" href="product-detail.html?id=${product.id}">
                            <img src="${product.images[0]}" class="img-fluid w-100 rounded-top" alt="${product.name}">
                            </a>
          </div>
        </div>

        <div class="col-7">
          <div class="products-mini-content p-3">
            <div class="d-block mb-2">${product.category}</div>
             <a href="product-detail.html?id=${product.id}" class="d-block h4 text-decoration-none">
                                    ${product.name}
                                </a>
            <div class="me-2 fs-5">RM${product.price.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div class="products-mini-add border p-3 d-flex justify-content-between align-items-center">
        <button type="button"
                class="btn btn-primary rounded-pill py-2 px-4 add-to-cart"
                data-id="${product.id}">
          <i class="fas fa-shopping-cart me-2"></i> Add To Cart
        </button>

        <div class="d-flex justify-content-end">
          <button type="button"
                  class="btn btn-outline-danger rounded-circle favourite-btn"
                  data-id="${product.id}">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
`;

        // Insert before pagination
        miniGrid.find('.col-12.wow').before(miniProductCard);
    });
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star text-primary"></i>';
        } else {
            stars += '<i class="fas fa-star"></i>';
        }
    }
    return stars;
}

// ===== CART FUNCTIONALITY =====
$(document).off('click', '.add-to-cart').on('click', '.add-to-cart', function (e) {
    e.preventDefault();

    const id = String($(this).data('id'));
    if (!id) return;

    const product = (Array.isArray(products) ? products : []).find(p => String(p.id) === id);
    if (!product) return;

    const item = {
        id,
        name: product.name || 'Unnamed',
        model: product.model || '',
        category: product.category || '',
        image: (product.images && product.images[0]) || '',
        price: Number(product.price ?? 0),
        quantity: 1
    };

    const existing = cart.find(i => String(i.id) === id);
    if (existing) existing.quantity += 1;
    else cart.push(item);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showAddToCartMessage(product.name);
});

function updateCartUI() {
    const cartCount = cart.reduce((t, it) => t + (Number(it.quantity) || 0), 0);
    const cartTotal = cart.reduce((t, it) => t + (Number(it.price) || 0) * (Number(it.quantity) || 0), 0);

    $('.cart-count').text(cartCount);
    $('.cart-total').text('RM' + cartTotal.toFixed(2));

    localStorage.setItem('cart', JSON.stringify(cart));
}

function showAddToCartMessage(productName) {
    const html = `
    <div class="cart-notification position-fixed top-0 end-0 m-3 p-3 bg-success text-white rounded shadow"
         style="z-index:9999; min-width: 220px;">
      ${productName} added to cart!
    </div>`;
    const $old = $('.cart-notification');

    if ($old.length) $old.remove();
    $('body').append(html);

    setTimeout(() => {
        $('.cart-notification').fadeOut(200, function () { $(this).remove(); });
    }, 1600);
}

// ===== PRODUCT DISPLAY FUNCTIONS FOR HOME PAGE =====
function generateBadges(product) {
    let html = "";
    if (product.bestseller) {
        html += `<span class="badge bg-danger me-1">Best Seller</span>`;
    }
    if (product.newproduct) {
        html += `<span class="badge bg-success">New</span>`;
    }
    return html;
}

function displayBestsellers(containerId = "bestseller-container", limit = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container with ID "${containerId}" not found`);
        return;
    }

    const bestsellers = products.filter(p => p.bestseller === true);
    const displayProducts = limit ? bestsellers.slice(0, limit) : bestsellers;

    if (displayProducts.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No bestseller products available at the moment.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = displayProducts.map(product => `
        <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="products-mini-item border rounded">
                <div class="row g-0">
                    <div class="col-5">
                        <div class="products-mini-img border-end h-100">
                            <img src="${product.images[0]}" class="img-fluid w-100 h-100" alt="${product.name}">
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="products-mini-content p-3">
                            <div class="mb-1">${generateBadges(product)}</div>
                            <a href="#" class="d-block mb-2 text-muted small text-uppercase">${product.category}</a>
                            <a href="product-detail.html?id=${product.id}" class="d-block h4 text-decoration-none">
                                    ${product.name}
                                </a>
                            <div class="d-flex align-items-center mb-2">
                                <span class="text-primary fs-5 fw-bold">RM${product.price.toFixed(2)}</span>
                                <div class="ms-2">${generateStars(product.rating)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="products-mini-add border-top p-3 d-flex justify-content-between align-items-center">
                    <button class="btn btn-primary rounded-pill py-2 px-4 add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart me-2"></i> Add To Cart
                    </button>
                </div>
            </div>
        </div>
    `).join("");

    console.log(`Displayed ${displayProducts.length} bestseller products`);
}

function displayNewProducts(containerId = "new-products-container", limit = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container with ID "${containerId}" not found`);
        return;
    }

    const newProducts = products.filter(p => p.newproduct === true);
    const displayProducts = limit ? newProducts.slice(0, limit) : newProducts;

    if (displayProducts.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No new products available at the moment.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = displayProducts.map(product => `
        <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="products-mini-item border rounded">
                <div class="row g-0">
                    <div class="col-5">
                        <div class="products-mini-img border-end h-100">
                            <img src="${product.images[0]}" class="img-fluid w-100 h-100" alt="${product.name}">
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="products-mini-content p-3">
                            <div class="mb-1">${generateBadges(product)}</div>
                            <a href="#" class="d-block mb-2 text-muted small text-uppercase">${product.category}</a>
                            <a href="product-detail.html?id=${product.id}" class="d-block h4 text-decoration-none">
                                    ${product.name}
                                </a>
                            <div class="d-flex align-items-center mb-2">
                                <span class="text-primary fs-5 fw-bold">RM${product.price.toFixed(2)}</span>
                                <div class="ms-2">${generateStars(product.rating)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="products-mini-add border-top p-3 d-flex justify-content-between align-items-center">
                    <button class="btn btn-primary rounded-pill py-2 px-4 add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart me-2"></i> Add To Cart
                    </button>
                </div>
            </div>
        </div>
    `).join("");

    console.log(`Displayed ${displayProducts.length} new products`);
}

function displayOurProducts() {
    const tabsContainer = document.getElementById('productTabContent');
    if (!tabsContainer) {
        console.warn('Product tabs container not found');
        return;
    }

    const allProducts = products.filter(p => p.newproduct === true || p.bestseller === true);
    const newArrivals = products.filter(p => p.newproduct === true);
    const topSelling = products.filter(p => p.bestseller === true);

    function generateProductCard(product) {
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="product-item rounded h-100">
                    <div class="product-item-inner border rounded text-center h-100 d-flex flex-column">
                        <div class="product-item-inner-item position-relative">
                            <img src="${product.images[0]}" class="img-fluid w-100 rounded-top" alt="${product.name}">
                            <div class="position-absolute top-0 start-0 p-2">
                                ${generateBadges(product)}
                            </div>
                        </div>

                        <div class="text-center rounded-bottom p-4 flex-grow-1 d-flex flex-column justify-content-between">
                            <div>
                                <div class="d-block mb-2 text-muted small text-uppercase">${product.category}</div>
                                <a href="product-detail.html?id=${product.id}" class="d-block h4 text-decoration-none">
                                    ${product.name}
                                </a>

                                <div class="d-flex justify-content-center align-items-center mb-3">
                                    <span class="me-3 fs-5 fw-bold text-primary">RM${product.price.toFixed(2)}</span>
                                    <div>${generateStars(product.rating)}</div>
                                </div>
                            </div>

                            <div>
                                <button type="button" 
                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-3 add-to-cart w-100" 
                                    data-id="${product.id}">
                                    <i class="fas fa-shopping-cart me-2"></i> Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    const tabs = [
        { id: 'all-products-grid', products: allProducts },
        { id: 'new-arrivals-grid', products: newArrivals },
        { id: 'top-selling-grid', products: topSelling }
    ];

    tabs.forEach(tab => {
        const container = document.getElementById(tab.id);
        if (container) {
            if (tab.products.length === 0) {
                container.innerHTML = `
                    <div class="col-12 text-center">
                        <p class="text-muted">No products available in this category.</p>
                    </div>
                `;
            } else {
                container.innerHTML = tab.products.map(generateProductCard).join('');
            }
        }
    });
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayBestsellers('bestseller-container', 6);
    displayNewProducts('new-products-container', 6);
    displayOurProducts();
});

function getBestsellers(limit = null) {
    const bestsellers = products.filter(p => p.bestseller === true);
    return limit ? bestsellers.slice(0, limit) : bestsellers;
}

function getNewProducts(limit = null) {
    const newProducts = products.filter(p => p.newproduct === true);
    return limit ? newProducts.slice(0, limit) : newProducts;
}