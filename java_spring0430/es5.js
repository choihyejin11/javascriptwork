// "use strict";



// String[number] access

// 문자열에서 특정 인덱스의 문자에 접근합니다.

function stringIndexAccess() {

    const str = "안녕하세요";
   // 백스텝
    console.log(`stringIndexAccess:${str[0]}`); // "안"

    // 문자열 "안녕하세요"의 첫 번째 문자는 "안"입니다.

    for(var i=0; i<str.length; i++){
    console.log(str[i]);}

    const name = "김현호";

    console.log(name[0]);



}

 console.log(stringIndexAccess());

// String.trim()

// 문자열의 양 끝에 있는 공백을 제거합니다.
//trim : 공백자르기 

function stringTrim() {
 //공백도 문자열이다 
    const strWithSpaces = "  안녕하세요  ";

    console.log("stringTrim:", strWithSpaces.trim()); // "안녕하세요"
    console.log(`stringIndexAccess: ${stringIndexAccess.length}`);
    // 문자열 "  안녕하세요  "의 양 끝 공백을 제거하면 "안녕하세요"가 됩니다.

 var trimstr = strWithSpaces.trim();
 //trim 된 문자열 길이기 
 console.log(`trimstr:${trimstr.length}`);


}
console.log(stringTrim());
console.log(trimstr());

// Array.isArray()

// 배열인지 여부를 확인합니다.

function isArrayExample() {

    const arr = [1, 2, 3];//배열인가 ?
 var str = '아무개';
    console.log("isArrayExample:", Array.isArray(arr)); // true

    // 배열 [1, 2, 3]은 배열입니다.

}

console.log(isArrayExample());

// Array forEach()

// 배열 요소를 반복하면서 작업을 수행합니다.

