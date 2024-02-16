export function calculateDate(date) {
  const todayDate = new Date();
  const getMonth = todayDate.getMonth() + 1;
  const getDay = todayDate.getDate();
  const getYear = todayDate.getFullYear();
  const formattedToday = new Date(`${getMonth}/${getDay}/${getYear}`);

  const targetDate = new Date(date);
  const tempNum = Math.floor(
    (formattedToday.getTime() - targetDate.getTime()) / 86400000
  ).toString();

  return tempNum;
}
