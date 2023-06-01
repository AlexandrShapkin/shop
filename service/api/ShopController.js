import ShopService from "./ShopService.js";

class ShopController{
  async create(req, res) {
    try {
      const product = await ShopService.create(req.body, req.files.photo);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(req, res) {
    try {
      const products = await ShopService.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  async getOne(req, res) {
    try {
      const product = await ShopService.getOne(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const product = await ShopService.update(req.body);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const product = await ShopService.delete(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new ShopController();