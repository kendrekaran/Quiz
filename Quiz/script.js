let currentIndex = 0
let score = 0
let timer
let timeLeft = 5


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function start(){
    shuffle(quizData)
    document.getElementById('question').style.display = "block" 
    document.getElementById('quizcard').style.display = "block" 
    document.getElementById('welcome').style.display = "none" 
    document.getElementById('startCard').style.display = "none"
    document.getElementById('welcome2').style.display = "none" 
    document.getElementById('opt').style.display = "block" 
    document.getElementById('strBtn').style.display = "none" 
    document.getElementById('resBtn').style.display = "block"
    document.getElementById('rstBtn').style.display = "block"
    document.getElementById('restart').style.display = "none"
    document.getElementById('complete').style.display = "none"
    document.getElementById('dispScore').style.display = "none"
    document.getElementById('score').style.display = "block"
    document.getElementById('result').style.display = "block"
    document.getElementById('timer').style.display = "block";
    currentIndex = 0
    score = 0
    timeLeft = 10
    displayQuestion()
}

function displayQuestion() {
    const current = quizData[currentIndex]; 
    

    document.getElementById('question').innerText = current.question; 
    document.getElementById('optiona').innerText = current.a; 
    document.getElementById('optionb').innerText = current.b; 
    document.getElementById('optionc').innerText = current.c; 
    document.getElementById('optiond').innerText = current.d; 
    
    const options = document.querySelectorAll('input[name="answer"]');

    options.forEach(option => {
        option.checked = false; 
    });
    
    document.getElementById('result').innerText = '';
    resetTimer()

}

function resetTimer() {
    clearInterval(timer); 
    timeLeft = 10;
    document.getElementById('timer').innerText = `Time left: ${timeLeft} seconds`;

    timer = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').innerText = `Time left: ${timeLeft} seconds`;

      if (timeLeft <= 0) {
        clearInterval(timer); 
        currentIndex++;
        if (currentIndex < quizData.length) {
          displayQuestion();
        } else {
          ansSheet(); 
        }
      }
    }, 1000); 
  }



function result(){
    let ans=document.querySelector('input[name="answer"]:checked')

    let res = document.getElementById('result')

    let exit = document.getElementById('exit')

    
    if(ans){
        if(ans.value == quizData[currentIndex].correct){
            score ++
            res.innerText ="correct"
            res.style.color = "green"
        }
        else{
            res.innerText="Wrong"
            res.style.color="red"
        }

        checkScore()
        currentIndex++


        if(currentIndex<5){
            setTimeout(displayQuestion,1000)
        }
        else{
            
            complete.innerText += " Quiz COmpleted"
            dispScore.innerText += "You Scored : " + score
            clearInterval(timer);
            ansSheet()
        }


    } else {
        res.innerText="Please Select Your answer"
        res.style.color="blue"
    }
    
}


function checkScore(){
    const marks = document.getElementById('score')

    marks.innerText="Score : " + score
}

function reset(){
    score = 0
    checkScore()
    start()
    
}

function ansSheet(){
    document.getElementById('question').style.display = "none" 
    document.getElementById('opt').style.display = "none" 
    document.getElementById('strBtn').style.display = "none" 
    document.getElementById('startCard').style.display = "none" 
    document.getElementById('resBtn').style.display = "none"
    document.getElementById('rstBtn').style.display = "none"
    document.getElementById('result').style.display = "none"
    document.getElementById('score').style.display = "none"
    document.getElementById('restart').style.display = "block" 
    document.getElementById('complete').style.display = "block" 
    document.getElementById('dispScore').style.display = "block" 
    document.getElementById('exit').style.display = "none"
    document.getElementById('timer').style.display = "none";
    document.getElementById('complete').innerText = '';
    document.getElementById('dispScore').innerText = '';
    complete.innerText += " Quiz Completed"
    dispScore.classList.add('slide-in');
    dispScore.innerText = "You Scored: " + score;
    clearInterval(timer);
}