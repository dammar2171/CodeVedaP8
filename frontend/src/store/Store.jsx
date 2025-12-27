import { createContext, useReducer, useState } from "react";

export const StoreContext = createContext();

const noteReducer = (state, action) => {
  switch (action.payload) {
    case "ADD_NOTE":
      return;
    case "DELETE_NOTE":
      return;
    case "UPDATE_NOTE":
      return;
    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [note, dispatch] = useReducer(noteReducer, []);
  const [signupData, setSignupData] = useState({});
  const [loginData, setLoginData] = useState({});

  return (
    <StoreContext.Provider
      value={{ note, signupData, setSignupData, setLoginData }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
