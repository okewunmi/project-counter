// set initial count
let count = 0;

// select value and button
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(btn){
 btn.addEventListener('click', function(e){
  const style = e.currentTarget.classList;
  if (style.contains('decrease')){
   count--;
  }
  else if (style.contains('increase')){
   count++;
  }
  else{
   count = 0;
  }
  if (count > 0){
   value.style.color = "green";
  }
  if (count < 0){
   value.style.color = "red";
  }
  if (count === 0){
   value.style.color = "#222";
  }

   value.textContent = count;

 })
});

