import { LitElement, html, css } from 'lit-element';

class FirstLastPage extends LitElement {
  static properties = {
    page: { type: Number },
    disabled: { type: Boolean }
  };

  static styles = css`
    .page {
      border-radius: 35px;
      background: #fff;
      color: #262830;
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
    }

    .page-active:hover {
      background-color: #8ca45b;
      cursor: pointer;
    }
  `;

  render() {
    return html`<div class="page ${!this.disabled && 'page-active'}">
      ${this.page}
    </div>`;
  }
}

customElements.define('firstlast-page', FirstLastPage);
