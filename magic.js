var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
let selector = document.querySelector(".answer");

function oracle() {
// var lifeAnswers = [i];
var i = Math.ceil(Math.random() * lifesAnswers.length - 1);
selector.innerText = lifesAnswers[i];
// return lifesAnswers[i];
}

// var answer = oracle();
// console.log(answer);
