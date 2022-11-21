const removeFromArray = function (arr, val) {
  const ans = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === val)
    {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;

}
// Do not edit below this line
module.exports = removeFromArray;
