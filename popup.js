document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("resource-popup");
    const close = document.getElementById("close-popup");
    let popupShown = false;
    window.addEventListener("scroll", function () {
        if (popupShown) return;
        const scrollPercent =
            window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollPercent > 0.75) {
            popup.style.display = "block";
            popupShown = true;
        }
    });
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });
});