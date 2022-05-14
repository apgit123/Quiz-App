var chalk=require('chalk');
var readlineSync=require('readline-sync');
var username=readlineSync.question("Enter your name");
console.log(chalk.green.bold("welcome"+" "+username+" "+ "lets see how  well you know Abhay Singh"));
var score=0;
console.log(chalk.yellow.bold("for each correct answer you get 1 point "));
function command(choice,answer)
{
    var userselect=readlineSync.keyInSelect(choice,"choose option");
if(userselect+1===answer)
{
console.log(chalk.green.bold("Correct"));
score++;
}
else
{
console.log(chalk.red.bold("False"));

}
}

var questions=[
  
  {
  question:"Which is my favourite food?",
  choices:["chola bhatura","Chicken","Chilli paneer","Baati Chokha"],
  answer:1
  },
  {
    question:"Which is my dream place to visit?",
  choices:["Dubai","Brazil","Las Vegas","USA"],
  answer:2
  },
  
  {
  question:"Which is my favourite actor",
  choices:["Ranveer singh","Sharukh khan","Salman khan","AAmir khan", "Akshay kumar"],
  answer:3
  },
  {
  question:"Which  is my favourite car?",
  choices:["Rolls-royce","Ferrari","BMW","Maruti"],
  answer:4
  },
 
 {
  question:"Which is my favourite serial?",
  choices:["Tarak mehta ka Ulta chasma ","happu ke ultan paltan","Indian idol","Big-boss"],
  answer:1
 },
 {
  question:"Whats my favourite snacks?",
  choices:["pizza","Manchurian","fried rice","burger"],
  answer:3
 }
 ]
for(var i=0;i<questions.length;i++)
{
  console.log(questions[i].question);
  command(questions[i].choices,questions[i].answer);
}

var highscore=[
  {
    Name:'Aman',
    score:4
  },
  {
    Name:'Abhishek',
    score:3
  }
]
 function play()
 {
   for(i=0;i<highscore.length;i++)
   {
  if(score>highscore[i].score)
  {
  console.log(chalk.yellow.bold("bravo!! You set a new record dude....")); 
  break;
  }
  }
 }

play();

console.log(chalk.blue.bold("Your score is"+" "+score));
console.log(chalk.green.bold("Highscore of players"));
for(i=0;i<highscore.length;i++)
{
console.log(chalk.yellow.bold(highscore[i].Name+":"+highscore[i].score));
}

 
