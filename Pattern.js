// const n = 8;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

const leter = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (let index = 0; index < leter.length; index++) {
  let element = "";
  for (let item = 0; item < index; item++) {
    element += leter[item];
  }
  console.log(element, "element");
}
