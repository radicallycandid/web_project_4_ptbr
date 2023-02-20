const popup = document.querySelector(".popup");
const buttonEditProfile = document.querySelector(".profile__button-edit");
const buttonCloseForm = document.querySelector(".edit-form__button-close");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const profileForm = document.querySelector(".edit-form");
const profileFormName = document.querySelector(".edit-form__field_type_name");
const profileFormBio = document.querySelector(".edit-form__field_type_bio");
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

function addCard(imageTitle, imageUrl) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__picture").src = imageUrl;
  cardElement.querySelector(".card__caption-text").textContent = imageTitle;

  cardElement
    .querySelector(".card__button-like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("card__button-like_active");
    });

  cardContainer.prepend(cardElement);
}

initialCards.forEach(function (card) {
  addCard(card.name, card.link);
});

addButton.addEventListener("click", function () {
  const artist = document.querySelector(".input__text_type_artist");
  const title = document.querySelector(".input__text_type_title");

  addSong(artist.value, title.value);
  renderHasSongs();

  artist.value = "";
  title.value = "";
});

function toggleForm() {
  profileFormName.value = profileName.textContent;
  profileFormBio.value = profileBio.textContent;
  popup.classList.toggle("popup_visible");
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileFormName.value;
  profileBio.textContent = profileFormBio.value;
  popup.classList.remove("popup_visible");
}

buttonEditProfile.addEventListener("click", toggleForm);
buttonCloseForm.addEventListener("click", toggleForm);
profileForm.addEventListener("submit", handleFormSubmit);

const likeButtons = document.querySelectorAll(".card__button-like");

Array.from(likeButtons).forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("card__button-like_active");
  });
});
