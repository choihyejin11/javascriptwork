/*console.log("it에 오신것을 환영합니다");

//react, framework 가 어렵다.

//개발규칙: 명사명사 뒤에 첫글자는 대문자, 명사 앞에 글자는 대문자
function oneArray1() {
  //1차원 배열(공통)
  //모든 배열은 0부터 시작한다 index (0)

  var array = [1, 2, 3, 4];

  for (var i = 0; i < 4; i++) {
    console.log(array[i]);
  }
}
console.log(oneArray1());

//값을 입력하고 출력한다
//1234 출력하기
function oneArray2() {
  //입력받고 출력
  //[]: 뭐가 들어갈지 몰라서.요소가
  var array = [];
  var init = 0;

  for (var i = 0; i < 4; i++) {
    array[i] = ++init;
    console.log(array[i]);
  }
}
console.log(oneArray2());

function Underfined() {
  //function은 기본적으로 return 값으로 던져야한다.
  //return : 되돌리다(어떤타입을(문자형,정수형,불린형))

  console.log("=========");
  console.log("print....");
  return;
}
//f3: 선택된 함수나 변수로 점프한다
//마우스 누르고 +ctrl 누르면 점프한다
//ctrl + o : 현재페이지의 모든 함수나 변수 보여준다 상단위작업영역
console.log(Underfined());

//1~10 합을 구하시오 return sum

//함수(메소드)펑션
function oneArray3() {
  var init = 0;
  var array = [];
  var sum = 0;

  for (i = 0; (i = 10); i++) {
    array[i] = ++init;
    sum = sum + array[i];
  }
  return sum;
}

console.log(oneArray3()); */

//일일과제> 함수 : 이름은 본인이름
//2~11 배열 만들어 합을 구하고 return 출력하시오

console.log("==일일과제==");

function ChoiHyeJin() {
  var init = 1;
  var sum = 0;
  var array = [];

  for (j = 0; j < 10; j++) {
    array[j] = ++init;
    sum += array[j];
    
    
  }
  return sum;
  //console.log(sum);
}
console.log(ChoiHyeJin());
