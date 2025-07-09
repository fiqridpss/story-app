import { LitElement, html } from 'lit';

class StoryModal extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="infoModalLabel">Tentang Story App</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Ini adalah proyek sekaligus pembelajaran untuk menampilkan cerita.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('story-modal', StoryModal);
