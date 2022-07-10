import { tags } from "../dummy/tags";
export const tagsRequest = async () => {
  {
    return new Promise((resolve, reject) => {
      if (!tags) {
        reject("not found");
      }
      resolve(tags);
    });
  }
};

tagsRequest()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });
