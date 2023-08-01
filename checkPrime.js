var n=19;
var k=0;
for(i=1;i<n-1;i++)
{
    if(n%2==0)
    {
        k++;
    }
else
{
    k=0;
}
}

if(k==0){
    console.log("prime");
    }
    else
    {
        console.log("not prime");
    }
    
var num;
    function isPrime(num)
    {
        for(i=1;i<num-1;i++)
{
    if(num%2==0)
    {
        return "not prime"
    }
else
{
    return "prime"
}
}
    }
    console.log(isPrime(129));