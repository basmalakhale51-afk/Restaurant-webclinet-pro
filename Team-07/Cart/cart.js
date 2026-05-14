//Dynamic UI & User Feedback
const SHIPPING_COST = 50;
//Function
function addToCart(itemId) {

    //Conditional Logic & Validation
    if (typeof menuItems === 'undefined') {
        //Error Handling
        console.error('menuItems is not defined!');
        alert('Error: Products data not loaded!');
        return;
    }

    //Arrays & Array Methods(using find())
    const item = menuItems.find(product => product.id === itemId);

    //Conditional Logic & Validation
    if (!item) {
        //Error Handling
        console.error('Item not found:', itemId);
        return;
    }

    //localStorage(using JSON.stringify)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //Arrays & Array Methods(using find)
    const existingItem = cart.find(c => c.id === itemId);

    //Conditional Logic
    if (existingItem) 
    {
        existingItem.qty += 1;
    } 
    else
    {
        //Arrays & Array Methods( using push() )
        cart.push({ 

            //Objects & Classes
            id: item.id,
            name: item.name,
            price: item.price,
            qty: 1 
        });
    }
    //localStorage(using JSON.stringify)
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    //Dynamic UI & User Feedback
    alert(`${item.name} Added To Cart 🛒`);
    console.log('Cart updated:', cart);
}

//Functions
function removeItem(itemId) {
    //LocalStorge
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //Arrays & Array Methods(filter())
    cart = cart.filter(item => item.id !== itemId);
    //LocalStorge
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

//Functions
function updateQty(itemId, action) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //Arrays & Array Methods(find())
    const item = cart.find(c => c.id === itemId);
    //Conditional Logic & Validation
    if (!item) return;
    //Conditional Logic 
    if (action === "increase") {
        item.qty++;
    } else if (action === "decrease") {
        item.qty--;
        //Conditional Logic
        if (item.qty <= 0) {
            //Arrays & Array Methods(filter())
            cart = cart.filter(c => c.id !== itemId);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

//Function
function renderCart() {
    //DOM Manipulation
    const cartContainer = document.getElementById("cart-items");
    const subtotalEl = document.getElementById("subtotal");
    const shippingEl = document.getElementById("shipping");
    const totalEl = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkout-btn");

    //Conditional Logic & Validation
    if (!cartContainer) {
        //Error Handling
        console.warn('cart-items element not found');
        return;
    }
    //localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //DOM Manipulation
    cartContainer.innerHTML = "";
    //Conditional Logic
    if (cart.length === 0) {
        //DOM Manipulation
        cartContainer.innerHTML = `<div class="empty-msg">Your cart is empty 🛒</div>`;
        //Dynamic UI & User Feedback
        if(subtotalEl) subtotalEl.textContent = "0 EGP";
        if(shippingEl) shippingEl.textContent = "0 EGP";
        if(totalEl) totalEl.textContent = "0 EGP";
        if(checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    let subtotal = 0;
    //Arrays & Array Methods( Using forEach() )
    cart.forEach(item => {
        subtotal += item.price * item.qty;
        //DOM Manipulation
        cartContainer.innerHTML +=`
            <div class="cart-item-card">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price} EGP × ${item.qty}</p>
                </div>
                <div class="controls">
                    <!-- Event Listeners -->
                    <button class="minus" onclick="updateQty(${item.id}, 'decrease')">−</button>
                    <span>${item.qty}</span>
                    <button class="plus" onclick="updateQty(${item.id}, 'increase')">+</button>
                    <button class="remove-btn" onclick="removeItem(${item.id})"> 🗑️ </button>
                </div>
            </div>`;
    });

    const shipping = SHIPPING_COST;
    const total = subtotal + shipping;
    //localStorage
    localStorage.setItem("total",total);
    //Dynamic UI & User Feedback
    if(subtotalEl) subtotalEl.textContent = `${subtotal} EGP`;
    if(shippingEl) shippingEl.textContent = `${shipping} EGP`;
    if(totalEl) totalEl.textContent = `${total} EGP`;
    if(checkoutBtn) checkoutBtn.disabled = false;
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    //localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //Arrays & Array Methods( using reduce() )
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCount) cartCount.textContent = totalItems;
}

//Event Listeners(using addEventListener)
window.addEventListener("DOMContentLoaded", () => {
    console.log('Page loaded, initializing cart...');
    renderCart();
    updateCartCount();
});