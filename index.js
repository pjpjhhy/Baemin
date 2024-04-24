document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const popup = document.getElementById("popup");

    searchButton.addEventListener("click", function () {
        popup.classList.toggle("active");
    });
});
