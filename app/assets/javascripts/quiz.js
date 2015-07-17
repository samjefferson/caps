
//Multidimensional array to store questions and answers
// var capitals [country, capital, difficulty level]
var capitals = 
[["the United Kingdom", "London", 0],
["France", "Paris", 0],
["Germany", "Berlin", 0],
["Spain", "Madrid",0],
["Portugal", "Lisbon",0],
["Ireland", "Dublin",0],
["Northen Ireland", "Belfast",0],
["the United States of America", "Washington D.C.",0],
["Italy", "Rome", 0],
["Japan", "Tokyo", 0],
["Poland", "Warsaw", 1],
["Austria", "Vienna", 1],
["Sweden", "Stockholm", 1],
["Norway", "Oslo", 1],
["Finland", "Helsinki", 1],
["Australia", "Canberra", 1],
["New Zealand", "Wellington", 1],
["Iraq", "Baghdad", 1],
["Canada", "Ottawa",1],
["China", "Beijing", 1],
["India", "New Delhi", 1],
["Egypt", "Cairo", 1],
["Belguim", "Brussels", 1],
["Argentina", "Buenos Aires", 2],
["Brazil", "Brisilia", 2],
["South Africa", "Pretoria", 2],
["Thailand", "Bangkok", 2],
["Ukraine", "Kiev", 2],
["Jamaica", "Kingston", 2],
["Pakistan", "Islamabad", 2],
["Morocco", "Rabat", 3],
["Iceland", "Reykjavik", 2],
["Turkey", "Ankara", 2],
["Indonesia", "Jakarta", 3],
["Colombia", "Bogota", 3],
["Peru", "Lima", 3],
["Venezuela", "Caracas", 3],
["Somalia", "Mogadishu", 3],
["Haiti", "Port au Prince", 3],
["Iran", "Tehran", 3],
["Chile", "Santiago", 3],
["Bolivia", "Le Paz", 4],
["Uraguay", "Montevideo", 4],
["Paraguay", "Asuncion", 4],
["Gambia", "Banjul", 4],
["Qatar", "Doha", 4],
["Uganda", "Kampala", 4],
["Angola", "Luanda", 4],
["Oman", "Muscat", 4],
["Niger", "Niamey", 4],
["Puerto Rico", "San Juan", 4],
["the British Virgin Islands", "Road Town", 5],
["Kiribati", "Tarawa Atoll", 5],
["Laos", "Vientiane", 5],
["Burkina Faso", "Ouagadougou", 5],
["Eritea", "Asmara", 5],
["Denmark", "Copenhagen", 2],
["Dominican Republic", "Santo Domingo", 4],
["Afganistan", "Kabul", 2],
["Albania", "Tirana", 3],
["Andorra", "Andorra la Vella", 2],
["Antigua and Barbuda", "Saint John's", 4],
["Armenia", "Yerevan", 3],
["Azerbaijan", "Baku", 3],
["the Bahamas", "Nassau", 4],
["Bahrain", "Manama", 4],
["Bangladesh", "Dhaka", 3],
["Barbados", "Bridgetown", 2],
["Belarus", "Minsk", 2],
["Belize", "Belmopan", 5],
["Benin", "Porto-Novo", 5],
["Bhutan", "Thimphu", 5],
["Bosnia and Herzegovina", "Sarajevo", 3],
["Botswana", "Gaborone", 5],
["Brunei", "Bandar Seri Begawan", 5],
["Bulgaria", "Sofia", 3],
["Burundi", "Bujumbura", 5],
["Cambodia", "Phnom Penh", 4],
["Cameroon", "Yaounde", 4],
["Central African Republic", "Bangui", 5],
["Chad", "N'Djamena", 5],
["Comoros", "Moroni", 5],
["the Republic of the Congo", "Brazzaville", 5],
["the Democratic Republic of Congo", "Kinshasa", 4],
["the Ivory Coast", "Yamoussoukro", 5],
["Croatia", "Zagreb", 2],
["Cuba", "Havanna", 2],
["Cyprus", "Nicosia", 3],
["Czech Republic", "Prague", 2],
["Djibouti", "Djibouti", 2],
["Dominica", "Roseau", 5],
["East Timor", "Dili", 5],
["Equador", "Quito", 3],
["El Salvador", "San Salvador", 2],
["Equatorial Guinea", "Malabo", 5],
["Estonia", "Talinn", 3],
["Ethiopia", "Addis Ababa", 4],
["Fiji", "Suva", 4],
["Gabon", "Libreville", 5],
["Georgia", "Tbilisi", 5],
["Ghana", "Accra", 4],
["Grenada", "Saint George's", 5],
["Guatemala", "Guatemala City", 1],
["Guinea", "Conakry", 5],
["Guinea-Bissau", "Bissau", 2],
["Guyana", "Georgetown", 4],
["Honduras", "Tegucigalpa", 5],
["Hungary", "Budapest", 2],
["Isreal", "Jerusalem", 2],
["Jordan", "Amman", 4],
["Kazakhstan", "Astana", 4],
["Kenya", "Nairobi", 3],
["North Korea", "Pyongyang", 3],
["South Korea", "Seoul", 3],
["Kosovo", "Pristina",  5],
["Kuwait", "Kuwait City", 2],
["Kyrgyzstan", "Bishkek", 5],
["Latvia", "Riga", 3],
["Liechtenstein", "Vaduz", 4],
["Lithuania", "Vilinus", 4],
["Luxembourg", "Luxembourg", 1],
["Macedonia", "Skopje", 4],
["Madagascar", "Antananarivo", 5],
["Malawi", "Lilongwe", 5],
["Malaysia", "Kuala Lumpur", 4],
["Maldives", "Male", 5],
["Mali", "Bamako", 5],
["Malta", "Valetta", 3],
["Marshall Islands", "Majuro", 5],
["Mauritania", "Nouakchott", 5],
["Mexico", "Mexico City", 1],
["the Federated States of Micronesia", "Palikir", 5],
["Moldova", "Chisinau", 4],
["Monaco", "Monaco", 1],
["Mongolia", "Ulaanbaatar", 4],
["Montenegro", "Podgorica", 5],
["Mozambique", "Maputo", 4],
["Myanmar (Adminstrative)", "Nay Pyi Taw", 5],
["Namibia", "Windhoek", 4],
["Nepal", "Kathmandu", 3],
["Netherlands", "Amsterdam", 2],
["Nicaragua", "Managua", 5],
["Nigeria", "Abuja", 3],
["Palau", "Melekeok", 5],
["Panama", "Panama City", 1],
["Papua New Guinea", "Port Moresby", 5],
["Philippines", "Manila", 3],
["Rwanda", "Kigali", 5],
["Saint Kitts and Nevis", "Basseterre", 5],
["Saint Lucia", "Castries", 5],
["Saint Vincent and the Grenadines", "Kingstown", 5],
["Samoa", "Apia", 5],
["San Marino", "San Marino", 2],
["Sao Tome and Principe", "Sao Tome", 2],
["Saudi Arabia", "Riyadh", 3],
["Senegal", "Dakar", 4],
["Serbia", "Belgrade", 3],
["Seychelles", "Victoria", 4],
["Sierra Leone", "Freetown", 3],
["Singapore", "Singapore", 1],
["Slovakia", "Bratislava", 2],
["Slovenia", "Llubljana", 3],
["Solomon Islands", "Honiara", 5],
["South Sudan", "Juba", 5],
["Sri Lanka", "Colombo", 4],
["Sudan", "Khartoum", 4],
["Suriname", "Paramaribo", 5],
["Swaziland", "Mbabane", 5],
["Switzerland", "Bern", 2],
["Syria", "Damascus", 3],
["Taiwan", "Taipei", 4],
["Tajikistan", "Dunshanbe", 5],
["Tanzania", "Dar es Salaam", 4],
["Togo", "Lome", 5],
["Tonga", "Nuku'alofa", 5],
["Trinidad and Tobago", "Port-of-Spain", 4],
["Tunisia", "Tunis", 3],
["Turkmenistan", "Ashgabat", 5],
["Tuvalu", "Vaiaku Village", 5],
["United Arab Emirites", "Abu Dhabi", 3],
["Uzbekistan", "Tashkent", 5],
["Vanuatu", "Port-Vila", 5],
["Vatican City", "Vatican City", 2],
["Vietnam", "Hanoi", 3],
["Yemen", "Sanaa", 4],
["Zambia", "Lusaka", 5],
["Zimbabwe", "Harare", 3]

];

