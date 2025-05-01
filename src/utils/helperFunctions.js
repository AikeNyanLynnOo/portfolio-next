export const isObjectArray = (arr) => {
  return arr && arr.length > 0 && typeof arr[0] === "object";
};
