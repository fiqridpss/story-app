import "../sass/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import getData from "../data/data";

// Register Lit components
import '../components/StoryCard.js';
import '../components/StoryHeader.js';
import '../components/StoryFooter.js';
import '../components/StoryModal.js';
import '../components/StoryButton.js';

const container = document.querySelector("#story-container");

if (container) {
  getData().then((data) => {
    if (data && data.listStory) {
      data.listStory.forEach(({ name, photoUrl, description, createdAt }) => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
          <story-card 
            name="${name}" 
            photoUrl="${photoUrl}" 
            description="${description}" 
            createdAt="${createdAt}">
          </story-card>
        `;
        container.appendChild(card);
      });
    }
  });
}

