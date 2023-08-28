import { LitElement, html, css } from 'lit';
import './Icon.js';
import './FirstLastPage.js';

class Pagination extends LitElement {
  static properties = {
    page: { type: Number },
    totalPages: { type: Number }
  };

  connectedCallback() {
    super.connectedCallback();
  }

  static styles = css`
    .icon {
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
    }

    .icon:hover:not(.disabled) {
      color: #8ca45b;
    }

    .page {
      color: #fff;
      font-size: 1.5rem;
    }

    .pagination {
      width: 280px;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .disabled {
      opacity: 0.3;
      cursor: default;
    }
  `;

  render() {
    return html`
      <div class="pagination">
        <firstlast-page
          class="${this.page === 1 && 'disabled'}"
          .page=${1}
          .disabled="${this.page === 1}"
          @click="${() => this._firstPage()}"
        ></firstlast-page>
        <custom-icon
          class="icon ${this.page === 1 && 'disabled'}"
          classname="fa-chevron-left"
          @click="${() => this._previousPage()}"
        ></custom-icon>
        <span class="page">&nbsp;Page ${this.page}&nbsp;</span>
        <custom-icon
          class="icon ${this.page === this.totalPages && 'disabled'}"
          classname="fa-chevron-right"
          @click="${() => this._nextPage()}"
        ></custom-icon>
        <firstlast-page
          class="${this.page === this.totalPages && 'disabled'}"
          .page=${this.totalPages}
          .disabled="${this.page === this.totalPages}"
          @click="${() => this._lastPage()}"
        ></firstlast-page>
      </div>
    `;
  }

  _firstPage() {
    if (this.page !== 1) this.dispatchEvent(new CustomEvent('first-page'));
  }

  _previousPage() {
    if (this.page !== 1) this.dispatchEvent(new CustomEvent('prev-page'));
  }

  _nextPage() {
    if (this.page !== this.totalPages)
      this.dispatchEvent(new CustomEvent('next-page'));
  }

  _lastPage() {
    if (this.page !== this.totalPages)
      this.dispatchEvent(new CustomEvent('last-page'));
  }
}

customElements.define('custom-pagination', Pagination);
