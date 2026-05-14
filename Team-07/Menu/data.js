 //كل عنصر اكل معموله object
 const menuItems = [
    {
        id: 1, name: "Classic Margherita Pizza",price: 130.00,
        description: "Fresh mozzarella, sweet basil, and extra virgin olive oil on a thin crust.",
        image: "../image/pizaa4.jpg",
        image1: "../image/pizaa1.jpg",
        image2: "../image/pizaa2.jpg",
        image3: "../image/pizaa3.jpg",
        image4: "../image/pizaa.jpg",
        image5: "../image/pizaa5.jpg",
        category: "Healthy Food",
        calories: "250 kcal", time: "10 mins", rating: "⭐️⭐️⭐️⭐️⭐️",
        //array جوا object
        ingredients: [
            "Lettuce","Tomatoes","Olives","Feta Cheese"
        ]
    },
    {
        id: 2,
        name: "Crispy Chicken Burger",
        description: "Juicy fried chicken breast, cheddar cheese, crisp lettuce, and special sauce.",
        price: 85.00,
        image: "../image/Burger.jpg",
        image1: "../image/Burger1.jpg",
        image2: "../image/Burger2.jpg",
        image3: "../image/Burger3.jpg",
        image4: "../image/Burger4.jpg",
        image5: "../image/Burger5.jpg",
        category: "Fast Food",
        calories: "450 kcal",
        time: "20 mins",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        ingredients: [
        "Chicken Breast (crispy fried)",
        "Burger Bun",
        "Tomatoes",
        "Cheddar Cheese",
        ]
    },
    {
        id: 3,
        name: "Grilled Salmon Steak",
        description: "Fresh fillet served with mashed potatoes and creamy lemon-herb sauce.",
        price: 180.00,
        image: "../image/salmon2.jpg",
        image1: "../image/salmon1.jpg",
        image2: "../image/salmon.jpg",
        image3: "../image/salmon3.jpg",
        image4: "../image/salmon4.jpg",
        image5: "../image/salmon5.jpg",
        category: "Healthy Food",
        calories: "300 kcal",
        time: "25 mins",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        ingredients: [
        "Garlic",
        "Salt",
        "Herbs (rosemary or thyme)",
        "Side vegetables (optional)"
        ]
    },
    {
        id: 4,
        name: "Greek Salad",
        description: "Fresh Greek salad with lettuce, cucumbers, tomatoes, olives, and feta cheese.",
        price: 55.00,
        image: "../image/salad.jpg",
        image1: "../image/salad1.jpg",
        image2: "../image/salad2.jpg",
        image3: "../image/salad3.jpg",
        image4: "../image/salad4.jpg",
        image5: "../image/salad5.jpg",
        category: "Healthy Food",
        calories: "150 kcal",
        time: "10 mins",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        ingredients: [
        "Lettuce",
        "Tomatoes",
        "Cucumber",
        "Feta Cheese",
        ]
    },
    {
        id: 5,
        name: "Double Chocolate Brownie",
        description: "Rich, warm chocolate brownie topped with vanilla ice cream.",
        price: 45.00,
        image: "../image/brownie3.jpg",
        image1: "../image/brownie1.jpg",
        image2: "../image/brownie2.jpg",
        image3: "../image/brownie.jpg",
        image4: "../image/brownie4.jpg",
        image5: "../image/brownie5.jpg",
        category: "Dessert",
        calories: "420 kcal",
        time: "35 mins",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        ingredients: [
            "Dark chocolate",
            "Milk chocolate",
            "Vanilla extract",
            "Chocolate chips"
        ]
    },
    {
        id: 6,
        name: "Fresh Kewie Juice",
        description: "100% freshly squeezed natural orange juice with zero added sugar.",
        price: 35.00,
        image: "../image/juice2.jpg",
        image1: "../image/juice1.jpg",
        image2: "../image/juice.jpg",
        image3: "../image/juice3.jpg",
        image4: "../image/juice4.jpg",
        image5: "../image/juice5.jpg",
        category: "Healthy Drink",
        calories: "120 kcal",
        time: "5 mins",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        ingredients: [
            "Fresh kiwi",
            "Cold water",
            "Ice cubes",
            "Honey (optional)",
            "Lemon juice (optional)"
        ]
    }
];
// Function
function renderMenu() {

    //Dom Manipulation
    const menuGrid = document.getElementById('menu-grid');

    if (!menuGrid) return;

    menuGrid.innerHTML = '';

    //Array&&Method(for Each)
    //عشان الف على كل العناصر

    menuItems.forEach(item => {

        const card = document.createElement('div');

        card.classList.add('card');
            //Dom Manipulation


        card.innerHTML =` 
        
            <img src="${item.image}" alt="${item.name}">

            <div class="card-body">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="price">$${item.price.toFixed(2)}</div>

                <button class="btn-add" onclick="event.stopPropagation(); addToCart(${item.id})">
                    Add to Cart
                </button>

            </div>
        ;`

        // لما يدوس على الكارد يروح للتفاصيل
        card.addEventListener('click', () => {

            window.location.href =`../Details/details.html?id=${item.id}`;

        });

        menuGrid.appendChild(card);
    });
}
//event listeners(page load)
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
//Function
function addToCart(itemId) {
    //Array&&Meyhod(find)
    //اضيف عنصر ل card
    const item = menuItems.find(i => i.id === itemId);
    
    //Dynamic massage

    alert(`${item.name} has been successfully added to your cart!`);
    
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = parseInt(cartCount.innerText) + 1;
    }
}