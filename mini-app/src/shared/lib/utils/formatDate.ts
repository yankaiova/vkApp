export function formatDate(dateUnix: Date) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    dateUnix.getFullYear() +
    " " +
    months[dateUnix.getMonth()] +
    " " +
    dateUnix.getDate() +
    " " +
    dateUnix.getHours() +
    ":" +
    dateUnix.getMinutes() +
    ":" +
    dateUnix.getSeconds()
  );
}
