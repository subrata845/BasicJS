function number(num)
{
    var mul=num*2;
    console.log(mul);
}

number(4);

function number(num)
{
    var mul=num*2;
    return mul;
}

var firstNum=number(2);
var secondNum=number(3);
console.log(firstNum,secondNum);

function add(num1,num2){
    var result=num1+num2;
    return result;
}

result=add(firstNum,secondNum);

console.log(result);