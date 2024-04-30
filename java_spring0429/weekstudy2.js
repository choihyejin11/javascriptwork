// function oneArray() {
//   var array = [1, 2, 3, 4, 5];

//   for (var i = 0; i < 5; i++) {
//     console.log(array[i]);
//   }
// }
// console.log(oneArray());

// function oneArray2() {
//   var array = [];

//   for (var i = 0; i < 11; i++) {
//     array[i] = ++init;

//     console.log(`array:${array}`);
//   }
// }
// console.log(oneArray2);

// function twoarray1() {
//   var array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   var init = 0;

//   for (var i = 0; i < 3; i++) {
//     array[i] = [];
//     for (var x = 0; x < 3; x++) {
//       array[i][x] = ++init;
//       console.log(array[i][x]);
//     }
//   }
// }
// console.log(twoarray1());

// //2차원배열 20
// function twoarray2() {
//   var array = [];
//   var init = 0;

//   for (i = 0; i < 2; i++) {
//     array[i] = [];
//     for (x = 0; x < 10; x++) {
//       array[i][x] = ++init;

//       console.log(`2차원1~20배열은 ${array[i][x]}`);
//     }
//   }
// }
// console.log(twoarray2());

//일일문제
// function twoarray3() {
//   //1~20중에서 3,7,9를 뺀 합을 구하시오.
//   var array = [];
//   var sum = 0;
//   var i = 0;
//   var x = 0;
//   var init = 0;
//   var sum2 = 0;

//   var choicearray = [3, 7, 9, 11, 13, 15, 17];
//   //비교해서 맞으면 빼고 합을 구해서 출력
//   for (var i = 0; i < 2; i++) {
//     array[i] = [];
//     for (var x = 0; x < 10; x++) {
//       array[i][x] = ++init;
//     }
//     array.map(element)=>{
//     element.forEach(element => {
//      if(element==)
//     });

//     });
//   }

//   // console.log(`1부터 10까지의 숫자중 3,7,9를 뺀 합은: ${sum}`);
//   return sum + sum2;
// }
// console.log(twoarray3());

// function twoarray3() {
//   var array = [];
//   var sum = 0;
//   var init = 0;
//   var sum2 = 0;

//   var choicearray = [3, 7, 9, 11, 13, 15, 17];

//   // 2차원 배열 생성
//   for (var i = 0; i < 2; i++) {
//     array[i] = [];
//     // 1부터 20까지의 숫자 중에서
//     for (var x = 0; x < 10; x++) {
//       array[i][x] = ++init;
//     }
//   }

//   // 배열 요소를 확인하면서 3, 7, 9,11,13,15,17를 뺀 합을 구한다.
//   // array.forEach((anynumber) => {
//   //   anynumber.forEach((number) => {
//   //     if (!choicearray.includes(number)) {
//   //       sum += number;
//   for (const iter of array) {
//     for (const iter2 of iter) {
//       choicearray.forEach((element) => {
//         if (element == iter2) {
//           if (iter2 % 3 == 0 && iter2 % 3 == 0) {
//             sum = sum + iter2;
//           }
//         }
//       });
//     } console.log(iter2);
//   }

//   // return sum + sum2;
// }
// twoarray3();
function twoarray3() {
  var array = [];
  var sum = 0;
  var choicesum = 0;
  var init = 0;

  var choicearray = [3, 7, 9, 11, 13, 15, 17];

  // 2차원 배열 생성
  for (var i = 0; i < 2; i++) {
    array[i] = [];
    // 1부터 20까지의 숫자 중에서
    for (var x = 0; x < 10; x++) {
      array[i][x] = ++init;
      sum += array[i][x];
    }
  }
  choicearray.forEach((element) => {
    for (var i = 0; i < 2; i++) {
      for (var x = 0; x < 10; x++) {
        if (element == array[i][x] && array[i][x] % 3 == 0) {
          choicesum = choicesum + array[i][x];
        }
      }
    }
  });

  return choicesum;
}

console.log(twoarray3());