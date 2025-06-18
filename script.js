//console.log("Lapa ir ielādēta!");
//alert("Sveiks, sveicināts manā portfolio!");

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Ja vēlies ikonu mainīt uz ☀️ kad ir tumšais režīms
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️";
        } else {
            toggleButton.textContent = "🌙";
        }
    });
});
