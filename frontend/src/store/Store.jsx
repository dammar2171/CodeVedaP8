import { createContext, useReducer, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const StoreContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return action.payload;
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
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

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

  const handleDeleteNotes = async (title) => {
    try {
      await axios.delete(
        `http://localhost:5000/notes/deleteNote/${title}`,
        authHeader()
      );
      const deleteNotes = {
        type: "DELETE_NOTE",
        payload: {
          title,
        },
      };
      dispatch(deleteNotes);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const handleUpdateNotes = async (oldTitle, title, detail) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/notes/updateNote/${oldTitle}`,
        {
          updatedTitle: title,
          updatedDetail: detail,
        },
        authHeader()
      );
      console.log(res.status);

      if (res.status == 200) {
        dispatch({
          type: "UPDATE_NOTE",
          payload: { oldTitle, title, detail },
        });
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await axios.get(
          "http://localhost:5000/notes/getNotes",
          authHeader()
        );

        dispatch({
          type: "SET_NOTES",
          payload: res.data.result,
        });
      } catch (error) {
        console.log("Fetching Error:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        notes,
        authenticated,
        selectedNote,
        setSelectedNote,
        handleUpdateNotes,
        handleDeleteNotes,
        handleAddNotes,
        setAuthenticated,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
