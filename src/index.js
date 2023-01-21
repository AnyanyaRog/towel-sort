
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix == null) { return []}
for (let i=0; i< matrix.length; i++) {
  let innerArraylength = matrix[i].length
  if (i%2 ==0 || i==0) {
  for(let n = 0; n < innerArraylength; n++) {
    arr.push(matrix[i][n]) }} else {
  for(let n = innerArraylength - 1; n >= 0; n--) {
    arr.push(matrix[i][n]) } }
    } 
    return arr;
}