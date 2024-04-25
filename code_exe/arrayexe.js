
// 1~10까지의 합계 구하시오
function Sum() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += array[i];      
  }
  console.log(sum); 
}
console.log(Sum());

//1~10까지 나열하고 합계 구하시오
function Sum1() {
  var array = [];
  var init = 0;
  var sum1 = 0;

  for (let i = 0; i < 10; i++) {
    array[i] = ++init;
    sum1 += array[i];   
    console.log(array[i]);   
  }
  console.log(sum1); 
}
console.log(Sum1());