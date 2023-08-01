function reverseString(str)
{
    var reverse="";
    for(var i=0;i<str.length;i++)
    {
var char=str[i];
reverse=char+reverse;
console.log(reverse);
    }
    return reverse;
}

var statement ="Now I am become death";
console.log(reverseString(statement));

