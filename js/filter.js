let articles = document.querySelectorAll('.article-item');//нашли все эелменты с классом article-item


let select = document.querySelector('select');// Находим выпадающий список по тэгу select

let filter = document.querySelector('.filter');//нашли выпадающий спсико


//console.log(select[2].value);//выдает 3ий ой элемент спсика




filter.onchange = function () {// обработчик списка select, срабатывает, когда пользователь выбирает новое значение из выпадающего списка.
    for (let article of articles) { //перебрать все элементы в коллекции articles

        if(article.dataset.category !== filter.value && filter.value !== 'all'){//если категория  у текущего artcile  == выранному значению в спсике
            article.classList.add('hidden');
        }
        else{
            article.classList.remove('hidden');//для тех artcile   укотрых был класс hidden на предыдущих итерациях
        }
        
    }


    //console.log(filter.value);//введет то, чо выберем из списка
};