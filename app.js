const myBtn = document.getElementById('myBtn');
const myCount = document.getElementById('clock');
const time = document.getElementById('countdown');
const submitDate = document.getElementById('submitDate');

    function timer (){
 
  var countDownEndDate = new Date(time.value);
 
  var countDownSecondDate = new Date();

  var distance = countDownSecondDate - countDownEndDate ;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var countdownFinal=`Day ${days} Hrs ${hours}: Min ${minutes}: Sec ${seconds}`;
  
  if(time.value){
  myCount.textContent = countdownFinal}
}

setInterval(timer, 1000)
