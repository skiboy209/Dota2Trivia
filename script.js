//Run this when document is ready
$("document").ready(function(){

});

//Start button
$("#start").click(function(){
    displayQuestion();
});
//Next button
$("#next").click(function(){
    nextQuestion();
})

//Globlal Variables
var won = false;
var correct = 0;
var incorrect = 0;
var answer;
var userAnswer;
var questionDiv;
var questionCounttestDiv = 0;
var questionLetter = ['a','b','c','d'];
var i = 0;
var k = 0;
var buttonFlash;

//Display Questions
function displayQuestion(){
    //Change from starting the game to next question on first run and disabling the button
    $("#start").prop("disabled",true);
    $("#start").css("opacity",".5");
    $("#next").css("opacity",".5");
    $("#next").prop("disabled",true);

    var tempVar =  JSON.stringify(questions[0,i].question[0]);
    tempVar = tempVar.replace(/\"/g, "");
    console.log(tempVar);
    questionDiv = $("<div id='questionDiv'>" + tempVar + "</div>");
    $("#mainWrapper").html(questionDiv);
    answer = questions[0,i].question[5];
    console.log("ANSWER " + answer);
    for(j = 1; j < questions[0,i].question.length - 1; j++){
    var testVar = JSON.stringify(questions[0,i].question[j]);
    testVar = testVar.replace(/\"/g, "");
    var testDiv = $("<div id='" + questionLetter[j - 1] + "' class='questions'>" + questionLetter[j - 1] + " " + testVar + "</div>");
    console.log(testVar);
        $("#questionDiv").append(testDiv);
    }
    waitAnswer();
}

//Onclick handler 
function waitAnswer(){
    $("#a").click(function(){
        userAnswer = 'a';  
        console.log("A");
        getAnswer();
    })
    $("#b").click(function(){      
        userAnswer = 'b';  
        console.log("B");
        getAnswer();
    })
    $("#c").click(function(){
        userAnswer = 'c';          
        console.log("C");
        getAnswer();
    })
    $("#d").click(function(){
        userAnswer = 'd';          
        console.log("D");
        getAnswer();
    })
}
 
//Disable the clickable divs when one is clicked until next is pressed
function disableQuestions(){
    $("#a").off();
    $("#b").off();
    $("#c").off();
    $("#d").off();
    $("#next").css("opacity","1");
}
//Enable the clickable divs when next is clicked
function enableQuestions(){
    $("#a").on();
    $("#b").on();
    $("#c").on();
    $("#d").on();
}

function getAnswer(){
    if(userAnswer === answer){
        correct++;
        $("#next").css("opacity","1")
        $("#correct").html("Correct: " + correct)
        $("#next").prop("disabled",false);
    }else{
        incorrect++;
        $("#next").css("opacity","1")
        $("#incorrect").html("Incorrect: " + incorrect)
        $("#next").prop("disabled",false);
    }
    disableQuestions();    
}

function nextQuestion(){
    i++;
    if(i > questions.length - 1){
        i = 0;
        alert("Your score is: " + correct);    
        correct = 0;
        incorrect = 0;    
        $("#incorrect").html("Incorrect: " + incorrect)
        $("#correct").html("Correct: " + correct)
    }
    displayQuestion();
    enableQuestions();
}



//Global Object Question Declaration
var questions = [
    {question: ["What item extends attack range for ranged heroes?", 
        "Dragon Lance", 
        "Blademail",
        "Bloodthorn",
        "Black King Bar",
        "a"
    ]},
    {question: ["What hero has the ability Venomous Gale?",
        "Viper",
        "Tinker",
        "Venomancer",
        "Witch Doctor",
        "c"
    ]},
    {question: ["What is the name of the giant monster that gives you two lives if you kill it?",
        'Kronos',
        'Batman',
        'Roshan',
        'Lilly',
        'c'
    ]},
    {question: ["What item makes melee heroes attack twice every 5 seconds?",
        'Bloodstone',
        'Magick Stick',
        'Armlet of Mordiggian',
        'Echo Sabre',
        'd'
    ]},
    {question: ['What is the time of first night?',
        '24 Minutes',
        '4 Minutes',
        '8 Minutes',
        '16 Minutes',
        'b'
    ]}
]
