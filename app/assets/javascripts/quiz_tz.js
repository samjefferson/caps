function createUTC(zNum){
	//To use this function make sure to choose a number between -12 and 12.  This should either be
	//an integer or a decimal between -9 and 9 with .5 or .75 at the end.
	//  These values cover every capital city timezone. 

	var zNumStr = zNum.toString();
	var zNumIndex = zNumStr.indexOf(".5");
	var zNumIndexTwo = zNumStr.indexOf(".75");
  var zNumIndexThree = zNumStr.indexOf("-");
	var uTCString;
	var uTCSubString;
	var uTCSubStringEnd;


  //  this removes the minus from the string for easy process below
  if(zNumIndexThree != -1){
    zNumStr = zNumStr.replace("-", "");
  }
  // this adds the utc prefix
	if(zNum > 0){
		uTCSubString = 'UTC +';
	} else if(zNum < 0){
		uTCSubString = 'UTC -';
	} else{
		uTCSubString = 'UTC';
	}
	
	//this adds the suffix and converts decimals to time
	if((zNumIndex == -1)&&(zNumIndexTwo == -1)){
		if(zNumStr.length == 1){
			uTCSubStringEnd = "0"+zNumStr+":00";
		} else {
			uTCSubStringEnd = zNumStr+":00";
		}
	} else if(zNumIndex == -1){
		uTCSubStringEnd = "0"+(zNumStr.replace(".75", ":45"));
	} else {
		uTCSubStringEnd = "0"+(zNumStr.replace(".5", ":30"));
	}

	//this creates the finished string
	if(zNum == 0){
		uTCString = uTCSubString;
	} else{
	uTCString = uTCSubString+uTCSubStringEnd;
}
	return uTCString;
}

