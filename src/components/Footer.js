import { LitElement, html, css } from 'lit';

class Footer extends LitElement {
  static properties = {};

  static styles = css`
    footer {
      display: grid;
      place-items: center;
      width: 100vw;
      height: 50px;
      background: #151515;
      color: #949494;
      font-size: 0.8rem;
    }

    a {
      color: #8ca45b;
      text-decoration: none;
    }
  `;

  render() {
    return html`
      <footer>
        <p>
          Made with 👽 by
          <a
            href="https://www.linkedin.com/in/ivanherranzcuesta/"
            target="_blank"
            >Iván Herranz</a
          >
        </p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', Footer);
