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

[profileEdit, buttonCloseEditProfile, overlayEditProfile].forEach((element) => {
  element.addEventListener("click", toggleFormEditProfile);
});

formEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

// Functionality to add and manage cards

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
const imageZoom = popupZoom.querySelector(".zoom__picture");
const captionZoom = popupZoom.querySelector(".zoom__caption-text");
const buttonCloseZoom = document.querySelector(".zoom__close");

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
