const popup = document.querySelector(".popup");
const buttonEditProfile = document.querySelector(".profile__button-edit");
const buttonCloseForm = document.querySelector(".edit-form__button-close");
const buttonUpdate = document.querySelector(".edit-form__button-submit");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const form = document.querySelector(".edit-form");
const formName = document.querySelector(".edit-form__field_type_name");
const formBio = document.querySelector(".edit-form__field_type_bio");

function toggleForm() {
  formName.value = profileName.textContent;
  formBio.value = profileBio.textContent;
  popup.classList.toggle("popup_visible");
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileBio.textContent = formBio.value;
  popup.classList.remove("popup_visible");
}

buttonEditProfile.addEventListener("click", toggleForm);
buttonCloseForm.addEventListener("click", toggleForm);
form.addEventListener("submit", handleFormSubmit);

const likeButtons = document.querySelectorAll(".card__button-like");

Array.from(likeButtons).forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("card__button-like_active");
  });
});
