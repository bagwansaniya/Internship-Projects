import { useRef, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import DisplayTable from "./components/table";
import Part_1 from "./components/part1";
import Part_2 from "./components/part2";
import Title from "./components/title";

function App() {
  // const handleOnDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleOnSave();
  //   }
  // };

  // const handleOnClear = () => {
  //   inputData.current.value = "";
  //   dateData.current.value = "";
  // };

  // const handleOnSave = () => {
  //   if (inputData.current.value.length !== 0) {
  //     const newTask = {
  //       id: data.length + 1,
  //       input: inputData.current.value,
  //       date: dateData.current.value,
  //     };
  //     setData([...data, newTask]);
  //     inputData.current.value = "";
  //     dateData.current.value = "";
  //   } else {
  //     alert("enter task first...!");
  //   }
  // };

  // const handleOnDone = (ele) => {
  //   const updatedData = data.map((item) => {
  //     if (item.id === ele.id) {
  //       const newActiveItem = [...activeItem, item];
  //       setActiveItem(newActiveItem);
  //       return { ...item, bought: true };
  //     }
  //     return item;
  //   });
  //   setData(updatedData);
  // };

  // const handleOnDelete = (ele) => {
  //   const newTodoItems = data.filter((item) => item.input !== ele.input);
  //   setData(newTodoItems);
  // };

  return (
    <>
      <Container className="Container">
        <Title />
        <Part_1 />
        <Part_2 />
      </Container>
    </>
  );
}

export default App;
