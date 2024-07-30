import { useContext } from "react";
import { DataProvider } from "./Container";

function DisplayTable() {
  const { data, handleOnDelete, handleOnDone } = useContext(DataProvider);

  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Date</th>
          <th scope="col">Tasks</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => (
          <tr key={ele.id} className={ele.bought ? "table-info" : ""}>
            <td>{ele.id}</td>
            <td>{ele.date}</td>
            <td>{ele.input}</td>
            <td>
              <button
                onClick={() => handleOnDone(ele)}
                aria-label={`Mark ${ele.input} as done`}
              >
                Done
              </button>
              <button
                onClick={() => handleOnDelete(ele)}
                aria-label={`Delete ${ele.input}`}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DisplayTable;
