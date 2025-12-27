import { createContext, useReducer, useState } from "react";

export const StoreContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        { title: action.payload.title, detail: action.payload.detail },
      ];
    case "DELETE_NOTE":
      return state.filter((item) => item.title !== action.payload.title);
    case "UPDATE_NOTE":
      return state.map((item) =>
        item.title === action.payload.oldTitle
          ? {
              title: action.payload.title,
              detail: action.payload.detail,
            }
          : item
      );
    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, []);
  const [selectedNote, setSelectedNote] = useState(null);
  const handleAddNotes = (title, detail) => {
    const addNotes = {
      type: "ADD_NOTE",
      payload: {
        title,
        detail,
      },
    };
    dispatch(addNotes);
  };

  const handleDeleteNotes = (title) => {
    const deleteNotes = {
      type: "DELETE_NOTE",
      payload: {
        title,
      },
    };
    dispatch(deleteNotes);
  };

  const handleUpdateNotes = (oldTitle, title, detail) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: { oldTitle, title, detail },
    });
  };

  return (
    <StoreContext.Provider
      value={{
        notes,
        selectedNote,
        setSelectedNote,
        handleUpdateNotes,
        handleDeleteNotes,
        handleAddNotes,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
