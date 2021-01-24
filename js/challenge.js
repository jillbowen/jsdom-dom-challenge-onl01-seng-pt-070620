const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const comment = document.getElementById("submit");

let timer = true;
let countHearts = 0;

setInterval(function(){
    if (timer) {
        counter.innerText++;
    } 
}, 1000);

function increment(){
    countHearts = 0;
}
increment();

pause.addEventListener("click", function(e){
    if (timer) {
        timer = false;
        pause.innerText = "Continue"
    }
    else {
        timer = true;
        pause.innerText = "Pause"
    }
});

minus.addEventListener("click", function(e){
    if (timer) {
        counter.innerText--;
    }
});

plus.addEventListener("click", function(e){
    if (timer) {
        counter.innerText++;
    }
});

heart.addEventListener("click", function(){
    countHearts++;
    
    let likes = document.querySelector('.likes');
    let liked = document.createElement('li');
    let lastLiked = document.querySelector('.likes').lastChild

    let likedNum = parseInt(counter.innerHTML);

    let message = document.createTextNode(likedNum + " has been liked " + countHearts + " time(s).");

    liked.appendChild(message);
    if(countHearts > 1){
        lastLiked.replaceWith(liked)
    } else {
        likes.appendChild(liked);
    }
});

comment.addEventListener('click', function(e) {
    e.preventDefault();
    let getComments = document.querySelector('.comments');
    let getCommentValue = document.querySelector('#comment-value').value;
  
    let createCommentParagraph = document.createElement('p');
  
    createCommentParagraph.innerHTML = `${getCommentValue}`;
  
    getComments.append(createCommentParagraph);
  });