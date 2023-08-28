import { LitElement, html, css } from 'lit';
import './components/Header.js';
import './components/Footer.js';
import './components/CharactersList.js';

class App extends LitElement {
  static properties = {};

  static styles = css`
    main {
      min-height: calc(100vh - 250px);
    }
  `;

  render() {
    return html`
      <div class="app">
        <custom-header></custom-header>
        <main>
          <characters-list></characters-list>
        </main>
        <custom-footer></custom-footer>
      </div>
    `;
  }
}

customElements.define('rick-morty', App);
