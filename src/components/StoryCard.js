import { LitElement, html, css } from "lit";

class StoryCard extends LitElement {
  static properties = {
    name: {},
    description: {},
    photoUrl: {},
    lat: {},
    lon: {},
    createdAt: {},
  };

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="card">
        <img class="card-img-top" src="${this.photoUrl}" alt="${this.name}" />
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <p class="card-text">${this.lat}</p>
          <p class="card-text">${this.lon}</p> 
        </div>
        <div class="card-footer text-muted">
          ${new Date(this.createdAt).toLocaleDateString()}
        </div>
      </div>
    `;
  }
}
customElements.define("story-card", StoryCard);
