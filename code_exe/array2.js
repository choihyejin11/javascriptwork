/*
//1차원배열 요소(element)
//0,1,2,3,4,5
var array = [1, 2, 3, 4, 5, 6];

console.log("길이는:" + array.length); //6

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("=========================");

//2~10까지 배열 출력하세요
function Test() {
  var init = 1;
  var array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var i = 0; i < array2.length; i++) {
    array[i] = ++init;
    console.log(array2[i]);
  }
}
console.log(Test());

console.log("=========================");

var array3 = [];
var sum = 0;
var init =0;

for (let i = 0; i < 10; i++) {
  array3[i] = ++init;
  console.log(array3[i]);

  sum += array3[i];

  console.log("합은:" + sum);
}

// 1~10까지 합을 구하는데 짝수의합 홀수의합 구하기
// var 홀수합(one_sum1)=0; var 짝수합(two_sum2)=0;

function Sum1() {

var array4 = [];
var one_sum1 = 0;
var two_sum2 = 0;
var init = 0 ;

for (let i = 0; i < 10; ++i) {
  array4[i] = ++init;
  one_sum1 += 1;
  console.log(array4[i]);
}
}
console.log('홀수의합은' + Sum1());

*/


var arr =[]; //arr 변수, 배열 
//1~10 arr 넣는다
var init = 0; //value를 위한 변수
//합을 구할거야!!
var sum = 0; //sum: 합을 구하기 위한 용도임 1~10
var even_sum = 0; //짝수만 더할거야!!
var odd_sum = 0;
for(var i = 0; i < 10; i++){

  arr[i] = ++init;

  console.log(arr[i]);

  if(arr[i]%2 == 0){
    even_sum = even_sum + arr[i];
  }else{
    odd_sum += arr[i];
  }
  /*
    i = 2 init = 3
    arr[2] = 4
    sum = 0-> sum = 1+2 = 3 + 3 = 6
  */
}
console.log("짝수합은 " + even_sum);
console.log("홀수 합은 " + odd_sum);
