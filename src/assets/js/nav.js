// Toggle show and hide nav items
function navFunction() {
    if (window.matchMedia("(max-width: 700px)").matches) {
        var x = document.getElementById("nav-items");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}

// Make nav items disappear when clicking outside of nav button and nav items
window.addEventListener('mouseup', function(event) {
    if (window.matchMedia("(max-width: 700px)").matches) {
        var navButton = document.getElementById('nav-button');
        var navItems = document.getElementById('nav-items');
        if (event.target != navButton && event.target.parentNode != navButton && event.target != navItems && event.target.parentNode != navItems) {
            navItems.style.display = 'none';
        }
    }
});