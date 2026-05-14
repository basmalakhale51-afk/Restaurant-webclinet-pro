// contact.js
//Dom Manipulation
const contactForm = document.getElementById("contactForm");

const responseMessage = document.getElementById("responseMessage");
//Event Listeners
contactForm.addEventListener("submit", function(e){

    e.preventDefault();
    //Dom Manipulation(يجيب البيانات)
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;
// validation
    if(name === "" || email === "" || message === ""){

        responseMessage.innerHTML = "Please fill all fields";

        responseMessage.style.color = "red";

        return;
    }
//Dynamic UI (رساله نجاح)
    responseMessage.innerHTML = "Message sent successfully ✅";

    responseMessage.style.color = "green";
//Reset from
    contactForm.reset();

});