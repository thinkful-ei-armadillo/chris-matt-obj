'use strict';
// function createMyObject (){
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function(){
//       return 'hello';
//     },
//   };
// }

// function updateObject(obj){
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: `${this.firstName} ${this.lastName}`,
//   };
//   return person;
// }

// const sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar; 
//   return obj;
// }

// function makeStudentsReport(data) {
//   // your code here
//   return data.map(i=> `name:${i.name} grade:${i.grade}`);
// }

// const studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology',
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science',
//   },
// ];

// function enrollInSummerSchool(students) {
//   // your code here
//   return students.map(i=> i.status = 'In Summer school');
// }

// const scratchData = [
//   { id: 22, foo: 'bar' },
//   { id: 28, foo: 'bizz' },
//   { id: 19, foo: 'bazz' },
// ];

// function findById(items, idNum) {
//   // your code here
//   return items.find(obj => obj.id === idNum);
// }

// // running the function with `objectA` and `expectedKeys`
// // should return `true`
// const objectA = {
//   id: 2,
//   name: 'Jane Doe',
//   age: 34,
//   city: 'Chicago',
// };

// // running the function with `objectB` and `expectedKeys`
// // should return `false`
// const objectB = {
//   id: 3,
//   age: 33,
//   city: 'Peoria',
// };

// const expectedKeys = ['id', 'name', 'age', 'city'];

// function validateKeys(object, expectedKeys) {
//   // your code goes here
//   let objKeys = Object.keys(object);
  
//   for(let i = 0; i < objKeys.length; i++){
//     if(expectedKeys.indexOf(objKeys[i]) === -1)
//       return false;
//   }

//   return true; 

// }
// /* From here down, you are not expected to 
//    understand.... for now :)  
   
   
//    Nothing to see here!
   
// */

// function testIt() {
//   const objectA = {
//     id: 2,
//     name: 'Jane Doe',
//     age: 34,
//     city: 'Chicago',
//   };

//   const objectB = {
//     id: 3,
//     age: 33,
//     city: 'Peoria',
//   };

//   const objectC = {
//     id: 9,
//     name: 'Billy Bear',
//     age: 62,
//     city: 'Milwaukee',
//     status: 'paused',
//   };

//   const objectD = {
//     foo: 2,
//     bar: 'Jane Doe',
//     bizz: 34,
//     bang: 'Chicago',
//   };

//   const expectedKeys = ['id', 'name', 'age', 'city'];

//   if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
//     console.error('FAILURE: validateKeys should return a boolean value');
//     return;
//   }

//   if (!validateKeys(objectA, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return true but returned false:
//       Object: ${JSON.stringify(objectA)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectB, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectB)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectC, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectC)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectD, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectD)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   console.log('SUCCESS: validateKeys is working');
// }

// testIt();

// const loaf = {
//   flour : 300,
//   water : 210,
//   hydration : function (){
//     console.log(this.water/(this.flour*100));
//   }
// };

// console.log(loaf.flour, loaf.water);

// const obj = {
//   foo: 1,
//   bar: 2,
//   fum: 3,
//   quux: 4,
//   spam: 5,
// };

// for (let key in obj){
//   console.log (`${key} : ${obj[key]}`); 
// }

// const food = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };
// console.log (food.meals[3]);

const obj2 = {
  name: 'Hunter',
  job: 'Journalist',
};

const obj3 = {
  name: 'Hunter2',
  job: 'Journalist',
  boss: obj2.name,
};

const obj4 = {
  name: 'Hunter3',
  job: 'Journalist',
  boss: obj2.name,
};

const arr = [obj2, obj3, obj4];

arr.map(obj => obj.hasOwnProperty('boss') ? console.log(`${this.job} ${this.name} reports to ${this.boss}`) : console.log(`${this.job} ${this.name} reports to no one.`)); 

