var myDate = new Date();
var hrs = myDate.getHours();


var wish;

if (hrs < 12)
 wish  = 'Good Morning';
else if (hrs >= 12 && hrs <=17)
wish = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
wish = 'good evening';

document.getElementById('wishes').innerhtml = wish ;



let myDate = new Date();
let hrs = myDate.getHours();

let greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

document.getElementById('greetings').innerHTML = greet ;
