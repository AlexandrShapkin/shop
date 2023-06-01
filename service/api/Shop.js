import mongoose from "mongoose";

const Shop = new mongoose.Schema({
  photo: {type: String},
  title: {type: String, required: true},
  price: {type: Number, required: true},
  weight: {type: Number, required: true},
  spiciness: {type: Number, required: true},
  qi: {type: Number, required: true},
  fat: {type: Number, required: true},
  protein: {type: Number, required: true},
  carbohydrate: {type: Number, required: true},
  composition: {type: String, required: true},
  description: {type: String, required: true}
});

export default mongoose.model("Shop", Shop);