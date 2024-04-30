//주말과제> 2차원 배열 1~20 3,5,6,10,12만 값이 들어오고 3의 배수로 나누어지면 합을 구하여 출력하시오

//1~20

// function es5() {
//   var twoarray = [];
//   var init = 0;
//   var sum = 0;
//   for (var row = 0; row < 2; row++) {
//     twoarray[row] = [];
//     for (var col = 0; col < 10; col++) {
//       twoarray[row][col] = ++init;
//       //3,5,6,10,12
//       if (
//         twoarray[row][col] == 3 ||
//         twoarray[row][col] == 5 ||
//         twoarray[row][col] == 6 ||
//         twoarray[row][col] == 10 ||
//         twoarray[row][col] == 12
//       ) {
//         // 값이 같으면 == , 값과 타입이 같으면 ===
//         if (twoarray[row][col] % 3 === 0) {
//           sum += twoarray[row][col];
//         }
//       }
//     }
//     //변수와 문자를 혼합해서 쓴다
//     console.log(`2차원배열: ${twoarray}`);
//   }
//   return sum;
// }
// console.log(es5());


// function es5Week3(){
// var array =[]; 
// var init=0;

// // 2차원배열 //4행 5열
// for(var row=0; row<4; row++){
// array[row] = []; 
//   for(var col=0; col<5; col++){
 
// array[row][col] = ++init;


//   }
// }


// }
// console.log(es5Week3());

//forof
// function forOf() {
//   var array = [1,2,3,4,5];
//   for(var i=0; i<array.length; i++){
//   console.log(array[i]);
//   }
// }
// console.log(forOf());

//es5, es6 브라우저 버전 
// // //forEach
// var array = [1,2,3,4,5];
// array.forEach(function(array) {
//   console.log(`array:${array}`);
// });
// console.log(forEach());

// var array = [1,2,3,4,5];
// array.forEach(element => {
//   console.log(`element:${element}`);
// });
// console.log(forEach());


// var array = [1,2,3,4,5];
// for (const iter of array) {
//   console.log(`element:${iter}`);  
// }


// //1~20

// function es5() {
//   var twoarray = [];
//   var init = 0;
//   var sum = 0;
//   for (var row = 0; row < 2; row++) {
//     twoarray[row] = [];
//     for (var col = 0; col < 10; col++) {
//       twoarray[row][col] = ++init;
//       //3,5,6,10,12
//       if (
//         twoarray[row][col] == 3 ||
//         twoarray[row][col] == 5 ||
//         twoarray[row][col] == 6 ||
//         twoarray[row][col] == 10 ||
//         twoarray[row][col] == 12
//       ) {
//         // 값이 같으면 == , 값과 타입이 같으면 ===
//         if (twoarray[row][col] % 3 === 0) {
//           sum += twoarray[row][col];
//         }
//       }
//     }
//     //변수와 문자를 혼합해서 쓴다
//     console.log(`2차원배열: ${twoarray}`);
//   }
//   return sum;
// }
// console.log(es5());

// function Map1(){
// let array =[1,2,3,4,5];
// //es5 : 비축약형 {return} 해줘야한다. 
// let print = array.map(function(element){return element});
// //es6 : 축약형 
// let print2 = array.map(element=>element);

// console.log(print);
// console.log(print2);
// }
// console.log(Map1());


function Map2(){
  let array =[1,2,3,4,5];

  
  let print2 = array.map(element=>element);
  
    print2.forEach(element => {
    console.log(element);
  });

}
console.log(Map2());