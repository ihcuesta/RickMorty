import { LitElement, html, css } from 'lit';
import './Character.js';
import './Pagination.js';

class CharactersList extends LitElement {
  static properties = {
    characters: { type: Array },
    currentPage: { type: Number },
    totalPages: { type: Number },
    loading: { type: Boolean }
  };

  connectedCallback() {
    super.connectedCallback();
    this.currentPage = 1;
  }

  async getCharacters(page = 1) {
    this.loading = true;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const jsonResponse = await response.json();
    this.characters = jsonResponse.results;
    console.log(this.characters);
    if (!this.totalPages || this.totalPages !== jsonResponse.info.pages) {
      this.totalPages = jsonResponse.info.pages;
    }
    this.loading = false;
  }

  static styles = css`
    .list-container {
      max-width: 1200px;
      margin: 30px auto;
      padding: 0 5%;
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr;
      box-sizing: border-box;
    }

    .loading {
      color: #8ca45b;
      font-size: 1.2rem;
      display: grid;
      place-items: center;
    }

    @media (min-width: 560px) {
      .list-container {
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      }
    }
  `;

  render() {
    return html`
      ${this.loading
        ? html`<div class="loading"><p>Loading...</p></div>`
        : html`<div class="list-container">
            ${this.characters?.map(
              character =>
                html`
                  <character-card .character=${character}></character-card>
                `
            )}
          </div>`}

      <custom-pagination
        .page=${this.currentPage}
        .totalPages=${this.totalPages}
        @first-page=${this.handleFirstPage}
        @prev-page=${this.handlePrevPage}
        @next-page=${this.handleNextPage}
        @last-page=${this.handleLastPage}
      ></custom-pagination>
    `;
  }

  handleFirstPage() {
    this.currentPage = 1;
  }

  handlePrevPage() {
    this.currentPage -= 1;
  }

  handleNextPage() {
    this.currentPage += 1;
  }

  handleLastPage() {
    this.currentPage = this.totalPages;
  }

  updated(props) {
    props.forEach((oldValue, propName) => {
      if (propName === 'currentPage') {
        this.getCharacters(this.currentPage);
      }
    });
  }
}

customElements.define('characters-list', CharactersList);
