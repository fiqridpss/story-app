import { LitElement, html, css } from 'lit';

class StoryButton extends LitElement {
  createRenderRoot() {
    return this; // Light DOM agar Bootstrap tetap berlaku
  }

  static styles = css`
    .button-wrapper {
      border: 2px dashed #0a95ad; 
      padding: 2rem;
      margin: 2rem auto;
      max-width: 400px;
      text-align: center;
      position: relative;
      background-color: #d0f0f8;
      border-radius: 12px;
    }

    .arrow-down {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      color: #0a95ad;
      animation: bounce 1.2s infinite;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(-8px);
      }
    }
  `;

  render() {
    return html`
      <div class="button-wrapper">
        <div class="arrow-down">⬇️</div>
        <button
          type="button"
          class="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target="#infoModal"
        >
          Lihat Info
        </button>
      </div>
    `;
  }
}

customElements.define('story-button', StoryButton);
