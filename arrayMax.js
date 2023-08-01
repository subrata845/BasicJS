var marks = [45,81,63,98,56,35,23];
var max = marks[0];
var sum=0;
for(var i=0; i<marks.length ; i++)
{
    var element= marks[i];
    sum=sum+element;
    if(element>max)
    {
        max=element;
    }
}
console.log("Highest value number is :", max);
console.log("Sum :",sum);