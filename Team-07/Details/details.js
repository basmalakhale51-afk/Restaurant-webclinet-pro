//DOM Manipulation
const detailsContainer = document.getElementById("details-container");

//Functions (URLSearchParams)
const params = new URLSearchParams(window.location.search);
//Conditional Logic & Validation
const productId = Number(params.get("id"));

//Arrays & Array Methods ( using find() )
const product = menuItems.find(item => item.id === productId);

//Conditional Logic & Validation
if (!product) 
{
    //DOM Manipulation
    detailsContainer.innerHTML = "<h2>Product not found</h2>";
}
else
{
    //Objects & Classes
    detailsContainer.innerHTML = `
    
    <div class="details-container">

    <div class="left-side">

        <img src="${product.image}" class="main-image">

        <div class="gallery">
            <!-- Objects & Classes -->

            <img src="${product.image1}">
            <img src="${product.image2}">
            <img src="${product.image3}">
            <img src="${product.image4}">
            <img src="${product.image5}">

        </div>

    </div>

    <div class="right-side">

        <!-- Objects & Classes -->

        <h1>${product.name}</h1>
        <h2>${product.price}</h2>
        <p>${product.description}</p>

        <div class="info">

            <!-- Dynamic UI & User Feedback -->

            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Calories:</strong> ${product.calories}</p>
            <p><strong>Time:</strong> ${product.time}</p>
            <p><strong>Rating:</strong> ${product.rating}</p>
            
        </div>
        <div class="ingredients">

            <h3>Ingredients :</h3>

            <ul>
                <!-- Arrays & Array Methods -->

                <li>${product.ingredients[0]}</li>
                <li>${product.ingredients[1]}</li>
                <li>${product.ingredients[2]}</li>
                <li>${product.ingredients[3]}</li>

            </ul>

        </div>

        <a href="../Menu/menu.html"><button>Back Menu</button></a>

    </div>

</div>
`;
}