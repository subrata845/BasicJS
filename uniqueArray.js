var array1=[6,3,8,2,3,7,2,9,10,22,1,7,2];
var uniqueName = [];
for(var i=0;i<array1.length;i++)
{
    var element=array1[i];
    var index=uniqueName.indexOf(element);
    if(index==-1)
    uniqueName.push(element);
}
console.log(uniqueName);