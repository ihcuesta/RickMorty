import { LitElement, html } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

class CustomIcon extends LitElement {
  static properties = {
    classname: { type: String }
  };

  static get styles() {
    return [Fontawesome];
  }

  render() {
    return html`<i class="fas ${this.classname}"></i> `;
  }
}

customElements.define('custom-icon', CustomIcon);
