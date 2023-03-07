const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const editButton = document.querySelector(".profile__button-edit");
const addButton = document.querySelector(".profile__button-add");
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup-add");
const createButton = document.querySelector(".popup-add__create");
const closeAddButton = document.querySelector(".popup-add__close");
const likeButton = document.querySelectorAll(".element__button"); 
const closeButtons = document.querySelectorAll(".popup__close");
const elementsContainer = document.querySelector(".element");
const template = document.getElementById('template-item');
const newItemImage = template.querySelector('.element__image');



let profileName = document.querySelector(".profile__name")  
let profileAbout = document.querySelector(".profile__about")
let inputName = document.querySelector(".popup__input_type_name")
let inputAbout = document.querySelector(".popup__input_type_about")
let newPlaceName = document.querySelector(".popup-add__input_type_name")
let newPlaceLink = document.querySelector(".popup-add__input_type_link") 

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

editButton.addEventListener("click", handleEditButtonClick);
addButton.addEventListener("click", handleAddButtonClick);


const saveForm = document.querySelector(".popup__content");
 function handleSaveFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value
  profileAbout.textContent = inputAbout.value
  handlePopupCloseClick();
 };
 saveForm.addEventListener("submit", handleSaveFormSubmit); 

 likeButton.forEach(button =>{
  button.addEventListener('click', like)
})

//лайк
 function like(){
   if(this.classList.contains('element__button_active')){
      this.classList.remove("element__button_active");
   }else{
      this.classList.add("element__button_active");
   }
 }
//

const deleteButtons = document.querySelectorAll(".element__delete");

const handleDelete = (evt) => {
  evt.target.closest('.element__item').remove();
};

deleteButtons.forEach(button =>{
  button.addEventListener('click', handleDelete)
})


const createForm = document.querySelector(".popup-add__content");
 function handleCreateFormSubmit(evt) {
 evt.preventDefault();
 const inputName = document.querySelector('.popup-add__input_type_name');
 const inputLink = document.querySelector('.popup-add__input_type_link');
 const name = inputName.value
 const link = inputLink.value
 const newCard = getItemElement({ name, link });
 elementsContainer.append(newCard);
 handlePopupCloseClick();
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
  deleteButton.addEventListener('click', handleDelete)
  likeButton.addEventListener('click', like)
  return newItemElement;
  
}

 initialCards.forEach(card => {
  const newCard = getItemElement(card);
  elementsContainer.append(newCard);
 }); 

 const elementImages = document.querySelectorAll(".element__image");
 const popupImage = document.querySelector(".popup-image");
 const popupPhoto = document.querySelector(".popup__photo");
 const popupImageTitle = document.querySelector(".popup__title");
 
 const handleZoomPhotoClick = (evt) => {
   popupImage.classList.add("popup_opened");
   popupPhoto.src = evt.target.src;
   popupImageTitle.textContent = evt.target.alt;
 };
 
 //elementImage.addEventListener("click", handleZoomPhotoClick);
 elementImages.forEach(image =>{
  image.addEventListener('click', handleZoomPhotoClick)
});