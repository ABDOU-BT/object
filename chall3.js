let product = {
    name: "lanchon",
    price: 100,
    category: "viande",
    quantity: 50

};
console.log(product.name)
console.log(product.price)
let total = product.price * product.quantity
console.log(total)
console.log(product.category)
if (product.available) {
    return true
}
else {
    return false
}

