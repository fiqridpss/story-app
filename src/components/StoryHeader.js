import { LitElement, html } from "lit";

class StoryHeader extends LitElement {
  createRenderRoot() {
    return this; // light DOM agar Bootstrap berfungsi
  }

  render() {
    return html`
      <nav
        class="navbar navbar-dark bg-dark fixed-top shadow"
        style="z-index: 1030;"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">StoryApp</a>

          <!-- Hamburger Button -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Offcanvas Menu -->
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                StoryApp
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" href="/index.html">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/input.html">Input</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/profil.html">Profil</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("story-header", StoryHeader);
