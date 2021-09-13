function generateQuiz(questions,quizContainer,resultsContainer,submitButton){
	function showQuestions(questions,quizContainer){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			answers = [];
			for(letter in questions[i].answers){
				answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'+ '<br>'
			);
		}
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
		}
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions,quizContainer,resultsContainer){
		var answerContainers = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		for(var i=0; i<questions.length; i++){
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
	
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].style.color = 'lightgreen';
		} else{
			answerContainers[i].style.color = 'red';
		}
	}
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	


	showQuestions(questions,quizContainer);


	submitButton.onclick = function(){
		showResults(questions,quizContainer,resultsContainer);
	}


}

var myQuestions = [
	{
		question: "1. How many women and girls were rescued in 2018 by/with the assistance of Blue Dragon?",
		answers: {
			a: '70',
			b: '128',
			c: '112'
		},
		correctAnswer: 'b'
	},

	{
		question: "2. What the National Child Protection Hotline?",
		answers: {
			a: '111',
			b: '116',
			c: '118'
		},
		correctAnswer: 'a'
	},

	{
		question: "3. Who do traffickers usually target most?",
		answers: {
			a: '(The child of) A person they had/ have a feud with',
			b: 'Young adults in the large cities',
			c: 'Ethic minorities who are financially struggling'
		},
		correctAnswer: 'c'
	},

	{
		question: "4. What are the ways you can help with the prevention of human trafficking?"+'<br>'+"1.Provide victims with counselling"+'<br>'+"2.Build early warning systems"+'<br>'+"3.Tell them they were lucky and it could have been worst"+'<br>'+"4.Educate communities about the risks and issue"+'<br>'+"5.Help them confront their abusers",
		answers: {
			a: '2, 4, 5',
			b: '1, 2, 4',
			c: 'All of the above'
		},
		correctAnswer: 'b'
	},

	{
		question: "5. How many hours a day did the children who were exploited in sweatshops worked?",
		answers: {
			a: '18 hours',
			b: '10 hours',
			c: '14 hours'
		},
		correctAnswer: 'a'
	},

	{
		question: "6. What percentage of those who were trafficked was also sexually exploited?",
		answers: {
			a: '58%',
			b: '80%',
			c: '75%'
		},
		correctAnswer: 'b'
	},

	{
		question: "7. Which industries are currently exploiting children?"+'<br>'+
		"1. Illegal Mining"+'<br>'+"2. Working in sweatshops"+'<br>'+"3. Agriculture"+'<br>'+"4. Constructions"+'<br>'+"5. Domestic service",
		answers: {
			a: '1, 2, 4', 
			b: '2, 3, 5',
			c: 'All of the above'
		},
		correctAnswer: 'c'
	},

	{
		question: "8. How many offenders were prosecuted in 2017?",
		answers: {
			a: '245',
			b: '500',
			c: '350'
		},
		correctAnswer: 'a'
	},

	{
		question: "9. Where in Vietnam are these problems most prevalent?",
		answers: {
			a: 'HCMC Hanoi, Sapa, Lao Cai, Ha Giang',
			b: 'Lao Cai, Hue, Dien Bien HCMC, Dak Lak',
			c: 'Ha Giang, Hanoi, HCMC, Dien Bien, Hue'
		},
		correctAnswer: 'c'
	},

	{
		question: "10. Who can these traffickers be?",
		answers: {
			a: 'Someone you met online',
			b: 'A family friend/neighbor',
			c: 'Either of the above'
		},
		correctAnswer: 'c'
	},

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);