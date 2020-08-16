const convertHourStringToSeconds = (hoursInString) => {
  return hoursInString.split(":").reduce((acc, time) => 60 * acc + +time);
};

const convertSecondsToHourString = (seconds) => {
  let hours = Math.floor(seconds / 3600);
  console.log(hours);
};

export const calculateNetHoursPerDay = (
  shiftStartString,
  shiftEndString,
  totalBreakTime,
  expectedWorkTime
) => {
  // expectedWorkTime - (shiftEnd - shiftStart - breakTime)
};

export const calculateNetHours = (
  expectedHoursInSeconds,
  workLog,
  totalBreakTimeInSeconds
) => {
  let netHours = 0;
  console.log("expected", typeof expectedHours);
  console.log("workhours", typeof workLog);

  console.log(
    convertHourStringToSeconds(workLog[0]["shiftEnd"]) -
      convertHourStringToSeconds(workLog[0]["shiftStart"])
  );
  netHours =
    convertHourStringToSeconds(workLog[0]["shiftEnd"]) -
    convertHourStringToSeconds(workLog[0]["shiftStart"]);

  convertSecondsToHourString(netHours);

  return netHours;
};
