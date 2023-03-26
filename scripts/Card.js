import { handleKeyDown } from "./utils.js";

class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    return cardTemplate.querySelector(".card").cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });

    this._cardElement
      .querySelector(".card__button-trash")
      .addEventListener("click", () => {
        this._handleTrashClick();
      });

    this._cardElement
      .querySelector(".card__picture")
      .addEventListener("click", () => {
        this._handleCardImageClick();
      });
  }

  _handleLikeClick() {
    this._cardElement
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_active");
  }

  _handleTrashClick() {
    this._cardElement.remove();
  }

  _handleCardImageClick() {
    const popupZoom = document.querySelector(".popup_type_zoom");
    const imageZoom = popupZoom.querySelector(".zoom__picture");
    const captionZoom = popupZoom.querySelector(".zoom__caption-text");

    imageZoom.src = this._link;
    imageZoom.alt = this._name;
    captionZoom.textContent = this._name;
    popupZoom.classList.toggle("popup_visible");
    document.addEventListener("keydown", handleKeyDown);
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector(".card__picture").src = this._link;
    this._cardElement.querySelector(".card__picture").alt = this._name;
    this._cardElement.querySelector(".card__caption-text").textContent =
      this._name;
    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