function arrayForEach() {

    const numbers = [1, 2, 3];

    for(var i=0; i<3, i++){
        console.log(numbers[i]);

        }
    } 
    console.log(arrayForEach());

 function arrayForEach() {
     const numbers = [1, 2, 3];
    

    numbers.forEach(function(element) => {
        console.log(element);

            });

   
//numbers : 배열명   iterator : 요소(element)
for (const iterator of numbers) {
console.log(iterator());    
}



// Array map()

// 배열의 각 요소에 함수를 적용하고 새로운 배열을 반환합니다.

function arrayMap() {

    const numbers = [1, 2, 3];
//const 상수 : 움직일수 없다 
   const mapprint = number.map(function(element){return element});
//    const mapprint = number.map(function(element){return element});

   

    //   화살표 함수의 축약형(shortened syntax) 바로 반환
console.log(`mapprint:${mapprint}`);
// 새로운 배열을 만든다
    const doubledNumbers2 = numbers.map((number) => { return number * 2 });

    //{}는축약형이 아니므로 return 놓어야함 


    console.log("doublenumbers:", doubledNumbers2); // [2, 4, 6]

    // 배열 [1, 2, 3]의 각 요소에 2를 곱한 새로운 배열을 반환합니다.

}
console.log(arrayMap());



// Array map()

// 배열의 각 요소에 함수를 적용하고 새로운 배열을 반환합니다.

function arrayMap2() {

    // 1차원배열로 1 ~ 5까지 값을 놓고 출력 



    var array = [];

   for (var i = 0; i< 5; i++) {

        array[i]=i+1;

    }

    //비축약형

//    const maparray= array.map(function(arr){return arr});

//    const maparray= array.map((arr)=> (arr)); 
const maparray= array.map(arr=> arr); // () 생략가능

//    const maparray3= array.map(arr=> (arr));

  

    console.log("arrayMap:", maparray); // [2, 4, 6]

    // 배열 [1, 2, 3]의 각 요소에 2를 곱한 새로운 배열을 반환합니다.

}


console.log(arrayMap2());





// Array filter()

// 배열 요소를 걸러내어 새로운 배열을 반환합니다.

function arrayFilter() {

    const numbers = [1, 2, 3];

    const evenNumbers = numbers.filter(function(number){return number % 2 === 0});

    //축약형 

    const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

    console.log("arrayFilter:", evenNumbers); // [2]

    // 배열 [1, 2, 3]에서 짝수인 요소만 걸러낸 새로운 배열을 반환합니다.

}

console.log(arrayFilter());



// Array reduce()

// 배열의 각 요소에 대해 함수를 실행하고 하나의 결과값을 반환합니다.

function arrayReduce() {

    const numbers = [1, 2, 3];
                              //acc 합, curr 현재요소 acc + curr, 0 : 0부터 값을 시작하겠다
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    console.log("arrayReduce:", sum); // 6

    // 배열 [1, 2, 3]의 모든 요소를 합한 결과는 6입니다.

}
// Array reduceRight()

// 배열의 요소를 오른쪽에서 왼쪽으로 처리하며 함수를 실행합니다.

function arrayReduceRight() {

    const numbers = [1, 2, 3];

    const reversedNumbers = numbers.reduceRight((acc, curr) => {

        acc.push(curr);

        return acc;

    }, []);

    console.log("arrayReduceRight:", reversedNumbers); // [3, 2, 1]

    // 배열 [1, 2, 3]을 오른쪽에서 왼쪽으로 처리하여 뒤집은 배열을 반환합니다.

}



// Array every()

// 배열의 모든 요소가 주어진 조건을 만족하는지 검사합니다.

function arrayEvery() {

    const numbers = [1, 2, 3];
     //모든 배열요소가 만족해야 TRUE , 하나라도 아니면 FALSE 
    const allGreaterThanZero = numbers.every((number) => number > 0);

    console.log("arrayEvery:", allGreaterThanZero); // true

    // 배열 [1, 2, 3]의 모든 요소가 0보다 큽니다.

}
console.log(arrayEvery());



// Array some()

// 배열의 일부 요소가 주어진 조건을 만족하는지 검사합니다.

function arraySome() {

    const numbers = [1, 2, 3];

    const someGreaterThanTwo = numbers.some((number) => number > 2);

    console.log("arraySome:", someGreaterThanTwo); // true
    // 하나라도 요소(element) 만족하면 true 
    // 배열 [1, 2, 3] 중에서 2보다 큰 요소가 적어도 하나 있습니다.

}



// Array indexOf()

// 배열에서 특정 요소의 인덱스를 찾습니다.

function arrayIndexOf() {

    const numbers = [1, 2, 3];

    const index = numbers.indexOf(2);

    console.log("arrayIndexOf:", index); // 1

    // 배열 [1, 2, 3]에서 숫자 2의 인덱스는 1입니다.

}



// Array lastIndexOf()

// 배열에서 특정 요소의 마지막 인덱스를 찾습니다.

function arrayLastIndexOf() {

    const numbers = [1, 2, 2, 3];

    const lastIndex = numbers.lastIndexOf(2);

    console.log("arrayLastIndexOf:", lastIndex); // 2

    // 배열 [1, 2, 2, 3]에서 숫자 2의 마지막 인덱스는 2입니다.

}



// JSON.parse()

// JSON 문자열을 파싱하여 자바스크립트 객체로 변환합니다.
//restful  
// 백엔드에서 값을 던지면 프런트엔드에서 값을 받아서 출력
//프런트엔드에서 값을 입력하면 백엔드로 값을 던진다
//서버부하가 거의 없고 리프레쉬(화면 깜빡임)가 없다


//json을 js로 바꾸겠다는 말 
function jsonParseExample() {

    const jsonStr = '{"name": "John", "age": 30}';

    const obj = JSON.parse(jsonStr);

    console.log("jsonParseExample:", obj.name); // "John"

    // JSON 문자열을 파싱하여 얻은 객체의 이름은 "John"입니다.

}



// JSON.stringify()

// 자바스크립트 객체를 JSON 문자열로 변환합니다.

function jsonStringifyExample() {

    const newObj = { name: "Alice", age: 25 };

    const jsonString = JSON.stringify(newObj);

    console.log("jsonStringifyExample:", jsonString); // '{"name":"Alice","age":25}'

    // 객체 { name: "Alice", age: 25 }를 JSON 문자열로 변환하면 '{"name":"Alice","age":25}'입니다.

}



// Property getters and setters

// 속성의 값을 가져오거나 설정하는 방법을 제공합니다.

function gettersSettersExample() {

    const person = {

        _name: "John",

        get name() {

            return this._name;

        },

        set name(value) {

            this._name = value;

        },

    };


   
  console.log("gettersSettersExample:", person.name); // "John"

   person.name = "jin"

   console.log("gettersSettersExample:", person.name); 

    person.name = "Jane";

    console.log("gettersSettersExample:", person.name); // "Jane"

    // 속성 _name의 값을 가져오거나 설정하여 이름을 변경할 수 있습니다.

}



// Reserved words as property names

// 예약어를 속성 이름으로 사용할 수 있습니다.

function reservedWordsExample() {

    //예약어: 변수명으로 쓸수 없다. for, while
    const objWithReservedWord = { if: 10, if2:20 };

    console.log("reservedWordsExample:", objWithReservedWord.if); // 10
    console.log(`reservedWordExample:${objWithReservedWord.if2}`); // 20

    // 속성 이름이 'if'인 객체에서 해당 속성의 값은 10입니다.

}
console.log(reservedWordsExample());


// Object methods

// 객체의 속성과 메서드를 다룰 수 있습니다.

function objectMethodsExample() {

    const car = {
        name : "jin",
        age : 20,
        arress : "송파",

        brand: "Hyundai",

        color: "Red",
        //()동사 -> 무조건움직인다 메소드(함수)
        //괄호가없는것(배열):변수
        honk() {

            console.log("Beep beep!");

        },

    };


    // console.log(`car.name:${car.name}`);
    car.honk();

    // console.log("objectMethodsExample:", car.brand); // "Hyundai"

    // car.honk(); // "Beep beep!"

    // 객체의 브랜드 이름은 "Hyundai"이고, honk 메서드를 호출하면 "Beep beep!"가 출력됩니다.

}



// Managing Objects

// 객체를 관리하고 다룹니다.

function managingObjectsExample() {

    const obj1 = { a: 1, b: 2 };

    const obj2 = { b: 3, c: 4 };

    // const mergedObj = { ...obj1, ...obj2 };

    // console.log("managingObjectsExample:", mergedObj); // {a: 1, b: 3, c: 4}

    // 객체 obj1과 obj2의 속성을 모두 포함하는 새로운 객체를 만듭니다.
  console.log('obj1.a:${obj1.a}');



// Protecting Objects

// 객체를 보호하고 수정을 제한할 수 있습니다.

function protectingObjectsExample() {

    const frozenObj = Object.freeze({ x: 10, y: 20 });

    // 아래 코드는 에러가 발생합니다.

    // frozenObj.x = 30;

    // 객체의 속성을 수정할 수 없도록 동결시킵니다.

}



// Object defineProperty()

// 객체에 새 속성을 정의하거나 속성을 수정합니다.

function definePropertyExample() {

    const newObj = {};

    Object.defineProperty(newObj, "x", {

        value: 42,

        writable: false, // 속성 값을 수정할 수 없습니다.

    });



    console.log("definePropertyExample:", newObj.x); // 42

    // 객체의 속성 x의 값을 42로 정의하고 수정할 수 없도록 설정합니다.

}



// Function.bind()

// 함수의 this 값을 지정한 객체로 고정합니다.

function bindExample() {

    const person2 = {

        name: "Alice",

        greet: function () {

            console.log("Hello, " + this.name);

        },

    };

    const greetFunction = person2.greet.bind(person2);

    greetFunction(); // "Hello, Alice"

    // greet 함수의 this 값을 person2로 고정하여 호출하면 "Hello, Alice"가 출력됩니다.

}



// Trailing commas

// 배열 또는 객체의 마지막 요소 뒤에 쉼표를 추가할 수 있습니다.

function trailingCommasExample() {

    const arrWithComma = [1, 2, 3,];

    console.log("trailingCommasExample:", arrWithComma); // [1, 2, 3]

    // 마지막 요소 뒤에 쉼표를 추가한 배열은 [1, 2, 3]입니다.

}



// 예제 실행

// console.log(stringIndexAccess());

// console.log(stringTrim());

// console.log(isArrayExample());

// console.log(arrayForEach());

// console.log(arrayMap());

// console.log(arrayFilter());

// console.log(arrayReduce());

// console.log(arrayReduceRight());

// console.log(arrayEvery());

// console.log(arraySome());

// console.log(arrayIndexOf());

// console.log(arrayLastIndexOf());

// console.log(jsonParseExample());

// console.log(jsonStringifyExample());

// console.log(gettersSettersExample());

// console.log(reservedWordsExample());

// console.log(objectMethodsExample());

// console.log(managingObjectsExample());

// console.log(protectingObjectsExampl);

// console.log(definePropertyExample());

// console.log(bindExample());

// console.log(trailingCommasExample());

