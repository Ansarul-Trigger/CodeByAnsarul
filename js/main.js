document.getElementById("loadMoreBtn").addEventListener("click", function () {
    const hiddenCards = document.querySelectorAll(".load-more-card.d-none");
    let count = 0;

    hiddenCards.forEach((card) => {
      if (count < 3) { // Load 3 more cards per click
        card.classList.remove("d-none");
        count++;
      }
    });

    if (document.querySelectorAll(".load-more-card.d-none").length === 0) {
      this.style.display = "none"; // Hide button when no more cards
    }
  });