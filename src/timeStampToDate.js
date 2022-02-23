// преобразуем дату в нормальный вид
export default function timeStampToDate(date) {
  var d = new Date();
  d.setTime(date);
  return (
    ("0" + d.getDate()).slice(-2) +
    "." +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "." +
    d.getFullYear()
  );
}
// преобразуем дату в нормальный вид
