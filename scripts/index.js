const editButton = document.querySelector(".profile__button-edit");
const addButton = document.querySelector(".profile__button-add");
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_add-profile");
const createButton = document.querySelector(".popup_add__create");
const closeAddButton = document.querySelector(".popup_add__close");
const likeButton = document.querySelectorAll(".element__button"); 
const closeButtons = document.querySelectorAll(".popup__close");
const elementsContainer = document.querySelector(".element");
const template = document.getElementById('template-item');
const newItemImage = template.querySelector('.element__image');
const inputLink = document.querySelector('.popup__input_type_link');
const inputNamed = document.querySelector('.popup__input_type_named');
const profileName = document.querySelector(".profile__name");  
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const newPlaceName = document.querySelector(".popup__input_type_named");
const newPlaceLink = document.querySelector(".popup__input_type_link");
const deleteButtons = document.querySelectorAll(".element__delete");
const popupImage = document.querySelector(".popup-image");
const popupPhoto = document.querySelector(".popup__photo");
const popupImageTitle = document.querySelector(".popup__title");
const elementImages = document.querySelectorAll(".element__image");

const handleEditButtonClick = () => {
  inputName.value = profileName.textContent
  inputAbout.value = profileAbout.textContent
  popup.classList.add("popup_opened");
};

const handleAddButtonClick = () => {
  inputName.value = profileName.textContent
  inputAbout.value = profileAbout.textContent
  popupAdd.classList.add("popup_opened");
};

const handlePopupCloseClick = (evt) => {
  const popup = document.querySelector(".popup_opened");
  popup.classList.remove("popup_opened");
};

closeButtons.forEach(button =>{
  button.addEventListener('click', handlePopupCloseClick)
});
const handleZoomPhotoClick = (evt) => {
  popupImage.classList.add("popup_opened");
  popupPhoto.src = evt.target.src;
  popupImageTitle.textContent = evt.target.alt;
};


const saveForm = document.querySelector(".popup__content");
 function handleSaveFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value
  profileAbout.textContent = inputAbout.value
  handlePopupCloseClick();
 };
 saveForm.addEventListener("submit", handleSaveFormSubmit); 

const handleDelete = (evt) => {
  evt.target.closest('.element__item').remove();
};

const createForm = document.querySelector(".popup_add__content");
 function handleCreateFormSubmit(evt) {
 evt.preventDefault();
 const name = inputNamed.value
 const link = inputLink.value
 const newCard = getItemElement({ name, link });
 elementsContainer.prepend(newCard);
 handlePopupCloseClick();
 createForm.reset();
};
createForm.addEventListener("submit", handleCreateFormSubmit);

 const getItemElement = (data) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemImage = newItemElement.querySelector('.element__image');
  newItemImage.setAttribute('src', data.link);
  newItemImage.setAttribute('alt', data.name);
  const newItemTitle = newItemElement.querySelector('.element__text');
  newItemTitle.textContent = data.name;
  const deleteButton = newItemElement.querySelector('.element__delete');
  const likeButton = newItemElement.querySelector('.element__button');
  newItemImage.addEventListener('click', handleZoomPhotoClick)
  deleteButton.addEventListener('click', handleDelete)
  likeButton.addEventListener('click', likeCards)
  return newItemElement; 
}

 initialCards.forEach(card => {
  const newCard = getItemElement(card);
  elementsContainer.append(newCard);
 }); 
 
function likeCards(){
  if(this.classList.contains('element__button_active')){
     this.classList.remove("element__button_active");
  }else{
     this.classList.add("element__button_active");
  }
}

editButton.addEventListener("click", handleEditButtonClick);
addButton.addEventListener("click", handleAddButtonClick);
