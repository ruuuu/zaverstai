let commentForm = document.querySelector('.feedback-form-article');//форма

let comment_list = document.querySelector('.feedbacks__list');//ul спсиок комментариев

let nameField =  document.querySelector('.feedback-form__input-article');// input Имя

let textareaField =  document.querySelector('.feedback-form__textarea-atcicle');// textarera 


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
    
}

console.log(comment_list);

