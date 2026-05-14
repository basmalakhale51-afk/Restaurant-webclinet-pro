//Arrays & Array Methods
let cart = [];
let total = 0;

//Event Listeners
window.addEventListener("DOMContentLoaded", () => {
    //localStorage
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("CART:", cart);

    let subtotal = 0;
    //Arrays & Array Methods(using forEach())
    cart.forEach(item => {
        subtotal += Number(item.price) * Number(item.qty);
    });

    let shipping = 50;
    total = subtotal + shipping;

    console.log("TOTAL:", total);
    //DOM Manipulation
    const totalEl = document.getElementById("total");
    //Conditional Logic & Validation
    if (totalEl) {
        totalEl.innerText = `${total} EGP`;
    }
});

//functions
function validateOrder(name, phone, address, orderType) {
    //Conditional Logic & Validation
    if (name === "" || phone === "") {
        return false;
    }

    if (orderType === "delivery" && address === "") {
        return false;
    }

    return true;
}

//Event Listeners
document.getElementById("checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();

    //DOM Manipulation
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let orderType = document.getElementById("orderType").value;

    //Conditional Logic & Validation
    if (cart.length === 0) {
        //Dynamic UI & User Feedback
        alert("Cart is empty");
        return;
    }
    //Function + Validation
    if (!validateOrder(name, phone, address, orderType)) {
        //Dynamic UI & User Feedback
        alert("Please fill all required fields");
        return;
    }

    //localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let dateNow = new Date().toLocaleString();

    //Arrays & Array Methods
    cart.forEach(item => {
        orders.push({
            //Objects & Classes
            name: item.name,       
            price: item.price,     
            image: item.image,    
            date: dateNow
        });
    });

    //localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

//DOM Manipulation
let payment = document.getElementById("payment").value;

let currentOrderInfo = {
    //Objects & Classes
    customerName: name,
    phone: phone,
    address: address,
    payment: payment,
    orderType: orderType,
    total: total
};

localStorage.setItem("currentOrder", JSON.stringify(currentOrderInfo));
    //localStorage
    localStorage.removeItem("cart");

    //Dynamic UI & User Feedback
    alert("Order Confirmed Successfully!");
    //DOM Manipulation
    window.location.href = "../Confirmation/Confirmation.html"; 
});