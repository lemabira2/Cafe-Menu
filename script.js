function showCategory(category) {
    document.getElementById("coffee").style.display = "none";
    document.getElementById("food").style.display = "none";
    document.getElementById("dessert").style.display = "none";

    document.getElementById(category).style.display = "block";
}