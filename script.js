// let a = "javascript";
// if (a == "javascript") alert("You have found page this!");

// let b = 9;
// let c = 7;

// console.log(b + c);

// let person1=3
// let $function=3

/////////////// data type of //////////////////
// let script=true;
// console.log(script)
// // console.log(scriptType)
// let scriptType=false

// console.log(typeof 3)
// console.log(typeof true)
// console.log(typeof 'olma')

// let olma;
// console.log(olma)

/////////////// let const and var ///////////////

// let age;
// age=34;
// // console.log(age)

// const ageboy=3;
// // ageboy=9;
// // console.log(ageboy)

// lastName='jamshid';
// console.log(lastName)

// // console.log(firstName)
// // let firstName;
// // firstName=2

// let jamshid

// console.log(jamshid)
// jamshid={
//   name:'jamshid',
//   age:22
// }

// function func(){
//   a=9;
//   console.log(a)
// }

// func()

///////////////////////// basic operators /////////////

// math
// const ageJamshid=2023-2000
// console.log(ageJamshid/2*2, 2**5)

// const firstName='jamshid';
// const lastname="xatamov";
// console.log(firstName+" "+  lastname)

// let a=9;
// let b=9;
// let c=8
// console.log(a+b)
// c++
// c--
// // assignment operators
// console.log(a+=2)
// console.log(b-=7)
// console.log(c*=6)
// console.log(c/=2)

// //comparison operators
// console.log(2>8)
// console.log(lastname>firstName)

///////////////////////// operator precedence ////////////////

//////////////////////// Coding challenge 1//////////////////
// task 1

// let markw1=78
// let markh1=1.69
// let johnw1=92
// let johnh1=1.95

// let BMImark1=markw1/(markh1**2)
// let BMIjohn1=johnw1/(johnh1**2)
// let markHinerBMI1=BMImark1>BMIjohn1
// console.log("Mark BMI 1",BMImark1)
// console.log("John BMI 1",BMIjohn1)
// console.log("Mark and John",markHinerBMI1)

// // task 2

// let markw2 = 95;
// let markh2 = 1.88;
// let johnw2 = 85;
// let johnh2 = 1.76;

// let BMImark2 = markw2 / (markh2 ** 2);
// let BMIjohn2 = johnw2 / (johnh2 ** 2);
// let markHinerBMI2 = BMImark2 > BMIjohn2;
// console.log("Mark BMI 2", BMImark2);
// console.log("John BMI 2", BMIjohn2);
// console.log("Mark and John", markHinerBMI2);

/////////////////////// string and template ////////////

// const firstName='Jamshid';
// const ageYear=2000;
// const nowYear=2023;
// const job='programmer';

// console.log('My name is '+firstName+','+(nowYear-ageYear)+' years old '+job+'!')
// // template
// console.log(`My name is ${firstName},${nowYear-ageYear} years old ${job}! `)
// // \n
// console.log(`My name is Jamshid.\nMy lastname Xatamov.`)

////////////////////// if else statements //////////////////

// const age1 = 23;
// const age2 = 34;

// if(age1<=age2){
//   console.log('Jamshid has got a driving license 🚗')
//   var a=3
//   let b=9
// } else{
//   console.log(`Jamshid has not got a driving license 🤦‍♂️. Your young is ${age1} !`)
// }
// console.log(a);


//////////////// Coding challenge 2 //////////////////////
//task 1

// let markw1=78
// let markh1=1.69
// let johnw1=92
// let johnh1=1.95

// let BMImark1=markw1/(markh1**2)
// let BMIjohn1=johnw1/(johnh1**2)
// console.log('Task 1')
// if(BMImark1>BMIjohn1){
//   console.log(`Mark's BMI (${BMImark1}) is higher than John's (${BMIjohn1})`)
// } else{
//   console.log(`John's BMI (${BMIjohn1}) is higher than Mark's (${BMImark1})`);
// }
// // task 2

// let markw2 = 95;
// let markh2 = 1.88;
// let johnw2 = 85;
// let johnh2 = 1.76;

// let BMImark2 = markw2 / (markh2 ** 2);
// let BMIjohn2 = johnw2 / (johnh2 ** 2);
// console.log("Task 2");
// if (BMImark2 > BMIjohn2) {
//   console.log(`Mark's BMI (${BMImark2}) is higher than John's (${BMIjohn2})`);
// } else {
//   console.log(`John's BMI (${BMIjohn2}) is higher than Mark's (${BMImark2})`);
// }

/////////////////////// Type convertion and coercion ////////////////
// type conversion

// const a='2345'
// console.log(typeof (a+2), a+9, a+'l')
// console.log(Number(a)+200)
// console.log(Number('a'))
// console.log(String(1234))

// // type coercion

// console.log('23'+34)
// console.log(('34'-9-'6'/2)*3)
// console.log('3'>7)
// console.log('34'==34)
// console.log('s'>-98)

//////////////////////////// Truhy and falsy values ////////////////////
// falsy values 0, '', undefined, null, NaN

let a
console.log(Boolean (a),a)
let b=''
console.log(Boolean(b),b)
console.log(Boolean(a+2), a+2)
console.log(Boolean(0),0)
console.log(Boolean(null),null)

console.log(Number(a+8),a+8)
let c={
}
console.log(c)

