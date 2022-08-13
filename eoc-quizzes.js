const characters = require('./characters.json');

// Using the characters imported from the json file (look at line 1)
// Find the "Queen of Thorns"
// console.log her full name
// use only .map(), .find() or .filter() Array methods

// YOUR CODE GOES HERE

characters.find(function(element){
    if(element.title === "Queen of Thorns"){
        console.log(element.fullName);
    }
});



/**
 * Question 6
 */


 const characters = require('./characters.json');

 // Filter only the characters that died in the show (if a character lived, leave it out)
 // if a character was killed by another character on the list, replace the killer's index (number) with the killer's title
 // use only either .map(), or .find() or .filter() methods
 
 // YOUR CODE GOES HERE
 const killed = characters.filter(function(element){
     return element.killedBy !== null;
 }); // ...
 
 console.log(killed);
 
 
 
 
 
 // function(element){
 //     element.killedBy !== null;
 // }
 
 // c => !!c.killedBy



 /**
  * Question 7
  */


 // Add the function content and paremeters
// This function will have unknown number of parameters
// The function will receive users that have different position in a family
// Each user can be a grandparent, a parent or a sibling
// The function will spread all paremeters into three groups and return the following object

/* 
   {
       grandParents: [ *** here will be grandmother or grandfather *** ],
       parents: [ *** here will be mother or father *** ],
       siblings: [ *** here will be all the rest *** ]
   }
*/

// YOU CAN CHANGE THE FOLLOWING FUNCTION
// DON'T CHANGE THE FUNCTION NAME
// ONLY ITS CONTENT AND PARAMETERS
const createFamilyTree = function (...params) {

    let newObject = {

            grandParents: [],
            parents: [],
            siblings: []

        };

    for(const element of params){
        if(element.relation == "grandmother" || element.relation == "grandfather"){
                newObject.grandParents.push(element);
        }else if(element.relation == "father" || element.relation == "mother"){
                newObject.parents.push(element);
        }else{
            newObject.siblings.push(element);
        }
    }
    
    return newObject;

}


export default createFamilyTree



