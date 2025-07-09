import { LitElement, html } from 'lit';

class StoryHeader extends LitElement {
  createRenderRoot() {
    return this; // light DOM agar Bootstrap berfungsi
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow" style="z-index: 1030;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">StoryApp</a>

          <!-- Hamburger Button -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Collapsible Menu -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/index.html">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/input.html">Input</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('story-header', StoryHeader);
