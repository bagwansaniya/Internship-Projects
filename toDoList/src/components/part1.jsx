import { useContext } from "react";
import { DataProvider } from "./Container";

function Part_1() {
  const {
    inputValue,
    dateValue,

    handleOnSave,
    handleOnClear,
    handleOnDown,
  } = useContext(DataProvider);

  return (
    <div className="part1">
      <input
        type="text"
        placeholder="Enter the task"
        className="inputTask"
        ref={inputValue}
        onKeyDown={handleOnDown}
      />
      <input type="date" ref={dateValue} onKeyDown={handleOnDown} />
      <button onClick={handleOnSave}>Enter</button>
      <button onClick={handleOnClear}>Clear</button>
    </div>
  );
}

export default Part_1;
