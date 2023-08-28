import { LitElement, html, css } from 'lit';
import './Icon.js';

class Character extends LitElement {
  static properties = {
    character: { type: Object }
  };

  connectedCallback() {
    super.connectedCallback();
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 0 20px #000;
      background: #32343e;
      padding: 5px;
    }

    .content-char {
      padding: 0 15px;
      color: #d7d7d7;
    }

    .content-char h2 {
      font-size: 1.8rem;
      margin-top: -5px;
    }

    .info {
      margin-top: -20px;
    }

    .columns {
      display: flex;
      align-items: baseline;
      height: 30px;
    }

    .category {
      width: 50px;
      color: #8ca45b;
      font-size: 0.8rem;
    }

    .male {
      color: #00d9ff;
    }

    .female {
      color: pink;
    }

    .title {
      display: flex;
      align-items: center;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      margin-right: 20px;
    }

    @media (min-width: 600px) {
      img {
        display: none;
      }
    }
  `;

  render() {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    return html`
      <style>
        .chr-img {
          display: none;
        }

        @media (min-width: 600px) {
          .chr-img {
            display: block;
            background: url(${this.character.image});
            width: 200px;
            height: 200px;
            background-size: cover;
            background-position: center;
            border-radius: 5px;
          }
        }
      </style>
      <div class="chr-img"></div>
      <div class="content-char">
        <div class="title">
          <img src=${this.character.image} alt=${this.character.name} />
          <h2>${this.character.name}</h2>
        </div>
        <div class="info">
          <div class="columns">
            <div class="category">
              <p>Gender:</p>
            </div>
            <div>
              <p>
                ${capitalize(this.character.gender)}
                ${this.character.gender === 'Male' ||
                this.character.gender === 'Female'
                  ? html`
                      <custom-icon
                        class="${this.character.gender === 'Male'
                          ? 'male'
                          : 'female'}"
                        classname="${this.character.gender === 'Male'
                          ? 'fa-mars'
                          : 'fa-venus'}"
                      ></custom-icon>
                    `
                  : html``}
              </p>
            </div>
          </div>

          <div class="columns">
            <div class="category">
              <p>Species:</p>
            </div>
            <div>
              <p>${capitalize(this.character.species)}</p>
            </div>
          </div>

          <div class="columns">
            <div class="category">
              <p>Status:</p>
            </div>
            <div>
              <p>${capitalize(this.character.status)}</p>
            </div>
          </div>

          <div class="columns">
            <div class="category">
              <p>Origin:</p>
            </div>
            <div>
              <p>${capitalize(this.character.origin.name)}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('character-card', Character);
