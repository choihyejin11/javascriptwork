console.log("=======map369제외====");

function Map3() {
  var array = [1,2,3,4,5,6,7,8,9,10];
  var i = 0;

  array.map(function () {

    array[i] = ++i;

    if (array % 3 != 0) {

      console.log(array[i++]);

    }
  });
}

console.log(Map3());


console.log('=======2======');
//map으로 1~10 배열에서 3,6,9만 제외해서 출력하기

function Map4(){

  var array4 = [1,2,3,4,5,6,7,8,9,10];

  array4.map(function(arrays){
    if (arrays % 3 != 0){
    console.log(arrays);
  }

  });


}

console.log(Map4());