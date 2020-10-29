const faker = require('faker');
const _ = require('lodash');

const users = _.times(100, (i) => {
    return {
        id: _.uniqueId(),
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
    }
});

const products = _.times(10, (i) => {
    return {
        id: _.uniqueId(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        photo: faker.image.imageUrl(),
    }
});

module.exports = {
    users,
    products,
}