var capitalsTz = 
[[0 , "London", 0],
[1, "Paris", 0],
[1, "Berlin", 0],
[1, "Madrid",0],
[0, "Lisbon",0],
[0, "Dublin",0],
[0, "Belfast",0],
[-5, "Washington D.C.",0],
[1, "Rome", 0],
[9, "Tokyo", 0],
[1, "Warsaw", 1],
[1, "Vienna", 1],
[1, "Stockholm", 1],
[1, "Oslo", 1],
[2, "Helsinki", 1],
[10, "Canberra", 1],
[12, "Wellington", 1],
[3, "Baghdad", 2],
[-5, "Ottawa",2],
[8, "Beijing", 2],
[5.5, "New Delhi", 2],
[2, "Cairo", 2],
[1, "Brussels", 1],
[-3, "Buenos Aires", 3],
[-3, "Brisilia", 2],
[2, "Pretoria", 1],
[7, "Bangkok", 2],
[2, "Kiev", 1],
[-5, "Kingston", 3],
[5, "Islamabad", 3],
[0, "Rabat", 3],
[0, "Reykjavik", 1],
[2, "Ankara", 2],
[7, "Jakarta", 4],
[-5, "Bogota", 4],
[-5, "Lima", 3],
[-4.5, "Caracas", 3],
[3, "Mogadishu", 2],
[-5, "Port au Prince", 2],
[3.5, "Tehran", 2],
[-3, "Santiago", 3],
[-5, "Le Paz", 3],
[-3, "Montevideo", 3],
[-4, "Asuncion", 4],
[0, "Banjul", 5],
[3, "Doha", 4],
[3, "Kampala", 5],
[1, "Luanda", 4],
[4, "Muscat", 5],
[1, "Niamey", 5],
[-4, "San Juan", 4],
[-4, "Road Town", 4],
[12, "Tarawa Atoll", 6],
[7, "Vientiane", 6],
[0, "Ouagadougou", 5],
[3, "Asmara", 5],
[1, "Copenhagen", 1],
[-4, "Santo Domingo", 4],
[4.5, "Kabul", 2],
[1, "Tirana", 3],
[1, "Andorra la Vella", 1],
[-4, "Saint John's", 3],
[4, "Yerevan", 3],
[5, "Baku", 4],
[-5, "Nassau", 3],
[3, "Manama", 5],
[6, "Dhaka", 4],
[-4, "Bridgetown", 3],
[3, "Minsk", 2],
[-6, "Belmopan", 5],
[1, "Porto-Novo", 6],
[6, "Thimphu", 5],
[1, "Sarajevo", 3],
[2, "Gaborone", 5],
[8, "Bandar Seri Begawan", 5],
[2, "Sofia", 3],
[2, "Bujumbura", 5],
[7, "Phnom Penh", 4],
[1, "Yaounde", 4],
[1, "Bangui", 5],
[1, "N'Djamena", 5],
[3, "Moroni", 5],
[1, "Brazzaville", 5],
[1, "Kinshasa", 4],
[0, "Yamoussoukro", 5],
[1, "Zagreb", 2],
[-5, "Havanna", 3],
[3, "Nicosia", 2],
[1, "Prague", 2],
[3, "Djibouti", 6],
[-4, "Roseau", 5],
[9, "Dili", 5],
[-5, "Quito", 4],
[-6, "San Salvador", 5],
[1, "Malabo", 5],
[2, "Talinn", 2],
[3, "Addis Ababa", 3],
[12, "Suva", 4],
[1, "Libreville", 5],
[4, "Tbilisi", 5],
[0, "Accra", 4],
[-4, "Saint George's", 5],
[-6, "Guatemala City", 3],
[0, "Conakry", 5],
[0, "Bissau", 6],
[-4, "Georgetown", 4],
[-6, "Tegucigalpa", 5],
[1, "Budapest", 2],
[2, "Jerusalem", 2],
[2, "Amman", 3],
[6, "Astana", 5],
[3, "Nairobi", 3],
[9, "Pyongyang", 4],
[9, "Seoul", 3],
[1, "Pristina",  5],
[3, "Kuwait City", 5],
[6, "Bishkek", 5],
[2, "Riga", 3],
[1, "Vaduz", 3],
[2, "Vilinus", 4],
[1, "Luxembourg", 1],
[1, "Skopje", 4],
[3, "Antananarivo", 5],
[2, "Lilongwe", 5],
[8, "Kuala Lumpur", 4],
[5, "Male", 5],
[0, "Bamako", 5],
[1, "Valetta", 3],
[12, "Majuro", 5],
[0, "Nouakchott", 5],
[-6, "Mexico City", 3],
[11, "Palikir", 5],
[2, "Chisinau", 4],
[1, "Monaco", 1],
[8, "Ulaanbaatar", 4],
[1, "Podgorica", 6],
[2, "Maputo", 4],
[6.5, "Nay Pyi Taw", 6],
[1, "Windhoek", 4],
[5.5, "Kathmandu", 3],
[1, "Amsterdam", 2],
[-6, "Managua", 5],
[1, "Abuja", 3],
[9, "Melekeok", 5],
[-5, "Panama City", 4],
[10, "Port Moresby", 5],
[8, "Manila", 3],
[2, "Kigali", 5],
[-4, "Basseterre", 5],
[-4, "Castries", 5],
[-4, "Kingstown", 5],
[13, "Apia", 5],
[1, "San Marino", 1],
[0, "Sao Tome", 3],
[3, "Riyadh", 3],
[0, "Dakar", 4],
[1, "Belgrade", 3],
[4, "Victoria", 5],
[0, "Freetown", 4],
[8, "Singapore",2],
[1, "Bratislava", 1],
[1, "Llubljana", 2],
[11, "Honiara", 5],
[3, "Juba", 5],
[5.5, "Colombo", 6],
[3, "Khartoum", 5],
[-3, "Paramaribo", 5],
[2, "Mbabane", 5],
[1, "Bern", 1],
[2, "Damascus", 3],
[8, "Taipei", 4],
[5, "Dunshanbe", 6],
[3, "Dodoma", 4],
[0, "Lome", 6],
[13, "Nuku'alofa", 5],
[-4, "Port-of-Spain", 4],
[1, "Tunis", 2],
[5, "Ashgabat", 5],
[12, "Funafuti", 6],
[4, "Abu Dhabi", 3],
[5, "Tashkent", 6],
[11, "Port-Vila", 5],
[1, "Vatican City", 1],
[7, "Hanoi", 3],
[3, "Sanaa", 5],
[2, "Lusaka", 6],
[2, "Harare", 4]

];

var levelTz = 0;
var levelCorrectTz = 0;
var usedNumbersTz = [];
var levelTz = 0;
var currentAnswersTz = [];
var buttonArrayTz = [];
var questionNumberTz;
var correctTz = 0;
var attemptsTz = 0;
var scoreTotalTz = 0;
var scoreTz;
var intervalTz;

