// create a random number between 1-10

const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);

const questionEl = document.getElementById('question');
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

//getting the score in the local storage
let score = JSON.parse(localStorage.getItem("score"));


// to avoid not having a score in the localstorage
if(!score){
    score = 0;
}

//putting the score on the browser part
scoreEl.innerText = `score: ${score}`


//target the question//
questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;


//function when user input answer
formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    }else {
        score--;
        updateLocalStorage();
    }
});

//putting the score in the localstorage
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
} 