console.log('Helo World!')

// 1 - string "рядок"
// 2 - number 4 5 6  номер
// 3 - boolean (true / false) так або ні
// 4 - null нічого
// 5 - indefined щось невизначено
// 6 - symbol 
// 7 - bigint числовий тип данних
//
// object = {}
// Array = []

// змінні -----

 //var string = "Стрічка!"; -- старий спосіб в сучасні розробці використовується дуже рідко,
 // має глобальну область видимості

 // let number = 333

 // const name = 'Vasilisa'

 


// Наше завдання
// знайти елемент
// відловити клік, прослухати клік
// взаємодіяти з кліком
//


const menuBtn = document.querySelector('.menu');

const menuItem = document.querySelector('.nav__list');

 menuBtn.addEventListener('click',() => {
    console.log('Дмитро клікнув на кнопку!!!')
    menuItem.classList.toggle('active');
    menuBtn.classList.toggle('active__btn')
 });

 //menuItem.classList.add('active'); - тільки додає клас
 //menuItem.classList.remove('active'); - тільки забирає клас
//menuItem.classList.toggle('active'); - і додає, і забирає клас
