// // Question: map vs forEach

// const arr1 = [2, 5, 3, 4, 7];

// const mapResult = arr.map((ar) => {
//     return ar + 2;
// });

// const forEachResult = arr.forEach((ar, i) => {
//     arr[i] = ar + 3;
// });

// console.log(mapResult, forEachResult, arr);


// // Question 2: null vs undefined

// console.log(typeof(null));
// console.log(typeof(undefined));

// // console.log(a); // a is not defined

// let a = 0;
// console.log(a); // value = 0

// console.log(null == undefined); // true
// console.log(null === undefined);// false

//// Question 3: Explain event delegation

// document.querySelector("#products").addEventListener("click", (event) => {
//     console.log(event);

//     if (event.target.tagName = 'LI') {
//         window.location.href += '/#' + event.target.id;
//     }
// }); // without adding each event list item we are targeting the parent element and using it to create the list item

// // Question 4: Flatten the Array

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6, [7, 8],9],
//     [10, 11, 12],
// ];

// let flattened = [].concat(...arr);

// function customFlat(arr, depth) {
//     let result = [];
//     arr.forEach((ar) => {
//         if (Array.isArray(ar) && depth > 0) {
//             result.push(...customFlat(ar, depth - 1));
//         } else result.push(ar);
//     });
//     return result;
// }
// console.log(customFlat(arr, 1));


//// Round 2 
//// Question 1: var vs let vs const

// {
//     let a = 'hello';
//     console.log(a);
// }

// let a = 5;
// a = 10;
// console.log(a);

//// Question 2: setTimeout Output

// function a() {
//     for (let i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i); // What is logged?
//         }, i * 1000);
//     }
// }

// a(); 

// //Using Let because of block space

// function b() {
//     for(var i = 0; i < 3; i++) {
//         setTimeout(console.log.bind(null, i), i * 1000);
//     };
// }

// b(); 

// //Using bind is a promise method but it is not suitable for
// //older browser we can use promise.then(console.log.bind(null, i))

// function c() {
//     for(var i = 0; i < 3; i++) {
//         (function(i){
//             setTimeout(() => console.log(i), i * 1000)
//         })(i);
//     };
// }

// c();

// //Using IIFE is the javascript function that runs as soon as it defined
// //This methodolgy is called is closure


// // Question 3: Explain Call, Apply and Bind

// var person = {
//     name: "Apply Bind",
//     hello: function (thing) {
//         console.log(this.name + " say hello " + thing);
//     },
// };

// var alterEgo = {
//     name: "RajPrabhu",
// };

// person.hello.call(alterEgo, "world"); 
// // Call takes the object and makes it as the
// //context of the function with the parameter

// person.hello.apply(alterEgo, ["galaxy"]); 
// // Apply takes an argument as an array which 
// //comes in handy if you want to use an array as an argument 

// const newHello = person.hello.bind(alterEgo)
// newHello("universe");
// // Bind is a function that helps you create a 
// //another function that can execute later with new context


// // Question 5: Composition Polyfill

// function addFive(a) {
//     return a + 5;
// }
// function subtractTwo(a) {
//     return a - 2;
// }
// function multiplyFour(a) {
//     return a * 4;
// }

// const compose = (...functions) => {
//     return (args) => {
//         return functions.reduceRight((arg, fn) => fn(arg), args);
//     }
// } 

// const evaluate1 = compose(addFive, subtractTwo, multiplyFour);
// // compose executes the functions right to left 
// console.log(evaluate1(10)); // 43

// const pipe = (...functions) => {
//     return (args) => {
//         return functions.reduce((arg, fn) => fn(arg), args);
//     }
// }

// const evaluate2 = pipe(addFive, subtractTwo, multiplyFour);
// // pipe executes the functions left to right
// console.log(evaluate2(10)); // 52

// // Question 6: Implement Promise.all

