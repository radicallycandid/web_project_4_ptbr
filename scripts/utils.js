function isVisible(popup) {
  return popup.classList.contains("popup_visible");
}

function openPopup(popup) {
  popup.classList.add("popup_visible");
  document.addEventListener("keydown", handleKeyDown);
}

function closePopup(popup) {
  popup.classList.remove("popup_visible");
  document.removeEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    const popupVisible = document.querySelector(".popup_visible");
    closePopup(popupVisible);
  }
}

export { handleKeyDown, isVisible, openPopup, closePopup };
