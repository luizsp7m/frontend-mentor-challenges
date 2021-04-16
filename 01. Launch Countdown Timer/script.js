var txtDays = document.getElementById('days');
var txtHours = document.getElementById('hours');
var txtMinutes = document.getElementById('minutes');
var txtSeconds = document.getElementById('seconds');

var target = 864000; // 15 days

var count = setInterval(() => {
  target--;

  var days = Math.floor(target / (60 * 60 * 24));
  var hours = Math.floor((target % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((target % (60 * 60)) / 60);
  var seconds = Math.floor((target % 60) / 1);

  txtDays.innerHTML = days >= 10 ? days : '0' + days;
  txtHours.innerHTML = hours >= 10 ? hours : '0' + hours;
  txtMinutes.innerHTML = minutes >= 10 ? minutes : '0' + minutes;
  txtSeconds.innerHTML = seconds >= 10 ? seconds : '0' + seconds;

  if(target == 0) {
    clearInterval(count);
  }
}, 1000);