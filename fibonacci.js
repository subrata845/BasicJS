var n;
var fibo=[0,1];
function fiboo(n){
    for(var i=2;i<n;i++)
    {
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}


console.log(fiboo(10));

var m;

function fibooo(m)
{
    if(m==0)
    return 0;
    if(m==1)
    return 1;
    else
    return fibooo(m-1)+fibooo(m-2);
}
console.log(fibooo(8));

var k;

function fiboook(k)
{
    if(k==0)
    return 0;
    else if(k==1)
    return [0,1];
    else
    {
        var fibol=fiboook(k-1);
        var nextElement=fibol[k-1]+fibol[k-2];
        fibol.push(nextElement);
        return fibol;
    }
}
console.log(fiboook(8));
