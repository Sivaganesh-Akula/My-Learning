export const waitFor = async (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, timeout);
  });
};
