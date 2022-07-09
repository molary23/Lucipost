import { categories } from "../dummy/categories";
export const categoriesRequest = async () => {
  {
    return new Promise((resolve, reject) => {
      if (!categories) {
        reject("not found");
      }
      resolve(categories);
    });
  }
};

categoriesRequest()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });
