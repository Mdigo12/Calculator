var fNum = parseInt(prompt('Enter First Number'));
var sNum = parseInt(prompt('Enter Second Number'));

var sum, diff, product, quotient, modulous;
function myValue(value) {
  alert(value);
};

function add(fNum, sNum) {
  return fNum + sNum;
};
sum = ('The sum is' + ' ' + add(fNum, sNum));

function dif(fNum, sNum) {
  return fNum - sNum;
};
diff = ('The difference is' + ' ' + dif(fNum, sNum));
myValue(diff)

function mult(fNum, sNum) {
  return fNum * sNum;
};
product = ('The product is' + ' ' + mult(fNum, sNum));

function quot(fNum, sNum) {
  return fNum / sNum;
};
quotient = ('The quotient is' + ' ' + quot(fNum, sNum));

function mod(fNum, sNum) {
  return fNum % sNum;
};
modulous = ('The reminder is' + ' ' + mod(fNum, sNum));

var fNum = parseFloat(prompt('Enter your weight in Kg'));
var sNum = parseFloat(prompt('Enter your Height In Metres'));

function bmi(fNum, sNum) {
  return fNum / (sNum*sNum);
};

alert( 'Your BMI is' +' ' + bmi(fNum, sNum));