import { createContext, useReducer, useRef, useState } from "react";

export const DataProvider = createContext();

const reducerfunc = (currentvalue, action) => {
  let newvalue = currentvalue;
  if (action.type === "ENTERKEY") {
    return handleOnSave();
  } else if (action.type === "CLEAR") {
    action.payload.input = "";
    action.payload.date = "";
  } else if (action.type === "SAVE") {
    const newTask = {
      id: data.length + 1,
      input: inputValue.current.value,
      date: dateValue.current.value,
      bought: false, // Adding default 'bought' property
    };
    newvalue = [...currentvalue, newTask];
  } else if (action.type === "DONE") {
    newvalue = currentvalue.map((item) => {
      if (item.id === action.payload.ele.id) {
        return { ...item, bought: true };
      }
      return item;
    });
  } else if (action.type === "DELETE") {
    newvalue = currentvalue.filter((item) => item.id !== action.payload.ele.id);
  }
  return newvalue;
};
// const [activeItem, setActiveItem] = useState([]);

function Container({ children }) {
  // const [data, setData] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // const [dateValue, setDateValue] = useState("");

  const inputValue = useRef();
  const dateValue = useRef();
  const handleOnDown = (e) => {
    if (e.key === "Enter") {
      // handleOnSave();
      // console.log("enter key is clicked to save");
      dispatchfunc({
        type: "ENTERKEY",
        payload: {
          e,
        },
      });
    }
  };

  const handleOnClear = () => {
    // inputValue.current.value = "";
    // dateValue.current.value = "";
    // console.log("clear key is pressed");
    dispatchfunc({
      type: "CLEAR",
      payload: {
        input: inputValue.current.value,
        date: dateValue.current.value,
      },
    });
  };

  const handleOnSave = () => {
    console.log("save button is clicked");
    if (inputValue.current.value.length !== 0) {
      dispatchfunc({
        type: "SAVE",
        payload: {
          input: inputValue.current.value,
          date: dateValue.current.value,
          bougth: false,
        },
      });
      // const newTask = {
      //   id: data.length + 1,
      //   input: inputValue.current.value,
      //   date: dateValue.current.value,
      //   bought: false, // Adding default 'bought' property
      // };
      // setData([...data, newTask]);
      handleOnClear();
      // console.log("Task saved:", newTask);
    } else {
      alert("Enter task first...!");
    }
  };

  const handleOnDone = (ele) => {
    dispatchfunc({
      type: "DONE",
      payload: {
        ele,
      },
    });
    // const updatedData = data.map((item) => {
    //   if (item.id === ele.id) {
    //     const newActiveItem = [...activeItem, item];
    //     setActiveItem(newActiveItem);
    //     return { ...item, bought: true };
    //   }
    //   return item;
    // });
    // setData(updatedData);
    console.log("Task marked as done:", ele);
  };

  const handleOnDelete = (ele) => {
    dispatchfunc({
      type: "DELETE",
      payload: {
        ele,
      },
    });

    // const newTodoItems = data.filter((item) => item.id !== ele.id);
    // setData(newTodoItems);
    // console.log("Task deleted:", ele);
  };
  const [data, dispatchfunc] = useReducer(reducerfunc, []);
  return (
    <DataProvider.Provider
      value={{
        data,
        inputValue,
        dateValue,

        handleOnDelete,
        handleOnClear,
        handleOnDone,
        handleOnDown,
        handleOnSave,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
}

export default Container;
