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

  async create(body) {
    const id = faker.datatype.uuid();
    const { name, price, image } = body;
    this.products.push({
      id,
      name,
      price,
      image,
    });
  }

  async find() {
    return this.products;
  }

  async findOne(id){
    return this.products.find(product => product.id == id);
  }

  async update(id,body) {
    let indexOfProduct = this.products.findIndex(product => product.id == id);
      this.products[indexOfProduct].name = body.name;
      this.products[indexOfProduct].price = body.price;
      this.products[indexOfProduct].image = body.image;
  }

  async delete(id) {
    let indexOfProduct = this.products.findIndex(product => product.id == id);
    this.products.splice(indexOfProduct,1);
  }
}

module.exports = ProductsService;
