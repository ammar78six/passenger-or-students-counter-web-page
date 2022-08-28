/*
//print cmd:
console.log("Hey there i am working on java script");
//addition function:
function addthreeno(a, b, c) {
  return a + b + c;
}
let result = addthreeno(20, 0, 9);
console.log(result);
//difference between let an var:
//var here;
var a = 45;
var e = 50;
{
  var e = 100;
  console.log(e);
}
console.log(e); //both outputs are 100
//let here;
let q = 100;
{
  let q = "apple";
  console.log(q);
}
console.log(q); //first output is apple second is 100
//constant:
const author = "ammar";
console.log(author);
// author='azeem'; //not shown as author is definrd as ammar

//data types in js
//nn bb ss u //yad karne kay liay
let aa = null;
let bb = 365;
let cc = true;
let dd = BigInt("567") + BigInt("3");
let ee = "ammar";
let ff = Symbol("i am a nice symbol");
let g;
console.log(aa, bb, cc, dd, ee, ff, g);
console.log(typeof g);

//chapter 1 practice
//add string to number
let king = "ammar";
let position = 100;
console.log(king + position);
console.log(typeof (king + position));

//constant

const a1 = {
  all: "ammar",
  section: 1,
  isPrinciple: false,
};

//making dictionary
const dict = {
  appericiate: "recoganize full woth of it",
  good: "good is good",
  bad: "bad is bad",
  custoom: "cshtml",
};
console.log(dict.custoom);

//operators and expression
let m = 10;
let nn = 4;
console.log("a+b= ", m + nn);
console.log("a-b= ", m - nn);
console.log("a/b= ", m / nn);
console.log("a**b= ", m ** nn);
console.log("a%b= ", m % nn);

console.log("m= ", m);
console.log("n= ", nn);
console.log("++m", ++m);
console.log("m++", m++);
console.log("m--", m--);
console.log("--m", --m);
console.log("m", m);
console.log("m++", m++);

//chapter 2 practice
let ages = prompt("whats your age?");
if (ages > 10 && ages < 20) {
  console.log("your age lies between 10 and 20");
} else {
  console.log("your age do not lies between 10 and 20");
}

let ag = prompt("whats your age?");
// age = Number.parseInt
switch (ag) {
  case "11":
    console.log("your age in 11");
    break;
  case "12":
    console.log("your age in 12");
    break;
  case "13":
    console.log("your age in 13");
    break;
  case "14":
    console.log("your age in 14");
    break;
  default:
    console.log("your age is not special");
    break;
}
//no is devisible by 2 and 3
let dnum = prompt("whats your number???");
dnum = Number.parseInt(dnum);
if (dnum % 2 == 0 && dnum % 3 == 0) {
  console.log("Your Number is not divisible by 2 and3");
} else {
  console.log("Your number is not divisible by 2 and 3");
}

//check wether divisible by 2 or 3
let num = prompt("whats your number???");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("it can be divided by 2 or 3");
} else if (num % 2 == 0) {
  console.log("It can be devided by 2");
} else if (num % 3 == 0) {
  console.log("it can be devided by 3");
} else {
  console.log("it cant be divided by 2 or 3");
}

//if your age is greater than 18 than you can drive using ternarry operator
let age = prompt("Whats the driver age?");
let l = age > 18 ? "you can drive" : "you cannot drive";
console.log(l);

// loops in javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//adding number till n
let sum = 0;
let nf = prompt("Enter the value of n :");
nf = Number.parseInt(nf);
for (let i = 0; i < nf; i++) {
  sum += i + 1;
}
console.log("sum of first " + nf + " natural no is :" + sum);

//factorial
let fact = 1;
let n = prompt("Enter the value you want factorial off :");
n = Number.parseInt(n);
for (let i = 1; i < n; i++) {
  fact *= i + 1;
}
console.log("the factorial of " + n + " Number is : " + fact);

//for in loop
let sectiong = {
  ammar: 99,
  azeem: 78,
  zeeshan: 32,
  zain: 75,
};

for (let am in sectiong) {
  console.log("Marks of " + am + " are " + sectiong[am]);
}

//for of loop
for (let am of "ammar") {
  console.log(am);
}

//While loops in javascript
let r = prompt("enter value for while loop");
r = Number.parseInt(r);
let i = 10;
while (i < r) {
  //killercode
  console.log(i); //killercode
  i++;
}
do {
  console.log(i);
  i++;
} while (i < r);

//Functions in javascript

function twonoavg(x, y) {
  return (x + y) / 2;
  console.log("Done");
}
r = prompt("Enter 1st no for average  :");
w = prompt("Enter 2nd no for average  :");
r = Number.parseInt(r);
w = Number.parseInt(w);
console.log("the average of " + r + " and " + w + " is = ", twonoavg(r, w));

const hellow = () => {
  console.log("Hellow whats up!!");
  return "hi";
};

let hellooo = hellow(); //must call function to print
console.log(hellooo); //save value of function hellow in hellooo

//paractice question chapter 3
//print name and marks using for loop and for in
let sectionf = {
  ammar: 98,
  azeem: 78,
  zeeshan: 32,
  zain: 75,
};
for (let i = 0; i < Object.keys(sectionf).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(sectionf)[i] +
      " are : " +
      sectionf[Object.keys(sectionf)[i]]
  );
}
for (let key in sectionf) {
  console.log("The Marks of" + key + "are : " + sectionf[key]);
}

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(4, 5, 6, 7));

//strings
let furiut = "bana'na";
console.log(furiut);
console.log(furiut.length);

let namm = "ammar";
console.log(namm[0]);

let boy1 = "ammar";
let boy2 = "osama";
let sentence = `boy1 is friend of boy2`;
console.log(sentence);

let sentenc = `${boy1} is friend of ${boy2}`;
console.log(sentenc);

//strings practice set

console.log('amm"'.length);

//convert string to uppercase
let rt = "the firefox";
let tr = rt.toUpperCase();
console.log(tr);

//slice

let tnt = "the total price is RS 1000";
let tnume = Number.parseInt(tnt.slice(22));
console.log(tnume);

////
let friendd = "osama";
friendd[3] = "R";
console.log(friendd);

//arrays in javascript

let mar = [12, 45, 88, false, "not present"];
console.log(mar);
console.log(mar[0]);
console.log(mar[1]);
console.log(mar[2]);
console.log(mar[3]);
console.log(mar[4]);
console.log(mar[5]);
console.log("the length or above array is : " + mar.length);
mar[6] = 76;
console.log(mar); //adding new item in array

//for loop to print values or array
let arrayt = "The food is as good as my personal chef could cook";
for (let i = 0; i < arrayt.length; i++) {
  console.log(arrayt);
} //loop will print arrayt 50 times

//array method
let cwe = [12, 23, 34, 45, 56];
let ewc = cwe.toString();
console.log(ewc);
console.log(typeof ewc);
let wce = cwe.join("_"); //join
console.log(wce, typeof wce);
let ccw = cwe.pop(); //pop
console.log(cwe, ccw);
cwe.push(56); //push
console.log(cwe);
cwe.shift(); //shift
console.log(cwe);
cwe.unshift(78); //unshift
console.log(cwe);

let opp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(opp);
delete opp[0];
opp.sort();
console.log(opp, opp.length);

//sort function
let compare = (a, b) => {
  return a - b;
};
let anyn = [123, 355, 121, 77, 54, 2, 2, 75];
anyn.sort(compare);
console.log(anyn);
anyn.reverse(); //reverse all the elements in array
anyn.reverse();
console.log(anyn);

//splice and slice
anyn.splice(1, 2, 124234, 242434); //add these values after 1 location up to 2 positions
console.log(anyn);

//for each loop in array

let oppo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
oppo.forEach((element) => {
  console.log(element * element);
});

//array.from
let nname = "ammar";
let arr = Array.from(nname);
console.log(arr);

//for of
for (let i of oppo) {
  console.log(oppo);
}

let arrr = [23, 56, 18];
let po = arrr.map((value) => {
  console.log(value);
  console.log(typeof value);
});
console.log(po);
console.log(typeof po);

//array map method
arr2 = [45, 23, 21];
let rra = arr2.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
// console.log(arr2)
console.log(rra);

//array filter method
arr4 = [45, 23, 21, 0, 12, 5, 3, 8, 1];
let a4 = arr4.filter((value) => {
  return value < 10;
});
console.log(a4);

//array reduce method
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let arrr3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(arrr3);

//reduce practice
let arraytotalmarks = [100, 100, 100, 100, 100, 55, 55];
let resultStd = [];

for (let i in arraytotalmarks) {
  let gainmarks = prompt();
  resultStd.push(gainmarks);
}
let resl = arraytotalmarks.map((curVal, index) => {
  return curVal - resultStd[index];
});
console.log(resl);

//chapter 5 arrays paractice questions

//add 1 no in array by taking from user
let tarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pl = prompt("Enter th number :");
pl = Number.parseInt(pl);
tarr.push(pl);
console.log(tarr);

//keep adding no in array until input is 0
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let linput = [];
do {
  linput = prompt("enter a value  and enter 0 to exit loop : ");
  linput = Number.parseInt(linput);
  arr5.push(linput);
} while (linput != 0);
console.log(arr5);

//filter for numbers divisible by 10 from a given array

let arr6=[1,2,3,4,5,6,7,8,9,35,23,60,95,65,50,25]
let kj =arr6.filter((x)=>{
  return x%5==0;
})
console.log(kj)

// square of the give array
let arr7=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let nb=arr7.map((x)=>{
  return x*x;
})
console.log(nb)
console.log(arr7)

//factorial of all the given numbers combine in array
let arr8=[]
let num = 1;
do{
  num = Number.parseInt(prompt("enter a value  and enter 0 to exit loop : "))
  arr8.push(num)
  // if(num != 0){
  //   arr8.push(num)
  // }
}while(num != 0)
let newNum =arr8.filter((x)=>{
  return x!=0
})
let wo=newNum.reduce((x1,x2)=>{
  return x1*x2
})
console.log(wo)

//dogs age
let myage = 22;
let hdr = 7
let mydogage=myage*hdr
console.log(mydogage)


//bouns points
let bonouspoints=50;
bonouspoints=Number.parseInt(bonouspoints)
console.log(bonouspoints)

bonouspoints= bonouspoints + 50;
console.log(bonouspoints)

bonouspoints=bonouspoints - 75;
console.log(bonouspoints)

bonouspoints=bonouspoints + 45;
console.log(bonouspoints)


//concatinate strings
let firstName = prompt('Enter your first Name : ')
let secondName= prompt('Enter your second Name :')
console.log(firstName + " " + secondName)

function hihi(){
  console.log('Hi there '+ secondName + '!!!')
}
hihi()

*/
//incerment and decrement + we need 10 in output
let mypoints = 3;
function add3point(){
  mypoints +=3
}
function remove1point(){
  mypoints -=1
}
add3point()
add3point()
add3point()
remove1point()
remove1point()
console.log(mypoints)
