var speech="Now I am become death,the destroyer of the world."
var count=0;
for (var i=0; i< speech.length;i++){
    var element=speech[i];
    if(element==" " && speech[i-1]!=" ")
    {
        count++;
    }
}
count++;
console.log(count);