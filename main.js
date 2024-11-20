document.querySelectorAll(".main__section-item_theme_small").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (item.style.backgroundImage) {
      item.dataset.bgImage = item.style.backgroundImage;
      item.style.backgroundImage = "none";
    }
  });

  item.addEventListener("mouseleave", () => {
    if (item.dataset.bgImage) {
      item.style.backgroundImage = item.dataset.bgImage;
    }
  });
});
