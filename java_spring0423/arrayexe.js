//1,2,3,4,5,6
//7,8,9,10,11,12

//짝수의 합 홀수의합을 구해서 출력 총합까지

function twoArray6() {
  var array = [];

  var sum1 = 0; //홀수의합
  var sum2 = 0; //짝수의합
  var init = 0;

  for (var i = 0; i < 2; i++) {
    array[i] = [];

    for (var x = 0; x < 6; x++) {
      array[i][x] = ++init;

      if (array[i][x] % 2 == 0) {
        sum2 = sum2 + array[i][x];
      } else {
        sum1 = sum1 + array[i][x];
      }
    }
  }
  console.log(array);
  console.log("짝수의합" + sum2);
  console.log("홀수의합" + sum1);
  console.log("전체의합" + (sum1 + sum2));
}
console.log(twoArray6());

//1,2,3,4,5,6
//7,8,9,10,11,12

//3,7,10 값을 뺀다
//if(!(array[i][x]==3||i==7||i==10))
//if(array[i][x] !3 && !=7 && !=10)
// if(3,7,10)을 짝수의합 홀수의합을 구해서 출력(총합까지)
function twoArray7() {
  var array = [];

  var sum1 = 0; //홀수의합
  var sum2 = 0; //짝수의합
  var init = 0;

  for (var i = 0; i < 2; i++) {
    array[i] = [];

    for (var x = 0; x < 6; x++) {
      array[i][x] = ++init;
      if (!(array[i][x] == 3 || array[i][x] == 7 || array[i][x] == 10)) {
        if (array[i][x] % 2 == 0) {
          sum2 = sum2 + array[i][x];
        } else {
          sum1 = sum1 + array[i][x];
        }
      }
    }
  }
  return (
    "3,7,9 뺀 짝수의 합: " +
    sum2 +
    "\n3,7,9 뺀 홀수의 합: " +
    sum1 +
    "\n3,7,9 뺀 총합: " +
    (sum1 + sum2)
  );
  // console.log("3,7,9 뺀 짝수의합" + sum2);
  // console.log("3,7,9 뺀 홀수의합" + sum1);
  // console.log("3,7,9 뺀 총합" + (sum1 + sum2));
}
console.log(twoArray7());
