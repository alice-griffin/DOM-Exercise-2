const numbers = document.getElementById("shown-numbers");
const letters = document.getElementById("shown-letters");


document.querySelector(".hamburger-btn").addEventListener("click", function() {
    document.querySelector(".dropdown-content").classList.toggle("show-links");
});

document.getElementById("letters").addEventListener("click", function(event) {
    event.preventDefault();
    numbers.style.display = "none";
    letters.style.display = "block";
});

document.getElementById("numbers").addEventListener("click", function(event) {
    event.preventDefault();
    numbers.style.display = "block";
    letters.style.display = "none";
});

