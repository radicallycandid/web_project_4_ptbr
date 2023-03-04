// Functionality to edit profile

const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const overlayEditProfile = popupEditProfile.querySelector(".popup__overlay");
const buttonCloseEditProfile = document.querySelector(
  ".form__button-close_type_edit-profile"
);
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const formEditProfile = document.querySelector(".form_type_edit-profile");
const formEditProfileName = document.querySelector(".form__input_type_name");
const formEditProfileBio = document.querySelector(".form__input_type_bio");

function toggleFormEditProfile() {
  formEditProfileName.value = profileName.textContent;
  formEditProfileBio.value = profileBio.textContent;
  popupEditProfile.classList.toggle("popup_visible");
}

function handleFormSubmitEditProfile(event) {
  event.preventDefault();
  profileName.textContent = formEditProfileName.value;
  profileBio.textContent = formEditProfileBio.value;
  popupEditProfile.classList.remove("popup_visible");
}

[buttonEditProfile, buttonCloseEditProfile, overlayEditProfile].forEach(
  (element) => {
    element.addEventListener("click", toggleFormEditProfile);
  }
);

formEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

// Functionality to add and manage cards

const buttonAddCard = document.querySelector(".profile__button-add");
const popupAddCard = document.querySelector(".popup_type_add-card");
const overlayAddCard = popupAddCard.querySelector(".popup__overlay");
const buttonCloseAddCard = document.querySelector(
  ".form__button-close_type_add-card"
);
const formAddCard = document.querySelector(".form_type_add-card");
const formAddCardPlace = document.querySelector(".form__input_type_place");
const formAddCardUrl = document.querySelector(".form__input_type_url");
const cardContainer = document.querySelector(".cards");

const popupZoom = document.querySelector(".popup_type_zoom");
const overlayZoom = popupZoom.querySelector(".popup__overlay");
const imageZoom = popupZoom.querySelector(".zoom__picture");
const captionZoom = popupZoom.querySelector(".zoom__caption-text");
const buttonCloseZoom = document.querySelector(".zoom__button-close");

function addCard(imageTitle, imageUrl) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__picture").src = imageUrl;
  cardElement.querySelector(".card__picture").alt = imageTitle;
  cardElement.querySelector(".card__caption-text").textContent = imageTitle;

  // Make like button work by toggling modifier class
  cardElement
    .querySelector(".card__button-like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("card__button-like_active");
    });

  // Make remove button work by accessing parent element
  cardElement
    .querySelector(".card__button-trash")
    .addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });

  // Make zoom work
  cardElement
    .querySelector(".card__picture")
    .addEventListener("click", function (event) {
      imageZoom.src = imageUrl;
      imageZoom.alt = imageTitle;
      captionZoom.textContent = imageTitle;
      popupZoom.classList.toggle("popup_visible");
    });

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
  formAddCardPlace.value = "";
  formAddCardUrl.value = "";
  popupAddCard.classList.toggle("popup_visible");
}

function handleFormSubmitAddCard(event) {
  event.preventDefault();
  addCard(formAddCardPlace.value, formAddCardUrl.value);
  popupAddCard.classList.remove("popup_visible");
}

[buttonAddCard, buttonCloseAddCard, overlayAddCard].forEach((element) => {
  element.addEventListener("click", toggleFormAddCard);
});

formAddCard.addEventListener("submit", handleFormSubmitAddCard);

function hideZoomPopup() {
  popupZoom.classList.remove("popup_visible");
}

[buttonCloseZoom, overlayZoom].forEach((element) => {
  element.addEventListener("click", hideZoomPopup);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const popupVisible = document.querySelector(".popup_visible");
    if (popupVisible === popupEditProfile) {
      toggleFormEditProfile();
    } else if (popupVisible === popupAddCard) {
      toggleFormAddCard();
    } else if (popupVisible === popupZoom) {
      hideZoomPopup();
    }
  }
});
