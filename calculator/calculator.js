module.exports = {
  add,
};

// function add(...numbers) {
//   //console.log(numbers);

//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0)
  
//   // let sum = 0;
//   // for(var i = 0; i < numbers.length; i++){
//   //   sum += numbers[i];
//   // }
//   // return Number(sum);
// }

function add(args){
  const numbers = Array.isArray(args) ? args: Array.from(arguments);

  //console.log('numbers:', numbers);

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
