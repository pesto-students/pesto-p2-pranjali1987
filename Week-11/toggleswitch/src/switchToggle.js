const initialstate=({isLightON:true});
const lightReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { isLightON:!action.isLightON };
    default:
      return state;
  }
};
export default lightReducer;