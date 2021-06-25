const initialState = {
  textEle: [],
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        textEle: action.payload,
      };
    default:
      return state;
  }
}

export default dataReducer;
