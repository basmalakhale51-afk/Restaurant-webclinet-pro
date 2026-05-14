//Dom Manipulation
const historyContainer = document.getElementById("historyContainer");
const clearOrdersBtn = document.getElementById("clearOrdersBtn");
//localStorage
function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function displayOrders() {
    //localStorage

    const orders = getOrders();
//Dom Manipulation
    historyContainer.innerHTML = "";
//validation(لو مفيش بيانات)
    if (orders.length === 0) {
        historyContainer.innerHTML = "<p>No Orders Yet</p>";
        return;
    }
// Array&&Method(for Each)
    orders.forEach(order => {
//Dom manipulation
        historyContainer.innerHTML += `

        <div class="order-card">

            <h2>${order.name}</h2>

            <p>${order.price}</p>

            <p>${order.date}</p>

        </div>
        `;
    });
}
//Event Listeneres
clearOrdersBtn.addEventListener("click", () => {
    //localStorage(حذف البيانات)
    localStorage.removeItem("orders");
    //Dynamic UI
    // تحديث الواجهه
    displayOrders();
});
//تشغيل اول ما الصفحه تفتخ
displayOrders();
