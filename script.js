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

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-mosaic img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("lightbox-overlay");

      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.alt = img.alt;

      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);

      // Aizver, ja uzspiež uz overlay vai ESC
      overlay.addEventListener("click", () => overlay.remove());
      document.addEventListener("keydown", function escHandler(e) {
        if (e.key === "Escape") {
          overlay.remove();
          document.removeEventListener("keydown", escHandler);
        }
      });
    });
  });
});
