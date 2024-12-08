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

function lastLetter(word){
    let lastLetter = word.length -1;
    return word[lastLetter];
}

console.log('test');
console.log(lastLetter('test'));