import { mock } from "../dummy/post";
export const postRequest = async () => {
  {
    return new Promise((resolve, reject) => {
      if (!mock) {
        reject("not found");
      }
      resolve(mock);
    });
  }
};

postRequest()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });
