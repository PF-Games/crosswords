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