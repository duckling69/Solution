// const input = {
//   '2020-01-01': 4,
//   '2020-01-02': 4,
//   '2020-01-03': 6,
//   '2020-01-04': 8,
//   '2020-01-05': 2,
//   '2020-01-06': -6,
//   '2020-01-07': 2,
//   '2020-01-08': -2,
// };
function solution(D) {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const output = {};

  // Initialize output object with zero values for each day of the week
  for (const day of daysOfWeek) {
    output[day] = 0;
  }

  // Loop through input dictionary and accumulate values for each day of the week
  for (const dateStr in D) {
    const value = D[dateStr];
    const date = new Date(`${dateStr} UTC`); // Set the time zone to UTC
    const dayOfWeek = daysOfWeek[(date.getUTCDay()==0)?6:(date.getUTCDay()-1)]; // Use getUTCDay() to get the day of the week in UTC
    //console.log(dayOfWeek);
    output[dayOfWeek] += value;
  }

  // Fill missing days with mean of previous and next day
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    if (output[day] === 0) {
      const prevDay = i === 0 ? daysOfWeek[6] : daysOfWeek[i - 1];
      const nextDay = i === 6 ? daysOfWeek[0] : daysOfWeek[i + 1];
      output[day] = Math.round((output[prevDay] + output[nextDay]) / 2);
    }
  }

  return output;
}

module.exports = solution;
//solution(input);