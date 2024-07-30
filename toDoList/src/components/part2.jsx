import { useContext } from "react";
import { DataProvider } from "./Container";
import DisplayTable from "./table";

function Part_2() {
  const { data } = useContext(DataProvider);
  return (
    <>
      <div className="part2">
        {data.length === 0 ? <h3>add task</h3> : <DisplayTable />}
      </div>
    </>
  );
}

export default Part_2;