// function showText(text, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, time);
//     });
// }
// function myPromiseAll(promises) {  // Custom implementation of Promise.all
//     let result = [];
//     return new Promise((resolve, reject) => {
//         promises.forEach((p, index) => {
//             p.then((res) => {
//                 result.push(res);
//                 if (index === promises.length - 1) {
//                     resolve(result);
//                 }
//             }).catch((err) => reject(err));
//         });
//     });
// }
// myPromiseAll([
//                 showText("hello", 1000), 
//                 Promise.resolve("hi"), 
//                 // Promise.reject("bye"),
//             ]).then((value) => 
//     console.log(value)
// );
// // Predefined syntax for Promise.all
// Promise.all([showText("hello", 1000), Promise.resolve("hi"),]).then((value) => console.log(value));

// //Question 7: React Life Class Component and Functional Component with Lifecycle Methods


// import React from "react";
// import Counter from "./components/counter";
// import "./styles.css";

// class App extends React.Component {
//   state = {
//     num: 0
//   };

//   plus() {
//     this.setState((state) => ({ num: state.num + 1 }));
//   }
//   minus() {
//     this.setState((state) => ({ num: state.num - 1 }));
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.plus.bind(this)}>+ </button>
//         <Counter number={this.state.num} />
//         <button onClick={this.minus.bind(this)}>+ </button>
//       </>
//     );
//   }
// }

// export default App;

// // Class Components life cycle methods


// import React from "react";

// class Counter extends React.Component {
//   componentDidMount() {
//     console.log("is mounted!");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.number !== this.props.number) {
//       console.log("component is updated!");
//     }
//   }
//   componentWillUnmount() {
//     console.log("component is Unmounted");
//   }
//   render() {
//     return <h1>{this.props.number} times</h1>;
//   }
// }
// export default Counter;

// // Functional Component Life cycle methods

// import React, { useEffect } from "react";

// function Counter({ number }) {
//   useEffect(() => {
//     console.log("component is updated");
//     return () => {
//       console.log("component is unmounted");
//     };
//   }, [number]);
//   return <h1>{number} times</h1>;
// }

// export default Counter;

// //Question 8: Hoisting and temporal dead zone

// function abc() {
    
//     //Temporal dead zone starts when curly braces opens

//     console.log(a, b, c);// throws reference error because we tried to use before initialization
    
//     //Temporal dead zone ends here before initialization
    
//     const c = 30;//reference error
//     let b = 20;//reference error
//     var a = 10;//returns undefined javascript only allows var as its functional scope 
// }
// abc();

// //Question 9: Implicit and explicit Binding

// var obj = {
//     name: "Rajprabhu",
//     display: function() {
//         console.log(this.name);
//     },
// };

// var obj1 = {
//     name: "ABC",
// };

// var obj2 = {
//     name: "Rocky Balboa"
// }
// obj.display();//implicit binding 
// obj.display.call(obj1);//explicit binding 
// obj.display.call(obj2);//explicit binding 

// //Question 9: Implementing Caching/ Memoize Function

// function myMemoize(fn, context) {
//     const res = {};

//     return function (...args) {
//         var argsCache = JSON.stringify(args);
//         if(!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args);
//         } else {
//             return res[argsCache];
//         }
//     };
// }

// const clumsyProduct = (num1, num2) => {
//     for (let i = 1; i <= 100000000; i++) {
//     }
//     return num1 * num2;
// };

// const memoizedClumsyProduct = myMemoize(clumsyProduct);

// console.time("First call");
// console.log(clumsyProduct(9467, 7649));
// console.timeEnd("First call");


// console.time("Second call");
// console.log(clumsyProduct(9467, 7649));
// console.timeEnd("Second call");

// //Question 10: Event Looping

// console.log("a");
// setTimeout(() => console.log("set"), 0);
// Promise.resolve(() => console.log("pro")).then((res) => res());
// console.log("b");

//Output
// a
// b
// pro - microtask queue
// set - Task queue

// //Question 11: Infinite Curring
// function add(a) {
//     return function (b) {
//         if (b) {
//             return add(a+b);
//         } 
//         return a;
//     };
// }

// console.log(add(5)(2)(4)(8)(9)(25)());
// //Infinite Currying means transforming function with multiple arguments into a series of nesting functions

// // Question 12: Implement this code

