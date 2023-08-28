import { LitElement, html, css } from 'lit';

class Header extends LitElement {
  static properties = {};

  static styles = css`
    header {
      width: 100vw;
      height: 100px;
      display: grid;
      place-items: center;
    }

    h1 {
      font-family: Rick;
      font-size: 2.2rem;
      color: #12abc3;
      -webkit-text-stroke: 1px #8ca45b;
      text-shadow: 0 0 10px #000;
    }

    @media (min-width: 600px) {
      header {
        height: 180px;
      }

      h1 {
        font-size: 4rem;
      }
    }
  `;

  render() {
    return html`
      <header>
        <h1>Rick and Morty Wiki</h1>
      </header>
    `;
  }
}

customElements.define('custom-header', Header);
