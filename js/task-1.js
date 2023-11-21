// function isEnoughCapacity(products, containerSize) {
//   let totalProduct = 0;
//   const allProduct = Object.values(products);

//   for (const product of allProduct) {
//     totalProduct += product;
//   }

//   return containerSize <= totalProduct;
// }

function isEnoughCapacity(products, containerSize) {
  let totalProduct = 0;

  for (const product in products) {
    totalProduct += products[product];
  }

  return containerSize <= totalProduct;
}

// Log to console
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false