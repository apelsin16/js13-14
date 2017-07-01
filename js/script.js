var data = {
   title: 'Тест по математике',
   questions: [
     {
       title: 'Выберите правильный ответ: 4 = ',
       answers: [' 3 + 1 ', ' 3 + 2 ', ' 2 + 2 '],
       correctAnswers: [1, 3]
     },
     {
       title: 'Выберите правильный ответ: 6 = ',
       answers: [' 3 + 3 ', ' 3 + 2 ', ' 4 + 2 ', ' 5 + 1 '],
       correctAnswers: [1, 3, 4]
     },
     {
       title: 'Выберите правильный ответ: 3 = ',
       answers: [' 2 + 2 ', ' 2 + 1 '],
       correctAnswers: [2]
     }
   ]
 };

localStorage.setItem('test', JSON.stringify(data));
var localTest = localStorage.getItem('test');

localTest = JSON.parse(localTest);
console.log(localTest);
