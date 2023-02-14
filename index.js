const app = require('./app')
const fs=require('fs');
const gs=require('fs');

console.log("vikrama");
var a =20;
var b =40;
var c =80;
console.log(a+b+c);



// when triple equal to the check numeric value and string value  while  double equal to the check only value .
var z = 60;  // var z = '20';
if(z===60){ // if(z==20)
    console.log("matched")
}


// // loop
 var x ='20';
 for(i=0;i<10;i++){
    console.log(i);
 }

 var m = '20';
 const arr=[2,5,5,9,87,2,];
 console.log(arr[5])


// const arr=[5,98,55,33,55,15,78];
// what is filter function
//  filter uis the filtering of the array in data .
 
console.log(app)


/*  <----  CORE MODULE IN NODE JAVASCRIPT ---->
    <---- there are two type ----->
    (i)  global module  -- while doesn't import 
    (ii) non global ---> import ex:- file system      
*/

// Global module use fs function
// Create the file 
console.log("Vikramaditya Kumar Verma");
fs.writeFileSync("hello.text","vikramaditya kumar verma");
fs.writeFileSync("hello1.text","Happy valntain day");
gs.writeFileSync("vikram1.text","Happy valntain day");

// Check the Directory name 


console.log(__dirname)

// Check the file name
console.log(__filename)