var level = 0;
var levelCorrect = 0;
var usedNumbers = [];
var level = 0;
var currentAnswers = [];
var buttonArray = [];
var questionNumber;
var correct = 0;
var attempts = 0;
var scoreTotal = 0;
var score;
var interval;

function loadInterval(){

	interval = setInterval(function()
				{
					scoreReducer()
				}, 100);
}

function scoreReset(){
	score = 1000;
}

function stopInterval(){
	clearInterval(interval);
}
function scoreReducer(){
	document.getElementById("potential").innerHTML = score;
	score = score - 5;
	
	if(score<0){
		score = 0;

		return score;
	}
}
//allows games to increase level when a certain number of correct answers are reached or there are no more wuestions in that level

function levelUp()
	{
		if((level==0)&&(levelCorrect== 3))
			{ level++;
			levelCorrect = 0;	
		}
		if((level==1)&&(levelCorrect== 4))
			{ level++;
				levelCorrect = 0;
		}
		if ((level==2)&&(levelCorrect== 4)){
			level++;
			levelCorrect = 0;
		}
		
		if((level==3)&&(levelCorrect== 4))
			{ level++;
				levelCorrect = 0;
		}
		if ((level==4)&&(levelCorrect== 3))
			{ level++;
				levelCorrect = 0
		}

}

function questionSelect(levelNumber){



	var currentAnswersTwo=currentAnswers;

	for(var i=0; i<currentAnswersTwo.length; i++){
		if(capitals[currentAnswersTwo[i]][2]== levelNumber){
			questionNumber = currentAnswersTwo[i];
		}
	}


}



