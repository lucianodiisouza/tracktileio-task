const fs = require('fs')
const { faker } = require('@faker-js/faker')

// define random data structure
function createRandomProducts() {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: 'http://via.placeholder.com/300x300/006/699',
  }
}

// generating products
const PRODUCTS = faker.helpers.multiple(createRandomProducts, {
  count: 100,
})

const data = {
  products: PRODUCTS,
}

const filePath = 'db.json'

// saving in a file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

console.log(`Data has been saved to ${filePath} ✨`)
