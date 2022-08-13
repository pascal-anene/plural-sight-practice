/**
 * EOC Assessment Questions 
 * For Javascript Basics
 */

// const teamAmerica = [
//     ["Carson", "KIA"],
//     ["Chris", "Martial-arts expert"],
//     ["Gary Johnston", "Leader"],
//     ["I.N.T.E.L.L.I.G.E.N.C.E. ", "AI"],
//     ["Joe", "Pilot"],
//     ["Lisa", "Expert psychologist"],
//     ["Sarah", "Self-proclaimed psychic"],
//     ["Spottswoode", "Creator"],
//   ];
  
//   const teamAmericaDictionary = {};
  
//   // Using forEach, populate teamAmericaDictionary so it will have:
//   // 1. the characters’ names as keys
//   // 2. the characters’ positions as values.
  
//   // YOUR CODE GOES HERE

  

//   teamAmerica.forEach(function(element, index, array) {

//    teamAmericaDictionary[element[0]] = element[1]; 

// });
  
//   // console.log(teamAmericaDictionary);


// /**
//  * Question Three
//  */


//  const animals = ["a cat", "a dog", "a mouse", "a bird"];

//  function adopt(customer, animal) {
//      return `${customer} adopted ${animal}`;
//  }
 
//  // Add one line of code to destruct the array. 
//  // Destructing the array should result in the output ”John Wick adopted a dog”
 
//  // INSERT ONE LINE OF CODE HERE

//  [cat, dog, mouse, bird] = animals;
 
//  // console.log(adopt("John Wick", dog));

 /** 
  * Question Four
  */

//   const animals = ["cat", "dog", "ant", "wolf", "eel", "shark", "owl", "iguana"];

//   // Use .map() to add "a" or "an" to each animal.
//   // Reminder: "an" should come before vowels

//   const animalsWithArticle =  animals.map( function (element) {

//     let newWord = "";

//     switch(element.charAt(0)){


//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           newWord = "an" + " " + element;
//         break;

//         default:
//             newWord = "a" + " " + element;

//     }

//     return newWord;

//   });

//   console.log(animalsWithArticle);


  /**
   * Question number Five
   */

   const row = ["Lenin", "Marx", "Zedong", "Stalin", "Trotsky"];

   // The array represents a row in a movie theatre
   // So these people sit next to each other
   // create a function to move everyone one step to the left
   // Which means the third person will move to the second seat
   // If there is nowhere to move (the first one), move them to most right seat (last one)
   // The original list should not be changed
   
   function moveAllLeft(row) {
       // YOUR CODE GOES HERE
       let shuffledRow = [];
       
       [personA,personB,personC,personD,personE] = row;

       shuffledRow.push(personB,personC,personD,personE,personA);

       return shuffledRow;

   };



   console.log(row);
   
   console.log(moveAllLeft(row));
   