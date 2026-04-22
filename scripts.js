import { Scents, Colognes, aC } from "./objects.js"; 

function showCards(dataToDisplay = aC) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  dataToDisplay.forEach((item) => {
    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, item.name, item.URL, item.price, item.scents); 
    cardContainer.appendChild(nextCard);
  });
}

function editCardContent(card, newTitle, newImageURL, newPrice, allScents) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const priceDisplay = card.querySelector(".card-price");
  priceDisplay.textContent = `$${newPrice}`;

  const scentTitle = card.querySelector(".scent-title");
  scentTitle.textContent = "Accords:";

  const scentDisplay = card.querySelector(".scents");
  scentDisplay.innerHTML = "";

  allScents.forEach((scent) => {
    const s1 = document.createElement("Li");
    s1.textContent = `${scent.name}, Strength: ${scent.strength}/50`;
    scentDisplay.appendChild(s1);
  });

  // You can use console.log to help you debug!
  // View the output by right-clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  showCards();

  const searchBar = document.getElementById("search-bar"); 
  searchBar.addEventListener("input", (e) => {

    const searchString = e.target.value.toLowerCase();

    const filteredColognes = aC.filter((cologne) => {
      return cologne.name.toLowerCase().includes(searchString);
    });

    showCards(filteredColognes);
  });

  const mButton = document.getElementById("for-male"); 
  mButton.addEventListener("click", () => {
    const male = aC.filter((cologne) => {
      return cologne.gender === true;
    });
    showCards(male);
  });

  const fButton = document.getElementById("for-female"); 
  fButton.addEventListener("click", () => {
    const female = aC.filter((cologne) => {
      return cologne.gender === false;
    });
    showCards(female);
  });
});
