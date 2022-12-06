const Cart = require("./cart");
const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "insert into products (title, price, imageUrl, description) values (?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById() {}

  static fetchAll() {
    return db.execute("Select * from products");
  }

  static findById(id) {
    let sqlQuery = "select * from products where id =" + id;
    return db.execute(sqlQuery);
  }
};