// const calc = {
//     total: 0,
//     add(a) {// only by returning this keyword we can add more of the functions to it 
//         this.total += a;
//         return this;
//     },
//     multiply(a) {
//         this.total *= a;
//         return this;
//     },
//     subtract(a) {
//         this.total -= a;
//         return this;
//     },
// };


// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// Question 13: onExpand/onSelect
// check code Sandbox

// Question 14: Cost Calculator in React js
//check interview folder

// // Question 15: Pangram checker

// //the quick brown fox jumps over a lazy dog

// function checkPangram(str) {
//     const arr = new Array(26).fill(false);
//     let index;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= "A" && str[i] <= "Z") 
//         index = str.charCodeAt(i) - "A".charCodeAt(0);
//         if (str[i] >= "a" && str[i] <= "z")
//         index = str.charCodeAt(i) - "a".charCodeAt(0);
//         else continue;

//         arr[index] = true;
//     }

//     for (i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === false) return false;
//     }
//     return true;
// }--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const result1 = checkPangram("the quick brown fox jumps over a lazy dog");
// const result2 = checkPangram("the brown fox jumps over a lazy dog");

// console.log(result1, result2);

// // Question 15: Convert 12 hrs to 24

// const convert12to24 = (time12h) => {
//     const [time, modifier] = time12h.split(" ");

//     let [hours, minutes] = time.split(":");

//     if (hours === "12") hours = "00";
    
//     if (modifier === "PM") hours = parseInt(hours) + 12;

//     return `${hours}:${minutes}`;
// };

// console.log(convert12to24("02:02 PM"));
// console.log(convert12to24("04:06 AM"));
// console.log(convert12to24("11:00 PM"));
// console.log(convert12to24("12:00 AM"));

// // Question 16: Implicit Binding

// const user = {
//     name: "Rajprabhu",
//     greet() {
//         return `Hello, ${this.name}!`;
//     },
//     farewell: () => {
//         return `Goodbye, ${this.name}!`;
//     },

// };

// console.log(user.greet());// Hello, Rajprabhu!
// console.log(user.farewell());// Goodbye, ! - because its an arrow function

// //Question 17: Pie Chart

// const pieChart = document.querySelector(".piechart")

// document.querySelector("#inputHandler"), addEventListener("input", (e) => {
//   pieChart.style = `--percentage:${e.target.value}%;`
// });

// // Question 18:

// let obj1;// initialization done here which is wrong
// obj1 = { a: 10 };// Uncaught ReferenceError: Cannot access 'obj1' before initialization
// const obj2 = obj1;
// obj2.a = 20;
// console.log(obj1);// { a: 20 }
// console.log(obj2);// { a: 20 }


// // Question 19: write function for console.log(mul(4)(3)(4));

// function mul(x) {
//     return function(y) {
//       return function(z) {
//         return x*y*z;
//       };
//     }
//   }
    
// // Arrow functions ES6 syntax

// let mul = a => b => c => a*b*c;
//   console.log(mul(4)(3)(4));
//   console.log(mul(2)(3)(4));

// // Question 20: array filter

// var arr = [1, 0, 0, 0, 1, 1, 0, 1, 1];

// let ones = arr.filter(val => {
//     return val === 1;
// });
// let zeros = arr.filter(val => {
//     return val === 0;
// })
// console.log(ones.length);
// console.log(zeros.length);

// // Question 21: Output of the following

// console.log(1);
// setTimeout(function(){console.log(2)}, 1000);
// setTimeout(function(){console.log(3)}, 0);
// console.log(4);

//Output would be 
//1
//4
//3 - setTimeout 0 
//2 - setTimeout 1000

// // Question 22: SetTimeout

// function x() {
//   setTimeout( function() {//here i is undefined
//     console.log(i);// Closure (x) i=1
//   }, 1000);
//   var i = 1;//here i is undefined
// }//here i is 1
// x();

// // Question 23: two sum problem with no same indices 

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}

// var twoSum = function(nums, target) {
//     for(i=0; i<=nums.length; i++) {
//       const diff = target - nums[i];
//       const diffIndex = nums.indexOf(diff);
//       if (diffIndex !== -1 && diffIndex !== i) {
//        return [i, diffIndex];   
//       }            
//     }
//  };

// Question 24 Palindrome Number
