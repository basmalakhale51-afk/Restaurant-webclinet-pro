//localStorage + Error Handling
let order;
try {
    order = JSON.parse(localStorage.getItem("currentOrder"));
} catch(error) {
    console.error("Error loading order:", error);
    alert("Unable to load order details");
}

//DOM Manipulation
let details = document.getElementById("orderDetails");
//Conditional Logic & Validation
if(order) {
    //DOM Manipulation
    details.innerHTML =`
        <!-- Objects & Classes -->
        <h3>Name: ${order.customerName}</h3>

        <h3>Phone: ${order.phone}</h3>

        <h3>Address: ${order.address}</h3>

        <h3>Payment: ${order.payment}</h3>

        <h3>Order Type: ${order.orderType}</h3>

         <!-- Dynamic UI & User Feedback -->
        <h3>Total: $${order.total}</h3>`
} 
else {
    //DOM Manipulation
    details.innerHTML =`<h3>No order found</h3>`
}