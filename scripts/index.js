
const editButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close");

let profileName = document.querySelector(".profile__name")  
let profileAbout = document.querySelector(".profile__about")
let inputName = document.querySelector(".popup__input_type_name")
let inputAbout = document.querySelector(".popup__input_type_about")


const handleEditButtonClick = () => {
  inputName.value = profileName.textContent
  inputAbout.value = profileAbout.textContent
  popup.classList.add("popup_opened");
};

const handlePopupCloseClick = () => {
  popup.classList.remove("popup_opened");
};

editButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handlePopupCloseClick);

const saveForm = document.querySelector(".popup__content");
 function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value
  profileAbout.textContent = inputAbout.value
  handlePopupCloseClick();
 };
 saveForm.addEventListener("submit", handleFormSubmit); 

 console.log(saveForm)