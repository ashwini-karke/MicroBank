
const initialState = {
  userData: {
    Fullname: "",
    Email: "",
    Password: "",
    id: 0,
  },
};
const loginUserReducer = (
  state = initialState,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default loginUserReducer;
