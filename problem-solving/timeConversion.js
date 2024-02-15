function timeConversion(s) {
  let militaryTime = "";

  if (s.includes("PM")) {
    if (s.startsWith("12")) {
      militaryTime = s.replace("PM", "");
    } else {
      const hours = parseInt(s.slice(0, 2)) + 12;
      militaryTime = hours.toString() + s.slice(2, -2);
    }
  } else {
    if (s.startsWith("12")) {
      militaryTime = "00" + s.slice(2, -2);
    } else {
      militaryTime = s.slice(0, -2);
    }
  }

  return militaryTime;
}

console.log(timeConversion("12:01:00AM"));
