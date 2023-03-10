const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
const buttonOpenAddCardPopup = document.querySelector(".profile__button-add");
const popup = document.querySelector(".popup");
const popupAddCard = document.querySelector(".popup-add");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const likeButton = document.querySelectorAll(".element__button"); 
const buttonsClose = document.querySelectorAll(".popup__close");
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

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

const openEditProfileForm = () => {
    openPopup(popupEditProfile);
    inputName.value = profileName.textContent
    inputAbout.value = profileAbout.textContent
  };

const openAddCardForm = () => {
    openPopup(popupAddCard);
};

const closePopup = (popup) => { 
  popup.classList.remove("popup_opened");  
};

// buttonsClose.forEach(button =>{ 
//   button.addEventListener('click', () => closePopup(popup)); 
// }); 
buttonsClose.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const popupItem = button.closest('.popup');
    closePopup(popupItem);
  });
});

const handleZoomPhotoClick = (evt) => {
  openPopup(popupImage);
  popupPhoto.src = evt.target.src;
  popupPhoto.alt = evt.target.alt;
  popupImageTitle.textContent = evt.target.alt;
};

const formEditProfile = document.getElementById('popup__content');
 function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value
  profileAbout.textContent = inputAbout.value
  closePopup(popupEditProfile)
  
 };
 formEditProfile.addEventListener("submit", submitEditProfileForm); 

const deleteCard = (evt) => {
  evt.target.closest('.element__item').remove();
};

const formAddCard = document.querySelector(".popup-add__content");
 function submitAddCardForm(evt) {
 evt.preventDefault();
 const name = inputNamed.value
 const link = inputLink.value
 const newCard = getItemElement({ name, link });
 elementsContainer.prepend(newCard);
 closePopup(popupAddCard);
 formAddCard.reset();
 
};
formAddCard.addEventListener("submit", submitAddCardForm);

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
  deleteButton.addEventListener('click', deleteCard)
  likeButton.addEventListener('click', toggleLike)
  return newItemElement; 
}

 initialCards.forEach(card => {
  const newCard = getItemElement(card);
  elementsContainer.append(newCard);
 }); 
 
function toggleLike(){
  if(this.classList.contains('element__button_active')){
     this.classList.remove("element__button_active");
  }else{
     this.classList.add("element__button_active");
  }
}

buttonOpenEditProfilePopup.addEventListener("click", openEditProfileForm);
buttonOpenAddCardPopup.addEventListener("click", openAddCardForm);
