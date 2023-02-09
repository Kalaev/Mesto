const likeButtons = document.querySelectorAll(".like__button"); //Объявил констанцию лайкающих кнопок, что она в html называется классом like__button//

likeButtons.forEach(button =>{ //лайкающие кнопки их инструкция кнопка повешенная на клик теперь она называется лайк//
    button.addEventListener('click', like)
})

function like(){//работать лайк будет так://
    if(this.classList.contains('like__button_active')){//если кликнув там будет лайк актив,... //
        this.classList.remove("like__button_active");//...remove его удалит//
    }else{
        this.classList.add("like__button_active");//в иных случаях(когда не актив)add сделает его актив//
    }
}


const aboutButton = document.querySelector(".profile__edit-button");//объявил кнопку в профиле назвал ниже две переменные//
let profileName
let profileAbout

let inputName = document.querySelector(".popup__name")//объявил, что инпутНэйм это данные в классе попап нэйм//
let inputAbout = document.querySelector(".popup__about")

const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup_close");

const saveButton = popup.querySelector(".popup_save");
 saveButton.addEventListener('click', save);
 function save(){
    document.querySelector(".profile__name").textContent = inputName.value//тут я сделал так, чтоб функция сохранить брала данные (value) из класса профильНэйм//
    document.querySelector(".profile__about").textContent = inputAbout.value
    popup.classList.remove("popup_opened");
 }

const toggleOpenPopup = () => {
  popup.classList.toggle("popup_opened");
  profileName = document.querySelector(".profile__name").textContent
  inputName.value = profileName//тут инпут дает данные в профильНэйм и поэтому при сохранении они отображаются//
  profileAbout = document.querySelector(".profile__about").textContent
  inputAbout.value = profileAbout
};



const handleAboutButtonClick = () => {
  toggleOpenPopup();
};

const handleCloseButtonClick = () => {
  toggleOpenPopup();
};

const handleOverlyClick = (event) => {
  if (event.target === event.currentTarget) {
    toggleOpenPopup();
  }
};

aboutButton.addEventListener("click", handleAboutButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);

popup.addEventListener("click", handleOverlyClick);

