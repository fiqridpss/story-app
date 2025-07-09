import { LitElement, html } from 'lit';

class StoryFooter extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer class="bg-dark text-white text-center text-lg-start mt-5">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6">
              <h5>Story App</h5>
              <p>Aplikasi sederhana untuk menampilkan cerita pengguna.</p>
            </div>
            <div class="col-lg-3">
              <h5>Menu</h5>
              <a class="text-white d-block" href="#">Dashboard</a>
              <a class="text-white d-block" href="#">Input</a>
            </div>
            <div class="col-lg-3">
              <h5>Kontak</h5>
              <a class="text-white d-block" href="#">Email</a>
              <a class="text-white d-block" href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div class="text-center p-3 bg-secondary">© 2025 Bangfiq</div>
      </footer>
    `;
  }
}
customElements.define('story-footer', StoryFooter);
