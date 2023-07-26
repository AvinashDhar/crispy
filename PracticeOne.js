								/* Javascript interview question practice */ 

//*******************remove duplicate letters from a string containing duplicate letters*****************


// let name = "avinash";
// console.log([...new Set(name.split(""))].join(""))


//*****************************************polyfill for forEach******************************************


//let array = [1,2,3,"avinash","juli"];

// console.log(Object.getOwnPropertyNames(Array.prototype))

// array.forEach((value,index,array)=>
// console.log(value,index,array))

// Array.prototype.myForEach = function(callback){
// 	for(let i = 0 ; i < this.length; i++){
// 		callback(this[i],i,this);
// 	}
// }

// array.myForEach((value,index,array)=>{
// 	console.log(value,index,array)
// }
// )

//********************************************************************************** */

//reverse a string

// let str = "avinash";
// console.log(str.split('').reverse().join(''));


//********************************************************************************** */
//check if string is palindrome or not

// let str = "avinash";
// const checkPalndrm = (str) => {
// 	let reverseStr = str.split('').reverse().join('');
// 	return str == reverseStr;
// }
// console.log(checkPalndrm("taaatttwewwtaat"));

//********************************************************************************** */

//count the number of words in an array

// let strArr = ["avinash", "avinash", "maantu", "maantu", "maantu", "maantu"];
// const countWord = (arr) => {
// 	let count = {};
// 	arr.forEach(word=>{
// 		if(count[word]){
// 			count[word]++;
// 		}
// 		else{
// 			count[word]=1;
// 		}
// 	})
// 	return count;
// }

// console.log(countWord(strArr));


//********************************************************************************** */

//find maximum number in an array of numbers

// let arr = [1,2,21,1,12,12,13];
// console.log(arr.reduce((total,currentItem) => {
// 	return total>currentItem?total:currentItem;
// }))

//********************************************************************************** */

//find unique values in an array of numbers

//let arr = [1,21,12,12,1,2,3,2,34];

//way 1
//console.log([...new Set(arr)]);

//way 2
// console.log(arr.filter((item,index,array) => {
// 	return array.indexOf(item) === index;
// }))

//********************************************************************************** */

//reverse elements in an array of numbers

// let arr = [1,2,21,232,3443,23211,1,121,12,677,54];

// console.log(arr.reverse());
// console.log(arr.reduceRight((accumulator, currentItem, index, array)=>{
// 	accumulator.push(currentItem); 
// 	return accumulator;
// },[]));

//********************************************************************************** */

//remove falsy values from an array

// let arr = ['',null,undefined,NaN,1,0,false,"tiger"];
// console.log(arr.filter(Boolean));

//********************************************************************************** */

//count number of -ve numbers in an array of numbers

//let arr = [1,-1,-1,2,-2,5,-4,-45,-45,3,2,0,99999,-67676767676,];

//using filter
// console.log(arr.filter(item => item<0).length)

//using reduce
// console.log(arr.reduce((accumulator,item,index,array)=>{
// 	return item < 0 ? accumulator + 1 : accumulator;
// },0))

//********************************************************************************** */

//extract last n elements from an array of numbers

//let arr = [2,3,23,3,45,6,4,33,2,9,88,712,1234,46,87];

//using simple for loop

// const extractFunc = (array, n) => {
// 	let result = [];
// 	for(let i = array.length - n; i < array.length ; i++){
// 		result.push(array[i]);
// 	}
// 	return result;
// }

// console.log(extractFunc(arr,5));

//using slice (in one line)
//console.log(arr.slice(arr.length-5));

//********************************************************************************** */

//guess the output

// const getSkill = (skill) => {
// 	const {data = "IT"} = skill;
// 	return data;
// }

// console.log(getSkill({data:null}))

//********************************************************************************** */

//delete properties from an object destructively

// let obj = {
// 	name: "avinash",
// 	address:"Jharkhand",
// 	age:27,
// }

// delete obj.address;
// console.log(obj);

//delete properties of an object un-destructively

// let obj = {
// 	name: "avinash",
// 	address:"Jharkhand",
// 	age:27,
// }

// let {
// 	address, ...res   //here res contains all the properties except address which we wanted to delete
// } = obj;

// console.log(res)
// console.log("checking for the original obj :",obj)

//********************************************************************************** */