function answersSelect(levelNumber){

	var uniqueAnswer;
	var newAnswerInt;
	var levelCorrect = false;
	var counter = 0;

	while(levelCorrect == false){
		currentAnswers = [];
		
	
		while (currentAnswers.length < 4){
			uniqueAnswer = true;
			newAnswerInt = Math.floor(Math.random() * capitals.length);
			//loop through unsednumber array to check if it has already been answered correctly
			for(var u=0; u<usedNumbers.length; u++){
				if(newAnswerInt== usedNumbers[u]){
					uniqueAnswer = false;
				}
			}	
			//Loop through array of selected songs to check unique.
			for(var j=0; j<currentAnswers.length; j++){
				if (newAnswerInt == currentAnswers[j]){
					uniqueAnswer = false;
				}
			}
			if (uniqueAnswer == true) {
				currentAnswers.push(newAnswerInt);
			}
		}



		for (var k=0; k<currentAnswers.length; k++){
			if (capitals[currentAnswers[k]][2]== levelNumber){
				counter++;
			}
		}
		if(counter>0){
			levelCorrect = true;
		}
	}
	
}

function fillButtons(){
	

	var currentAnswersThree = currentAnswers;

	var uniqueButton;
	buttonArray = [];
	var butRand;

	while(buttonArray.length<4){
		uniqueButton = true;
		butRand = Math.floor(Math.random()*4);
		for(var p=0; p<buttonArray.length; p++){
			if(butRand==buttonArray[p]){
				uniqueButton=false;
			}
		}

		if(uniqueButton == true){
			buttonArray.push(butRand);
		}
		

	}
	

	document.getElementById("buttonOne").value = (capitals[currentAnswersThree[buttonArray[0]]][1]);
	document.getElementById("buttonTwo").value = (capitals[currentAnswersThree[buttonArray[1]]][1]);
	document.getElementById("buttonThree").value = (capitals[currentAnswersThree[buttonArray[2]]][1]);
	document.getElementById("buttonFour").value = (capitals[currentAnswersThree[buttonArray[3]]][1]);

}

function fillQuestion(levelNumber){



	var questi = document.getElementById("capital");

	questi.innerHTML = (capitals[questionNumber][0]);

	


}

function scoreCounter(){
	document.getElementById("correct").innerHTML = correct;
	document.getElementById("attempts").innerHTML = attempts;
	document.getElementById("score").innerHTML = scoreTotal;
	document.getElementById("level").innerHTML = level + 1;
}

function loadGame(){
	scoreReset();
	
	answersSelect(level);
	questionSelect(level);
	fillQuestion(level);
	fillButtons();
	loadInterval();
	scoreCounter();
	
}

function checkAnswer(){
	
	attempts++;
	
	levelUp();
	var counterCheck;
	
	for(var q=0; q<buttonArray.length; q++){
		if(currentAnswers[buttonArray[q]]==questionNumber){
			counterCheck= q;
			
		}
	}
	
	return counterCheck;
}

function clickButOne(){

	stopInterval();
	
	var numberOne = checkAnswer();
	if(numberOne==0){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			scoreTotal = scoreTotal + score;
			usedNumbers.push(questionNumber);
	}
	if(numberOne!=0){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}
	if(attempts<25){
		loadGame();
	}
	if(attempts==25){
		endQuiz();
	}

}

function clickButTwo(){
		stopInterval();
	var numberTwo = checkAnswer();
	if(numberTwo==1){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			scoreTotal = scoreTotal + score;
			usedNumbers.push(questionNumber);
	}
	if(numberTwo!=1){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}

	if(attempts<25){
		loadGame();
	}
	if(attempts==25){
		endQuiz();
	}
}
function clickButThree(){
		stopInterval();
	var numberThree = checkAnswer();
	if(numberThree==2){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			scoreTotal = scoreTotal + score;
			usedNumbers.push(questionNumber);
	}
	if(numberThree!=2){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}
	if(attempts<25){
		loadGame();
	}
	if(attempts==25){
		endQuiz();
	}
}

function clickButFour(){
		stopInterval();
	var numberFour = checkAnswer();
	if(numberFour==3){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			scoreTotal = scoreTotal + score;
			usedNumbers.push(questionNumber);
	}
	if(numberFour!=3){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}
	if(attempts<25){
		loadGame();
	}
	if(attempts==25){
		endQuiz();
	}
}

function endQuiz(){
	scoreCounter();
	document.getElementById("endMes").innerHTML = ("Congratulations you have completed the quiz, your score is "+scoreTotal+".");
	document.getElementById('endForm').style.display = "inline";

	$('#finalScore').val(scoreTotal);

	document.getElementById("scorePassTwo").value = (scoreTotal);
}

function beginQuiz(){
	document.getElementById("intro").style.display = "none";
	document.getElementById("quiz-title").innerHTML = ("The Capital Cities Quiz");	
		loadGame();
		document.getElementById("quiz").style.display = "block";
}




