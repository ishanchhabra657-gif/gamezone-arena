

const searchInput = document.getElementById("gameSearch");
const gameCards = document.querySelectorAll(".game-card");
const noResults = document.getElementById("noResults");

// Search games by name, category, or description
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleGames = 0;

    gameCards.forEach(function (card) {
        const gameText = card.textContent.toLowerCase();
        const matches = gameText.includes(searchText);

        card.hidden = !matches;

        if (matches) {
            visibleGames++;
        }
    });

    noResults.hidden = visibleGames !== 0;
});

// Automatically update the year in the footer
document.getElementById("year").textContent =
    new Date().getFullYear();
