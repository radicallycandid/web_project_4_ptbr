// Functionality to edit profile

const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const buttonCloseEditProfile = document.querySelector(
  ".form__button-close_type_edit-profile"
);
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const formEditProfile = document.querySelector(".form_type_edit-profile");
const formEditProfileName = document.querySelector(".form__field_type_name");
const formEditProfileBio = document.querySelector(".form__field_type_bio");

function toggleFormEditProfile() {
  formEditProfileName.value = profileName.textContent;
  formEditProfileBio.value = profileBio.textContent;
  if (popupEditProfile.style.opacity === "1") {
    popupEditProfile.style.opacity = "0";
  } else {
    popupEditProfile.style.opacity = "1";
  }
  popupEditProfile.classList.toggle("popup_visible");
}

function handleFormSubmitEditProfile(event) {
  event.preventDefault();
  profileName.textContent = formEditProfileName.value;
  profileBio.textContent = formEditProfileBio.value;
  popupEditProfile.style.opacity = "0";
  popupEditProfile.classList.remove("popup_visible");
}

buttonEditProfile.addEventListener("click", toggleFormEditProfile);
buttonCloseEditProfile.addEventListener("click", toggleFormEditProfile);
formEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

// Functionality to add and manage cards

const buttonAddCard = document.querySelector(".profile__button-add");
const popupAddCard = document.querySelector(".popup_type_add-card");
const buttonCloseAddCard = document.querySelector(
  ".form__button-close_type_add-card"
);
const formAddCard = document.querySelector(".form_type_add-card");
const formAddCardPlace = document.querySelector(".form__field_type_place");
const formAddCardUrl = document.querySelector(".form__field_type_url");
const cardContainer = document.querySelector(".cards");
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
const popupZoom = document.querySelector(".popup_type_zoom");
const zoomImg = popupZoom.querySelector(".zoom__picture");
const zoomP = popupZoom.querySelector(".zoom__caption-text");
const buttonCloseZoom = document.querySelector(".zoom__button-close");

function addCard(imageTitle, imageUrl) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__picture").src = imageUrl;
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
      zoomImg.src = imageUrl;
      zoomImg.alt = imageTitle;
      zoomP.textContent = imageTitle;
      popupZoom.classList.toggle("popup_visible");
    });

  cardContainer.prepend(cardElement);
}

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

buttonAddCard.addEventListener("click", toggleFormAddCard);
buttonCloseAddCard.addEventListener("click", toggleFormAddCard);
formAddCard.addEventListener("submit", handleFormSubmitAddCard);

buttonCloseZoom.addEventListener("click", function () {
  popupZoom.classList.remove("popup_visible");
});
