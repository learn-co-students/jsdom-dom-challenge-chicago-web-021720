let counter = document.getElementById("counter");

function incrementCounter() {
    let currentHTML = counter.innerHTML;
    let currentInt = parseInt(currentHTML);
    counter.innerHTML = `${currentInt + 1}`;
};

function decrementCounter() {
    let currentHTML = counter.innerHTML;
    let currentInt = parseInt(currentHTML);
    counter.innerHTML = `${currentInt - 1}`;
};

let incStarter = setInterval(incrementCounter, 1000);

function startIncrement() {
    return incStarter;
};

document.addEventListener("DOMContentLoaded", startIncrement);


document.querySelector("button#minus").addEventListener("click", decrementCounter);
document.querySelector("button#plus").addEventListener("click", incrementCounter);

let numbersObject = {};

function displayLikes() {
    let number = counter.innerHTML;
    if (numbersObject[number]) {
        numbersObject[number] += 1;
    } else {
        numbersObject[number] = 1;
    }
    let likes = document.querySelector("ul.likes");
    if (numbersObject[number] === 1) {
        let li = document.createElement("li");
        li.id = `L${number}`;
        li.innerHTML = `${number} has ${numbersObject[number]} like`;
        likes.appendChild(li);
    } else {
        document.querySelector(`li#L${number}`).innerHTML = `${number} has ${numbersObject[number]} likes`;
    }
}

document.querySelector("button#heart").addEventListener("click", displayLikes);


function pauseCounter() {
    let pause = document.querySelector("button#pause");
    let buttons = document.querySelectorAll("button#minus, button#plus, button#heart, button#submit")
    if (pause.innerHTML === " pause ") {
        buttons.forEach(function(button) {
            button.disabled = true;
        })
        pause.innerHTML = " resume ";
        return clearInterval(incStarter);
    } else {
        buttons.forEach(function(button) {
            button.disabled = false;
        })
        pause.innerHTML = " pause ";
        incStarter = setInterval(incrementCounter, 1000);
        return incStarter;
    }
}


document.querySelector("button#pause").addEventListener("click", pauseCounter);


function addComment(e) {
    let comment = document.querySelector("form#comment-form").elements["comment"].value;
    let p = document.createElement("p")
    p.innerHTML = comment;
    document.querySelector("div#list").appendChild(p);
    e.preventDefault();
}

document.querySelector("button#submit").addEventListener("click", addComment);