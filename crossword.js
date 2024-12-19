const dict = [
    "abacus", "ability", "able", "absence", "academy", "account", "accuse", "advice", "agency", "ale", "alcohol", "analysis", "animal", "anxiety", "ape", "appearance", "apple", "arrival", "balance", "biology", "budget", "capital", "courage", "digital",  "election", "empire", "enough", "failure", "feature", "festival", "flavor", "fortune", "freedom", "garden","guitar", "hospital", "imagine", "impact", "journey", "justice", "laptop", "library", "machine", "market", "mentor", "notebook", "obvious", "package", "piano", "project", "quality", "reality", "refugee", "relevant", "school", "service", "success", "theory", "universe", "vehicle", "wedding", "wonder", "zoom", "bicycle", "calendar", "dolphin", "elephant", "furniture", "horizon", "island", "jacket",
    "koala", "lemon", "mountain", "octopus", "quaint", "robot", "sunflower", "tiger", "umbrella", "village", "whistle", "xenon", "yellow", "zebra", "antique", "button", "climate", "dynamo", "energy", "glory", "harmony", "ink", "jungle", "kettle", "lantern", "mango", "nectar", "orchestra", "puzzle", "quiet", "riddle", "story", "treasure", "understand", "velocity", "wave", "x-ray", "yoga", "zenith", "book", "sun", "flower", "pink", "bale", "banana", "at", "batman",
    "baker", "ball", "balloon", "bar", "bat", "bottle", "bore", "brake", "care", "cap", "cane", "cat", "came", "cot", "coat", "taco", "tap", "trip", "tree", "tune", "tug", "turtle", "star", "stamp", "stand", "slip", "slate", "sale", "salt", "sat", "ship", "shine", "stack", "skip", "skirt",
    "sand", "rose", "rope", "rip", "ripple", "rat", "rate", "race", "racecar", "ran", "run","roll", "ring", "ringed", "read", "reap", "ripped", "repeat", "stare", "state", "seal", "sleep", "sick", "stick", "stitch", "stop", "step", "soar", "stone", "tome", "token", "tinker", "trick", "trial", "trap", "tone", "text", "total",
    "task", "tail", "tall", "tray", "thick", "thrift", "thin", "thank", "tired", "taste", "trouble", "turn", "tub", "under", "up", "use", "uniform", 
  ];


/* FUNCTION PRINT LAST ITEM

let supplies = [
    'dive mask',
    'water wshoes',
    'fins',
    'scuba tank'
];


function printLastItem(){
    let lastIndex = supplies.length -1;
    console.log(supplies[lastIndex]);
}

*/

////////////////////////////////////////////////////////////////

/* FUNCTION TO SET LAST VALUE OF A INDEX

let shapes = [
    'triange',
    'square',
    'pentagon',
    'circle'
];
function setLastValue(values, newLastValue){
    let lastIndex = values.length -1;
    values[lastIndex] = newLastValue;
}

setLastValue(shapes, 'hexagon');
for (let item of shapes){
    console.log(item);
}

*/

////////////////////////////////////////////////////////////////

/* FUNCTION TO FIND NEXT INDEX IN AN ARRAY

let integers = [
     1, 2, 3, 4, 5, 6, 7, 8, 9
];

let index = Math.floor(Math.random() * 8);

function getNeighbor(integers, i){
    let neighborIndex = i+1;
    return integers[neighborIndex];
}

console.log ('The next number to ' + integers[index] + ' is ' + getNeighbor(integers, index));

*/

////////////////////////////////////////////////////////////////

/* SEARCH ALGORITHM OVER A STRING

function printCharacters(word){
    for (let i = 0; i < string.length; i++){
        console.log(word[i]);
    }
}

printCharacters('Crossword')

*/

/* FUNCTION TO FIND THE LONGER WORD

function longer(firstWord, secondWord){
    if (firstWord.length > secondWord.length){
        return firstWord;
    } else {
        return secondWord;
    }
}

console.log(longer('pizza', 'soup'));

*/

////////////////////////////////////////////////////////////////

/* FUNCTION TO DESCRIBE THE LAST LETTER OF A WORD

function lastLetter(word){
    let lastLetter = word.length -1;
    return word[lastLetter];
}

console.log('test');
console.log(lastLetter('test'));

*/

