const faker = require('faker');

// POO
class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(body) {
    const id = faker.datatype.uuid();
    const { name, price, image } = body;
    this.products.push({
      id,
      name,
      price,
      image,
    });
  }

  find() {
    return this.products;
  }

  findOne(id){
    return this.products.find(product => product.id == id);
  }

  update(id,body) {
    let indexOfProduct = this.products.findIndex(product => product.id == id);
      this.products[indexOfProduct].name = body.name;
      this.products[indexOfProduct].price = body.price;
      this.products[indexOfProduct].image = body.image;
  }

  delete(id) {
    let indexOfProduct = this.products.findIndex(product => product.id == id);
    this.products.splice(indexOfProduct,1);
  }
}

module.exports = ProductsService;
