let a = document.getElementById("currentDayOfTheWeek");
let b =document.getElementById("currentUTCTime");

function daysAndTime(){

  let today = new Date();
  let day = today.getDay();
  
  let dayList = ["Sunday", "Monday", "Tuesday",     "Wednesday", "Thursday", "Friday", "Saturday"]
  let todaysDay = dayList[day]
  a.innerHTML = "Today is " + todaysDay

  
  let time = today.getTime()
  b.innerHTML = time;
}
setInterval(daysAndTime, 1000)