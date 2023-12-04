//flat - Creates(returns) a new array with all subarrays concatinated

//Can be tricky so be careful when using this
console.log("The file 24-flat.js has been loaded");

const multiArray = [
    1,
    3,
    [
        "One",
        "Two",
        "Five"
        [
            "😊",
            "💎"
        ]
    ]
];

console.log(multiArray);

const flattenOneLevel = multiArray.flat();
const flattenTwoLevel = multiArray.flat(2);
const flattenWholeArray = multiArray.flat(Infinity);

console.log(flattenOneLevel);
console.log(flattenTwoLevel);
console.log(flattenWholeArray);