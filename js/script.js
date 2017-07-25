(function(){
  'use strict';
var data = {
    title: 'Тест по математике',
    questions: [
      {
        title: 'Какой из ответов равняется 4',
        answers: [' 2 + 2 ', ' 3 + 2 ', ' 3 + 1 '],
        correctAnswers: [1, 3]
      },
      {
        title: 'Какой из ответов равняется 6',
        answers: [' 3 + 3 ', ' 3 + 4 ', ' 1 + 5 ', ' 2 + 4 '],
        correctAnswers: [1, 3, 4]
      },
      {
        title: 'Какой из ответов равняется 3',
        answers: [' 2 + 2 ', ' 2 + 1 '],
        correctAnswers: [2]
      }
    ]
  };

function getBoolArray(answersArr, correctAnswerArr) {
       return _.map(answersArr, function (n,i) {
           return _.includes(correctAnswerArr, i+1);
       });
   }

function getCorrectAnswers(quetionsArray) {
        return _.flatMap(quetionsArray, function(item) {
            return getBoolArray(item.answers, item.correctAnswers);
        });
    }

var correctAnswers = getCorrectAnswers(data.questions);

localStorage.setItem('dataArray', JSON.stringify(data));
var test = localStorage.getItem('dataArray');
test = JSON.parse(test);

var container = $('#container'),
    source   = $("#entry-template").html(),
    template = Handlebars.compile(source),
    context = test,
    html    = template(context);

container.append(html);

var checkboxes = document.querySelectorAll('input[type="checkbox"]'),


    button = document.getElementById("button");


  $('#button').click(function(e) {
    var output = getAnswers(checkboxes);

     e.preventDefault();

      console.log(output);

    if (_.isEqual(correctAnswers, output) === true){
      $('#box').show().prepend('<p>Вы успешно прошли тест</p>');
       $('.button').click(function(){
          location.reload();
      //   $('#box').hide();
      //   document.getElementById("myForm").reset();

      });
    } else {
      $('#box').show().prepend('<p>Вы ошиблись. Попробуйте снова</p>');
      $('.button').click(function(){
         location.reload();
        //  $('#box').hide();
        //  document.getElementById("myForm").reset();
      });
    }
	});


function getAnswers(arr) {
	return _.map(arr, function(item) {
		return item.checked;
	});
}









})();