function loadIntervalTz(){

	intervalTz = setInterval(function()
				{
					scoreReducerTz()
				}, 100);
}

function scoreResetTz(){
	scoreTz = 1000;
}

function stopIntervalTz(){
	clearInterval(intervalTz);
}
function scoreReducerTz(){
	document.getElementById("potentialTz").innerHTML = scoreTz;
	scoreTz = scoreTz - 3;
	
	if(scoreTz<0){
		scoreTz = 0;

		return scoreTz;
	}
}
//allows games to increase level when a certain number of correct answers are reached or there are no more wuestions in that level

function levelUpTz()
	{
		if((levelTz==0)&&(levelCorrectTz== 3))
			{ levelTz++;
			levelCorrectTz = 0;	
		}
		if((levelTz==1)&&(levelCorrectTz== 4))
			{ levelTz++;
				levelCorrectTz = 0;
		}
		if ((levelTz==2)&&(levelCorrectTz== 4)){
			levelTz++;
			levelCorrectTz = 0;
		}
		
		if((levelTz==3)&&(levelCorrectTz== 4))
			{ levelTz++;
				levelCorrectTz = 0;
		}
		if ((levelTz==4)&&(levelCorrectTz== 3))
			{ levelTz++;
				levelCorrectTz = 0
		}

}

function questionSelectTz(levelNumber){



	var currentAnswersTwoTz=currentAnswersTz;

	for(var i=0; i<currentAnswersTwoTz.length; i++){
		if(capitalsTz[currentAnswersTwoTz[i]][2]== levelNumber){
			questionNumberTz = currentAnswersTwoTz[i];
		}
	}


}



function answersSelectTz(levelNumber){

	var uniqueAnswerTz;
	var newAnswerIntTz;
	var levelCorrectTz = false;
	var counterTz = 0;

	while(levelCorrectTz == false){
		currentAnswersTz = [];
		
	
		while (currentAnswersTz.length < 4){
			uniqueAnswerTz = true;
			newAnswerIntTz = Math.floor(Math.random() * capitalsTz.length);
			//loop through unsednumber array to check if it has already been answered correctly
			for(var u=0; u<usedNumbersTz.length; u++){
				if(newAnswerIntTz== usedNumbersTz[u]){
					uniqueAnswerTz = false;
				}
			}	
			//Loop through array to check unique and to check four different timezones.
			for(var j=0; j<currentAnswersTz.length; j++){
				if (newAnswerIntTz == currentAnswersTz[j]){
					uniqueAnswerTz = false;
				}
				if(capitalsTz[newAnswerIntTz][0] == capitalsTz[currentAnswersTz[j]][0]){
					uniqueAnswerTz = false;
				}
			}
			if (uniqueAnswerTz == true) {
				currentAnswersTz.push(newAnswerIntTz);
			}
		}



		for (var k=0; k<currentAnswersTz.length; k++){
			if (capitalsTz[currentAnswersTz[k]][2]== levelNumber){
				counterTz++;
			}
		}
		if(counterTz>0){
			levelCorrectTz = true;
		}
	}
	
}

function fillButtonsTz(){
	

	var currentAnswersThreeTz = currentAnswersTz;

	var uniqueButtonTz;
	buttonArrayTz = [];
	var butRandTz;

	while(buttonArrayTz.length<4){
		uniqueButtonTz = true;
		butRandTz = Math.floor(Math.random()*4);
		for(var p=0; p<buttonArrayTz.length; p++){
			if(butRandTz==buttonArrayTz[p]){
				uniqueButtonTz=false;
			}
		}

		if(uniqueButtonTz == true){
			buttonArrayTz.push(butRandTz);
		}
		

	}
	

	document.getElementById("buttonOneTz").value = (capitalsTz[currentAnswersThreeTz[buttonArrayTz[0]]][1]);
	document.getElementById("buttonTwoTz").value = (capitalsTz[currentAnswersThreeTz[buttonArrayTz[1]]][1]);
	document.getElementById("buttonThreeTz").value = (capitalsTz[currentAnswersThreeTz[buttonArrayTz[2]]][1]);
	document.getElementById("buttonFourTz").value = (capitalsTz[currentAnswersThreeTz[buttonArrayTz[3]]][1]);

}

