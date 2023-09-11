let a = document.getElementById("currentDayOfTheWeek");
let b =document.getElementById("currentUTCTime");
let d = document.getElementById("digitalTime");


function daysAndTime(){

  let today = new Date();

  let date = today.getDate()
  let month = today.getMonth() + 1
  let year = today.getFullYear()
  let day = today.getDay();
  let dayList = ["Sunday", "Monday", "Tuesday",     "Wednesday", "Thursday", "Friday", "Saturday"]
  let todaysDay = dayList[day];
  
  if(date<10){
    date = "0" + date
  }
  if(month<10){
    month = "0" + month
  }
  
  a.innerHTML = todaysDay + ", " + date + "/" + month + "/" + year

  let time = today.getTime()
  b.innerHTML = time;

  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  let ampm = "am"

  if(h>12){
    h = h-12
    ampm = "pm"
  }
  if(h<10){
    h = "0" + h
  }

  if(m<10){
    m = "0" + m
  }
  if(s<10){
    s = "0"+s
  }

  let clock = h + " : " + m + " : " + s + " " + ampm
  d.innerHTML = clock


}
setInterval(daysAndTime, 100)
