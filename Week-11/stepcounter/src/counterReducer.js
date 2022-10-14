let initialState= {counter:0};
const reducer = (state =initialState , action) => {
  console.log(state,action);
  switch (action.type) {
    case "INCREMENT":
      return {counter: state.counter + 1};
    case "RESET":
      return {counter: 0};
    default:
      return state;
  }
};
export default reducer;