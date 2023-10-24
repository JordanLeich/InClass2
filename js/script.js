document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".orange-outline");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const letter = this.getAttribute("data-letter");
      if (!this.hasAttribute("data-clicked")) {
        const img = document.createElement("img");
        img.src = `../images/css-letter-${letter}.png`;
        img.className = "letter-image";
        img.style.display = "block";

        const container = document.createElement("div");
        container.className = "button-container";

        // Hide Result button for each image
        const hideResult = document.createElement("button");
        hideResult.textContent = "Hide Result";
        hideResult.className = "hideResult";
        hideResult.addEventListener("click", function () {
          img.style.display = "none";
          hideResult.style.display = "none";
          button.removeAttribute("data-clicked");
        });

        container.appendChild(img);
        container.appendChild(hideResult);

        this.parentNode.insertBefore(container, this);
        this.setAttribute("data-clicked", "true");
      }
    });
  });
});
