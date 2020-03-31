
  emptyhash = {};
  const addToCounter = () => {
    let counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) + 1;
  };

  function lowerCounter(){
    let counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) - 1;
  }

  document.getElementById('plus').addEventListener('click',function(){
    addToCounter();
  });

  document.getElementById('minus').addEventListener('click',function(){
    lowerCounter();
  });

 const setCounter = setInterval(function(){addToCounter();}, 1000);

  function clearCounter(){
    clearInterval(setCounter);
  }

  document.getElementById("pause").addEventListener('click', clearCounter);

  document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();
    const inputvalue = document.querySelector('input').value;
    const newitem = document.createElement("P");
    newitem.textContent = inputvalue;
    const form = document.querySelector('form');
    document.querySelector('div').insertBefore(newitem, form);
  });

function like() {

    currentCounter = document.getElementById('counter');

    count = currentCounter.innerHTML;

    if(emptyhash[count]) {
      emptyhash[count] += 1;
    }
    else {
      emptyhash[count] = 1;
    }

    let stringArray = [];
    for(let num in emptyhash){
      stringArray.push(`${num} has been liked ${emptyhash[num]} times`);
    }
    document.querySelector("ul.likes").innerHTML = "";
    for(let str in stringArray){

      let newItem = document.createElement("P");
      newItem.textContent = stringArray[str];
      document.querySelector("ul.likes").appendChild(newItem);
  }
}


document.getElementById('heart').addEventListener('click',function(){
  like();
 });
