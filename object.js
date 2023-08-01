var student1={id:121, phone:973492, name:"Abir"};
var student2={id:120, phone:973492, name:"Mihir"};

var phoneNo = student1["phone"];
console.log(phoneNo);
console.log(student1);
console.log(student2.phone);

//update phone

student1.phone=9999;
console.log(student1);

//update new property
student1.cinema="Oppenheimer"
console.log(student1);