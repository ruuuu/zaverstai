let commentForm = document.querySelector('.feedback-form-article');//форма

let comment_list = document.querySelector('.feedbacks__list');//ul спсиок комментариев

let nameField =  document.querySelector('#name');// input Имя, взяли элемент по id

let textareaField =  document.querySelector('.feedback-form__textarea-atcicle');// textarea 

let submitButton = document.querySelector('.submit-button-article');//кнопка Отправить

let emailField = document.querySelector('#email');//Поле почта, взяли элемент по id






commentForm.onsubmit =  function(evt){//обрабочтик отправки формы комментария commentForm, после нажтия на кнопку Отправить, будуь выполняться то что напсиано в обработчкие
    evt.preventDefault();

    let newComment =  document.createElement('li');//создали li
    newComment.classList.add('feedbacks__item');

    let feedbacks_author = document.createElement('p');//создали p
    feedbacks_author.classList.add('feedbacks__author');
    feedbacks_author.textContent =  nameField.value;
    newComment.append(feedbacks_author); //p вложили в родитель li


    let feedbacks_text = document.createElement('p');//создали p
    feedbacks_text.classList.add('feedbacks__text');
    feedbacks_text.textContent = textareaField.value;
    newComment.append(feedbacks_text); //p вложили в родитель li



    comment_list.append(newComment); //добавялем элемент li newComment в  список  ul comment_list

    textareaField.value = ''; //очищем текстарию
    nameField.value = ''; //очищем поле Имя
    emailField.value = '';//очтщает поле Почта   
}

//console.log(comment_list);



textareaField.oninput = function () { //обработсчик ввода символа в текстарию textareaField на старнице Статья

    if (textareaField.value.length > 20) {//если ввели сообение в textareaField больше 20 символов, то 
        textareaField.classList.add('warning');//добавялем элементу textareaField класс warning
        submitButton.disabled = true;//дизейблим кнпоку submitButton 
        submitButton.textContent = "Нельзя отправлять данные, уменьши число символов";//текст на кнпоке
        textareaField.style.color = "red";//цвет ектста у textareaField заменяется на красный
    } 
    else {
        textareaField.classList.remove('warning');
        submitButton.disabled = false;
        submitButton.textContent = "Отправить";
        textareaField.style.color = "black";
    }

}



