let date0 = new Date(0);
alert(date0); // 01.01.1970 UTC+0

let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970); // 02.01.1970 UTC+0

// parsing date from string
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
alert(ms); // 1327611110417  (timestamp)

// show a weekday
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2014
alert(getWeekDay(date)); // FR

//get last day of the month
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 0)); // 31
alert(getLastDayOfMonth(2012, 1)); // 29
alert(getLastDayOfMonth(2013, 1)); // 28
