import Shop from "./Shop.js";
import FileService from "./FileService.js";

class ShopService {
  async create(product, picture) {
    const fileName = FileService.saveFile(picture);
    const createdProduct = await Shop.create({...product, photo: fileName});
    return createdProduct;
  }

  async getAll() {
    const products = await Shop.find();
    return products;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id is empty!");
    }
    const product = await Shop.findById(id);
    return product;
  }

  async update(product) {
    if (!post._id) {
      throw new Error("id is empty!");
    }
    const updatedProduct = await Shop.findByIdAndUpdate(product._id, product, {
      new: true,
    });
    return updatedProduct;
  }

  async delete(id) {
    if (!id) {
      throw new Error("id is empty!");
    }
    const product = await Shop.findByIdAndDelete(id);
    return product;
  }
}

export default new ShopService();