// //1~5까지 배열로 출력하시오
// function oneArray1() {
//   var array = [1, 2, 3, 4, 5];
//   // 배열은 0부터 끄집어낸다
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// console.log(oneArray1());

// //1~9까지 배열로 출력하시오
// function oneArray2() {
//   var array = [];

//   for (var i = 0; i < 9; i++) {
//     array[i] = i + 1;

//     console.log(array[i]);
//   }
// }
// console.log(oneArray2());

// //0~11까지 배열로 출력하시오
// function oneArray3() {
//   var array = [];

//   for (var i = 0; i <= 11; i++) {
//     array[i] = i;
//     console.log(array[i]);
//   }
// }
// console.log(oneArray3());

// function twoArray() {
//   //2차원 배열
//   var array = [
//     [1, 2, 3],
//     [4, 5, 6],
//   ];

//   for (var i = 0; i < 2; i++) {
//     for (var x = 0; x < 3; x++) {
//       console.log(array[i][x]);
//     }
//   }
// }
// console.log(twoArray());

function twoArray2() {
  var array = []; //빈 배열을 생성
  var init = 0; //초기값을 설정

  for (var i = 0; i < 2; i++) { //외부 반복문: 배열의 행을 나타냄
    array[i] = []; //각 행마다 빈 배열을 생성
    for (var x = 0; x < 3; x++) { //내부 반복문: 배열의 열을 나타냄
      array[i][x] = ++init; //각 요소에 초기값을 할당하고, 초기값을 증가
      console.log(array[i][x]); // 각 요소를 출력
    }
  }
}
console.log(twoArray2());
