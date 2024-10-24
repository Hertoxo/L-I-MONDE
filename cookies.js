window.onload = function() {
    if (!localStorage.getItem("cookieAccepted")) {
        document.getElementById("cookiePopup").style.display = "block";
    }
};

document.getElementById("acceptCookie").addEventListener("click", function() {
    const popup = document.getElementById("cookiePopup");
    popup.classList.add("hide");
});

