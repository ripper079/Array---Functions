console.log("spread.js");

const products = {id : "12345", name: "Banana", baseUnit: "STYCK"};
const item_unit ={ ItemNo: "120505", Code: "BE", QtyPerUnitOfMeasure: 12}

const addAll =  {...products, item_unit};
const partial = {name: products.name, Code: item_unit.Code}

console.log(partial);