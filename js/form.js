let myforma = document.querySelector('.feedback-form');// форма Написать мне


let mytextarea = document.querySelector('.feedback-form__textarea');//текстариеа на главной станице

let myButtons = document.querySelectorAll('.show-more');//спсиок(коллекция) кнпок с классом .show-more на главной странице


mytextarea.oninput = function () { //обработсчик ввода символа в текстарию mytextarea на главной старнице
    
  if (mytextarea.value.length > 20) {//если ввели сообение больше 20 символов, то 
      mytextarea.classList.add('warning');//добавялем элементу textareaField класс warning
      myButtons[2].disabled = true;//дизейблим кнпоку submitButton 
      //myButtons[2].style.borderColor = "red";
      
      mytextarea.style.color = "red";//цвет ектста меняется на красный
      
  } 
  else {//если меньше 20 символов ввели, то
      mytextarea.classList.remove('warning');
      
      myButtons[2].disabled = false;//раздизейбливаем кнопку myButtons[2]
      
      //myButtons[2].style.borderColor = "black";//вметсо добавления элементу класса, меняем стиль
      mytextarea.style.color = "black";//вметсо добавления элементу класса, меняем стиль
     
  }
    
}

//mytextarea.value = '';