//////////////////////////////////////

/* FUNCTION TO CHECK WHETHER A WORD FITS AN EXISTING SPACE THAT ALREADY CONTAINS LETTERS

function check(space, word){
    if(space.length !== word.length){
        return false;
    }


for (let i = 0; i < space.length; i++){
    if (space[i] !== '-' && space[i] !== word[i]){
        return false;
    }
}
return true;
}

console.log('-a-t');
console.log('lion');
console.log(check('-a-t', 'lion'));
console.log(check('-a-t', 'bait'));

 */

////////////////////////////////////


/* SAME VERIFICATION FOR THE FIRST IF, BUT USING A BOOLEAN INSTEAD FOR MORE CONSISTENCY

function check(space, word){
    return (space.length === word.length)
}

*/


//////////////////////////////////////

/* FUNCTION TO FIND SUBSEQUENCES OF A WORD WITHIN ANOTHER WORD IN MY MINI DICTIONARY

function isSubsequence(target, word) {
    let i = 0;
    for (let char of target) {
        if (char === word[i]) {
            i++;
            if (i === word.length) {
                return true;  
            }
        }
    }
    return false; 
}


function findSubsequences(word, dict) {
    const subsequences = [];
    for (let dictWord of dict) {
        if (isSubsequence(word, dictWord)) {
            subsequences.push(dictWord);
        }
    }
    return subsequences;
}

// Example usage
const targetWord = "apple";

const subsequences = findSubsequences(targetWord, dict);
console.log(subsequences);

*/

//////////////////////////////////////


/* FUNCTION TO FIND THE LONGEST WORD WITHIN MY MINI DICTIONARY

function findLongestWord(array){
    let longestWord = '';
    for (var element of array){
        if (element.length > longestWord.length){
            longestWord = element;
        }
    }
    return longestWord;
}

console.log(findLongestWord(dict));

*/

/////////////////////////////////////////////////////////

/*
function findRepeatedWords(array) {
    let wordCount = {};
    let repeatedWords = [];

    
    for (let word of array) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    
    for (let word in wordCount) {
        if (wordCount[word] > 1) {
            repeatedWords.push(word);
        }
    }

    return repeatedWords;
}


console.log(findRepeatedWords(dict)); 
*/

///Function to create an object from a string. 
// The object requires an attribute for each character of the string. 
///Each attribute must store an array of indexes in the keys of the characters.

/*
function mapString(string){
    let map = {};
    for (let i = 0; i < string.length; i++){
        let letter = string[i];
        if(map[letter]) {
            map[letter].push(i);
        }else{
            map[letter] = [i];
        }
    }
    return map;
}
mapString('abba')

*/

//////////////////// FUNCTION COMPARE LETTERS FROM OBJECTS AND CHECK IF ALL OF THEM EXISTS
//This only checks if the letters match, however this doesn't check their order
/*

let object1 = { h: 1, e: 2, l: 3, o: 4 };
let object2 = { c: 1, a: 2, t: 3 };
let object3 = { b: 1, a: 2, n: 3, a: 4, n: 5 };
let object4 = { d: 1, o: 2, g: 3 };

function compareLetters(word, object){
  for (let letter of word){  
    if (!(object[letter])){
        return false;
    }
}
   return true;
}

*/

////////////////Auxiliary function to check the order of the letters

/*

let array1 = [3, 5, 7, 9, 12];
let minIndex1 = 7;

function findNextIndex(array, minIndex ){
    for(var i of array){
        if(i >= minIndex){
            return i + 1;
        }
    }
    return false;
};

*/

/* THIS FUNCTION SHOULD FIND SUBSEQUENCES OF STRINGS IN ARRAYS

function isSubsequence(word, target) {
    let minIndex = 0;
    for (let letter of word) {
        if (target[letter]) {
            minIndex = findNextIndex(target[letter], minIndex);
            if (minIndex === false) {
                return false;  
            }
        } else{ 
            return false;
        }
    }
    return true; 
};

let object1 = { h: 1, e: 2, l: 3, o: 4 };
console.log(isSubsequence('hello', object1))

*/



////////////////// LONGEST SUBSEQUENCE



