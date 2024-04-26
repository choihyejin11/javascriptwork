//2~10까지 짝수 홀수의 합

console.log("===for===");

function Forsum() {
  var two_sum1 = 0; //짝수의합
  var one_sum1 = 0; //홀수의합
  var init = 0;

  for (var i = 2; i <= 10; i++) {
    i = i + init;
    if (i % 2 == 0) {
      two_sum1 = two_sum1 + i;
    } else {
      one_sum1 = one_sum1 + i;
    }
  }
  console.log(two_sum1);
  console.log(one_sum1);
}
console.log(Forsum());

console.log("===while===");

function Whilesum() {
  var i = 2;
  var two_sum2 = 0; //짝수의합
  var one_sum2 = 0; //홀수의합

  while (i <= 10) {
    // i = ++init; 여기에 쓰면 다른값 됨
    if (i % 2 == 0) {
      two_sum2 = two_sum2 + i;
    } else {
      one_sum2 = one_sum2 + i;
    }
    i++; //i를 1씩 증가시키다 
  }
  console.log(two_sum2);
  console.log(one_sum2);
}
console.log(Whilesum());

console.log("===do while===");

function Dowhilesum() {
  var i = 2;

  var two_sum3 = 0; //짝수의합
  var one_sum3 = 0; //홀수의합

  do {
    // i = ++init; 여기에 쓰면 다른값 됨 
    if (i % 2 == 0) {
      two_sum3 = two_sum3 + i;
    } else {
      one_sum3 = one_sum3 + i;
    }
  } while (++i <= 10);
  i++; //i를 1씩 증가시키다 

  console.log(two_sum3);
  console.log(one_sum3);
}
console.log(Dowhilesum());
