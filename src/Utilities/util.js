export const parseDate = (time) => {
  let a, b, date
  a = time.split('T');
  b = a[0].split('-');
  date = b[1] + '/' + b[2] + '/' + b[0];
  return date
}