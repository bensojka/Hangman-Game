
var guessed = [];
var dictionary = ['one', 'tree', 'cow'];
var currentWord = '';
var wordGuessed = '';

//This is jQuery's on ready, which we pass our own virtual function.
$(function(){
	gameStart();
	console.log(currentWord)
	//Inside here goes our own code.
	$(document).on("keyup", function(event){
		if (validate(event.key)){
			if(currentWord.includes(event.key)){
				$("#currentWord").html("Word: " + wordGuessed);
			}

//			if(!guessed.includes(event.key)){
//				guessed.push(event.key);
//				$("#guessedLetters").html("Word: " + guessed);				
//			}
		}
	});
});

function validate(strValue){
	var objRegExp  = /^[a-z]+$/;
  		return objRegExp.test(strValue);
}

function randomWord(dict){
	var pickedWord = dict[Math.floor(Math.random()*dict.length)];
	return pickedWord;
}

function gameStart(){
	currentWord = randomWord(dictionary);
	fillWordWithDashes(currentWord.length);
	$("#currentWord").html("Word: " + wordGuessed);
}

function fillWordWithDashes(arrayLength){
	for(var i = 0; i < arrayLength; i++){
		console.log(wordGuessed);
		wordGuessed = wordGuessed.concat("_");
	}
}