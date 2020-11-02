module.exports = () => {
	
	const faker = require('faker');
	const _ = require('lodash');
	const bcrypt = require('bcryptjs');

	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync("password", salt);

	return {
		users: _.times(100, (i) => {
			return {
				id: i,
				name: i === 0 ? "admin" : faker.name.findName(),
				email: i === 0 ? "develop@cecotec.com" : faker.internet.email().toLowerCase(),
				password: hash,
				avatar: faker.image.imageUrl(),
			}
		}),
		products: _.times(100, (i) => {
			return {
				id: i,
				name: faker.commerce.productName(),
				description: faker.commerce.productDescription(),
				price: faker.commerce.price(),
				photo: "https://placeimg.com/640/480/shop",
			}
		})
	}

}
