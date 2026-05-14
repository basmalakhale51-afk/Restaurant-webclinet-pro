
//Functions & Cookies
function setCookie(name, value, days) {

    let date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    let expires = "expires=" + date.toUTCString();

    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {

    let cookieName = name + "=";

    let cookiesArray = document.cookie.split(";");

    for(let i = 0; i < cookiesArray.length; i++) {

        let cookie = cookiesArray[i].trim();

        if(cookie.indexOf(cookieName) === 0) {

            return cookie.substring(cookieName.length);
        }
    }

    return "";
}


// Event Listeners 
document.getElementById("themeBtn").addEventListener("click", () => {

    document.body.classList.toggle("dark");

    // Cookies 
    if(document.body.classList.contains("dark")) {

        setCookie("theme", "dark", 7);

    } else {

        setCookie("theme", "light", 7);
    }
});

// Event Listeners 
window.addEventListener("DOMContentLoaded", () => {

    let savedTheme = getCookie("theme");

    if(savedTheme === "dark") {

        document.body.classList.add("dark");
    }
});