import dummyImage from "../res/dumplingDummyImageBase64";

console.log(dummyImage);

export const productDummyObject = {
  id: 0,
  photo: dummyImage,
  data: {
    title: "~~~~~~~~~~~ ~~~~~~~~~~~~~~",
    price: 1,
    weight: 1,
    spiciness: 10000,
    qi: 1,
    energy: {
      fat: 1,
      protein: 1,
      carbohydrate: 1,
    },
    composition:
      "~~~",
    description:
      "~~~",
  },
};