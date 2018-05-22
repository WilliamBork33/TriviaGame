//Variable to hold the timer starting point of 20 seconds.
var number = 20;

//Not sure what this is for. Copied it from the timer exercise we did earlier.
var intervalId;

//Function to runs the timer. Uses another function inside it called "decrement".
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//Function to decrement timer to 0.
function decrement()
{
    //Decrements the number variable.
    number--;
    //jQuery to display the function's inner HTML working.
    $("#timeRemaining").html("<h2>" + number + "</h2>");
    //Shows an alert and runs the stop function.    
    if (number === 0)
        {
            stop();
            alert("Time Up!");
        }
}

//Function that I don't exactly know what it does right at the moment.
function stop()
    {
    //Function that I don't exactly know what it does right at the moment.
    clearInterval(intervalId);  
    }

run();

//Defining variables.
var answerA;
var answerB;
var answerC;
var answerD;
var selectedAnswer;
var correctAnswer = "Electric";
var correct = 0;
var incorrect = 0;


//jQuery onClick events.
$("#answer-a, #answer-b, #answer-c, #answer-d").on("click", selectAnswer)

//Function to translate user's click (choice) to a saved variable and alerts it to the screen.
function selectAnswer()
{
    //Takes the clicked answer inner html text and alerts it to screen.
    var selectedAnswer = $(this).text();
    //alert(selectedAnswer);

    //Function to check the user's answer against the actual answer.
    function checkAnswer()
    {
        if ( $(selectedAnswer).text() == $(correctAnswer).text() )
        {
            correct++;
            document.getElementById("correct").innerHTML = correct;
        }
        else
        {
            incorrect++;
            document.getElementById("incorrect").innerHTML = incorrect;
        }
    }
    //Call the actual answer checking function.
    checkAnswer();
}