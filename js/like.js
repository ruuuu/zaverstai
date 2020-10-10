let heart = document.querySelector('.heart');//ншда кнпоку руку и сохранили  впеременную
//let counter = 0;
let likesNumber = document.querySelector('.likes-number'); //счетчи клайков



heart.onclick = function () { //обработчик  клика кнопки  Рука
    console.log(heart.classList.contains('added'));
    
    if(heart.classList.contains('added')){//если у элеменат етсь класс added, тюею лайк уже стоит
       likesNumber.textContent--;//записываем  значнеие счетчика в эдемент  span
    }
    else{
        likesNumber.textContent++;//записываем  значнеие счетчика в эдемент  span
        //heart.style.backgroundColor = '#FF2400';
    }
   

    heart.classList.toggle('added');//
    
}