function fillQuestionTz(levelNumber){



	var questiTz = document.getElementById("capitalTz");

	questiTz.innerHTML = createUTC(capitalsTz[questionNumberTz][0]);

	


}

function scoreCounterTz(){
	document.getElementById("correctTz").innerHTML = correctTz;
	document.getElementById("attemptsTz").innerHTML = attemptsTz;
	document.getElementById("scoreTz").innerHTML = scoreTotalTz;
	document.getElementById("levelTz").innerHTML = levelTz + 1;
}

function loadGameTz(){
	scoreResetTz();
	
	answersSelectTz(levelTz);
	questionSelectTz(levelTz);
	fillQuestionTz(levelTz);
	fillButtonsTz();
	loadIntervalTz();
	scoreCounterTz();
	
}

function checkAnswerTz(){
	
	attemptsTz++;
	
	levelUpTz();
	var counterCheckTz;
	
	for(var q=0; q<buttonArrayTz.length; q++){
		if(currentAnswersTz[buttonArrayTz[q]]==questionNumberTz){
			counterCheckTz= q;
			
		}
	}
	
	return counterCheckTz;
}

function clickButOneTz(){

	stopIntervalTz();
	
	var numberOneTz = checkAnswerTz();
	if(numberOneTz==0){
		document.getElementById("resultTz").innerHTML =("CORRECT");
			correctTz++;
			levelCorrectTz++;
			scoreTotalTz = scoreTotalTz + scoreTz;
			usedNumbersTz.push(questionNumberTz);
	}
	if(numberOneTz!=0){
		document.getElementById("resultTz").innerHTML = ("INCORRECT!");
	}
	if(attemptsTz<25){
		loadGameTz();
	}
	if(attemptsTz==25){
		endQuizTz();
	}

}

function clickButTwoTz(){
		stopIntervalTz();
	var numberTwoTz = checkAnswerTz();
	if(numberTwoTz==1){
		document.getElementById("resultTz").innerHTML =("CORRECT");
			correctTz++;
			levelCorrectTz++;
			scoreTotalTz = scoreTotalTz + scoreTz;
			usedNumbersTz.push(questionNumberTz);
	}
	if(numberTwoTz!=1){
		document.getElementById("resultTz").innerHTML = ("INCORRECT!");
	}

	if(attemptsTz<25){
		loadGameTz();
	}
	if(attemptsTz==25){
		endQuizTz();
	}
}
function clickButThreeTz(){
		stopIntervalTz();
	var numberThreeTz = checkAnswerTz();
	if(numberThreeTz==2){
		document.getElementById("resultTz").innerHTML =("CORRECT");
			correctTz++;
			levelCorrectTz++;
			scoreTotalTz = scoreTotalTz + scoreTz;
			usedNumbersTz.push(questionNumberTz);
	}
	if(numberThreeTz!=2){
		document.getElementById("resultTz").innerHTML = ("INCORRECT!");
	}
	if(attemptsTz<25){
		loadGameTz();
	}
	if(attemptsTz==25){
		endQuizTz();
	}
}

function clickButFourTz(){
		stopIntervalTz();
	var numberFourTz = checkAnswerTz();
	if(numberFourTz==3){
		document.getElementById("resultTz").innerHTML =("CORRECT");
			correctTz++;
			levelCorrectTz++;
			scoreTotalTz = scoreTotalTz + scoreTz;
			usedNumbersTz.push(questionNumberTz);
	}
	if(numberFourTz!=3){
		document.getElementById("resultTz").innerHTML = ("INCORRECT!");
	}
	if(attemptsTz<25){
		loadGameTz();
	}
	if(attemptsTz==25){
		endQuizTz();
	}
}

function endQuizTz(){
	scoreCounterTz();
	document.getElementById("endMesTz").innerHTML = ("Congratulations you have completed the quiz, your score is "+scoreTotalTz+".");
	document.getElementById('endFormTz').style.display = "inline";

	$('#finalScoreTz').val(scoreTotalTz);

	document.getElementById("scorePassTwoTz").value = (scoreTotalTz);
}

function beginQuizTz(){
	document.getElementById("introTz").style.display = "none";
	document.getElementById("quiz-titleTz").innerHTML = ("The Capital Cities Quiz");	
		loadGameTz();
		document.getElementById("quizTz").style.display = "block";
}


