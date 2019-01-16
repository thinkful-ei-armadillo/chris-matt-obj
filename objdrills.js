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

// const obj2 = {
//   name: 'Hunter',
//   job: 'Journalist',
// };

// const obj3 = {
//   name: 'Hunter2',
//   job: 'Journalist',
//   boss: obj2.name,
// };

// const obj4 = {
//   name: 'Hunter3',
//   job: 'Journalist',
//   boss: obj2.name,
// };

// const arr = [obj2, obj3, obj4];

// arr.map(obj => obj.hasOwnProperty('boss') ? console.log(`${obj.job} ${obj.name} reports to ${obj.boss}`) : console.log(`${obj.job} ${obj.name} reports to no one.`)); 

// // cracking the code

// const cipher = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };

// function decodeWord(word) {
//   switch (word[0]) {
//   case 'a': 
//     return word[cipher.a];
//   case 'b': 
//     return word[cipher.b];
//   case 'c': 
//     return word[cipher.c];
//   case 'd': 
//     return word[cipher.d];
  
//   default:
//     return ' ';
//   }
// }

// function decode(sen){
//   return sen.split(' ').map(i=>decodeWord(i)).join('');
// }
// //[aba,bas]
// // for(let i = 0 ; i < arr.length ; i++){
// //   decode(arr[i]);
// // }
// //console.log(decode('aba bas'));

// // Factory Functions with LOTR

// function createCharacter(name, race, origin, attack, defense){
//   return{
//     name, race,origin, attack, defense,
//     describe: function(){
//       console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
//     },
//     evaluateFight: function(char){
//       return `Your opponent takes ${this.attack - char.defense} damage and you receive ${this.defense >= char.attack? 0: this.defense -char.attack} damage`;
//     }
//   };
// }

// let Gandalf  = createCharacter('Gandalf the White','Wizard','Middle Earth',10,6);
// let Bilbo   = createCharacter('Bilbo Baggins','Hobbit','The Shire',2,1);
// let Frodo  = createCharacter('Frodo Baggins','Hobbit','The Shire',3,2);
// let Aragorn   = createCharacter('Aragorn son of Arathorn','Man','Dunnedain',6,8);
// let Legolas  = createCharacter('Legolas','Elf','Woodland Realm',8,5);

// let charArr = [Gandalf, Bilbo, Aragorn, Frodo,Legolas];

// charArr.push(createCharacter('Arwen Undomiel','Half Elf', 'Rivendell',10,10));
// charArr.find(i => i.name === 'Aragorn son of Arathorn').describe();

// charArr.filter(i=> i.race === 'Hobbit');

// charArr.filter(i=> i.attack > 5);
// Gandalf.evaluateFight(Frodo);

//How would you change the factory function and other methods?

// You would have to add a weapon prop then change the describe to include the weapon.

// 8. BONUS: A Database Search

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  let result = arr.find(obj => {
    let keys = Object.keys(query); //[id, name, squad]
    for(let i = 0; i < keys.length; i++){
      if(obj[keys[i]] !== query[keys[i]]){
        return false;
      }
    }
    return true;
  });
  return result;
}

//console.log(findOne(HEROES, { squad: 'Justice Ha' }));

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },

  findOne: function(query){
    let result = this.store.heroes.find(obj => {
      let keys = Object.keys(query); //[id, name, squad]
      for(let i = 0; i < keys.length; i++){
        if(obj[keys[i]] !== query[keys[i]]){
          return false;
        }
      }
      return true;
    });
    return result;
  }
};

console.log(Database.findOne({ id: 3, squad: 'Avengers' }));


