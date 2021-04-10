var txtDays = document.getElementById('days');
var txtHours = document.getElementById('hours');
var txtMinutes = document.getElementById('minutes');
var txtSeconds = document.getElementById('seconds');

var target = new Date("Jan 1, 2022 00:00:00").getTime();

var count = setInterval(() => {
  var now = new Date().getTime();

  var distance = target - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  txtDays.innerHTML = days >= 10 ? days : '0' + days;
  txtHours.innerHTML = hours >= 10 ? hours : '0' + hours;
  txtMinutes.innerHTML = minutes >= 10 ? minutes : '0' + minutes;
  txtSeconds.innerHTML = seconds >= 10 ? seconds : '0' + seconds;

  if(distance < 0) {
    clearInterval(count);
  }
}, 1000);