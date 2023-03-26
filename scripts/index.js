import { handleKeyDown, isVisible, openPopup, closePopup } from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const overlayEditProfile = popupEditProfile.querySelector(".popup__overlay");
const buttonCloseEditProfile = popupEditProfile.querySelector(".popup__close");
const formEditProfile = popupEditProfile.querySelector(".popup__form");
const formEditProfileName = formEditProfile.querySelector(
  ".popup__input_type_name"
);
const formEditProfileBio = formEditProfile.querySelector(
  ".popup__input_type_bio"
);

const profile = document.querySelector(".profile");
const profileEdit = profile.querySelector(".profile__edit");
const profileName = profile.querySelector(".profile__name");
const profileBio = profile.querySelector(".profile__bio");

formEditProfileName.value = profileName.textContent;
formEditProfileBio.value = profileBio.textContent;

function toggleFormEditProfile() {
  if (isVisible(popupEditProfile)) {
    closePopup(popupEditProfile);
  } else {
    formEditProfileName.value = profileName.textContent;
    formEditProfileBio.value = profileBio.textContent;
    openPopup(popupEditProfile);
  }
}

function handleFormSubmitEditProfile(event) {
  event.preventDefault();
  profileName.textContent = formEditProfileName.value;
  profileBio.textContent = formEditProfileBio.value;
  closePopup(popupEditProfile);
}

[profileEdit, buttonCloseEditProfile, overlayEditProfile].forEach((element) => {
  element.addEventListener("click", toggleFormEditProfile);
});

formEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

const buttonAddCard = profile.querySelector(".profile__add");
const popupAddCard = document.querySelector(".popup_type_add-card");
const overlayAddCard = popupAddCard.querySelector(".popup__overlay");
const buttonCloseAddCard = popupAddCard.querySelector(".popup__close");
const formAddCard = popupAddCard.querySelector(".popup__form");
const formAddCardPlace = formAddCard.querySelector(".popup__input_type_place");
const formAddCardUrl = formAddCard.querySelector(".popup__input_type_url");
const cardContainer = document.querySelector(".cards");

const popupZoom = document.querySelector(".popup_type_zoom");
const overlayZoom = popupZoom.querySelector(".popup__overlay");
const buttonCloseZoom = document.querySelector(".zoom__close");

function addCard(name, link) {
  const card = new Card(name, link, "#card-template");
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
}

const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
];

initialCards.forEach(function (card) {
  addCard(card.name, card.link);
});

function toggleFormAddCard() {
  if (isVisible(popupAddCard)) {
    closePopup(popupAddCard);
  } else {
    formAddCardPlace.value = "";
    formAddCardUrl.value = "";
    openPopup(popupAddCard);
  }
}

[buttonAddCard, buttonCloseAddCard, overlayAddCard].forEach((element) => {
  element.addEventListener("click", toggleFormAddCard);
});

function handleFormSubmitAddCard(event) {
  event.preventDefault();
  addCard(formAddCardPlace.value, formAddCardUrl.value);
  closePopup(popupAddCard);
}

formAddCard.addEventListener("submit", handleFormSubmitAddCard);

[buttonCloseZoom, overlayZoom].forEach((element) => {
  element.addEventListener("click", () => {
    closePopup(popupZoom);
  });
});

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formList = Array.from(document.querySelectorAll(config.formSelector));
formList.forEach((formElement) => {
  const formValidator = new FormValidator(config, formElement);
  formValidator.enableValidation();
});
