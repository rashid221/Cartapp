const initialState = 0;
const initialCart = 1;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
      default : return state;
  }
};

export const changeTheCart = (state = initialCart, action) => {
  switch (action.type) {
    case "ADDVALUE":
      return state + 1;
          default : return state;
  }
};



export default changeTheNumber;
