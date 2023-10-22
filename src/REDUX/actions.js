export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    name,
  };
};
