import React, { useContext, useState } from "react";
import { Store } from "../context/Store";

const Input = () => {
  const { addRecord } = useContext(Store);
  const [data, setData] = useState("");
  const [err, setErr] = useState(false);

  const submitData = (e) => {
    e.preventDefault();
    if (data.length > 0) {
        addRecord(data);
      setData("");
    } else {
      setErr(true);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Add Your Records</h1>
        <form action="" onClick={submitData}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Add Your Record"
                value={data}
                onChange={(event) => {
                  setData(event.target.value);
                  setErr(false);
                }}
              />
              {err && <p>something write here</p>}
            </div>
            <div className="col">
              <button className="btn">+</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
