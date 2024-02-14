import React, { useEffect, useState } from "react";
import axios from 'axios'
// import "/Home.css"

function Home() {
  const [single, setSingle] = useState([{ value: "" }]);
  const [multiple, setMultiple] = useState([{ value: "" }]);
  const [newTask, setNewTask] = useState([{ value: "" }]);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState(false);

  console.log(multiple);

  useEffect(() => {
    axios.post("http:localhost:3004/tast").then((response) => {
      setMultiple(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedValue = document.getElementById("tasks").value;
    if (selectedValue == "single") {
      setSingle([...single, { value: "" }]);
    } else if (selectedValue == "multiple") {
      setMultiple([...multiple, { value: "" }]);
    }
  };

  const addNewTask = () => {
    const updatedMultiple = [...multiple];
    const indexdata = updatedMultiple.map((data, index) => {
      console.log(data, index);
    });
  };
  return (
    <>
      <div className="Wraper">
        <h2 className="heading">Task Manager</h2>
        <div className="container" id="container">
          {single.map(() => (
            <div className="task">
              <div className="task-block">
                <h2 className="task-heading">Task Type 1: Text Editor</h2>
                <div className="input-container">
                  <textarea
                    id="textTask"
                    className="task-input"
                    placeholder="Enter text here"
                    value={single.value}
                  />
                </div>
              </div>
            </div>
          ))}
          {multiple.map((data, index) => (
            <div className="task">
              <div className="task-block">
                <h2 className="task-heading">
                  Task Type 2: Add and Remove Inputs
                </h2>
                <div id="dynamicInputs">
                  <div className="input-container">
                    {newTask.map(() => (
                      <input
                        type="text"
                        className="task-input"
                        placeholder="Input 1"
                        value={multiple.value}
                      />
                    ))}
                    <button
                      className="add-remove-input"
                      onClick={() => addNewTask("multiple", index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {task && (
            <div className="addTask">
              <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="text" />
                <select id="tasks">
                  <option name="option" value={"single"}>
                    single
                  </option>
                  <option name="option" value={"multiple"}>
                    multiple
                  </option>
                </select>
                <button type="submit">save</button>
              </form>
            </div>
          )}

          {showModal && (
            <div id="myModal2" className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                  X
                </span>
                <h2>Enter Pin</h2>
                <input
                  type="text"
                  id="blockTitle"
                  className="task-input"
                  placeholder="Enter pin"
                />
                <button id="saveBtn">Save</button>
              </div>
            </div>
          )}
        </div>
        <div>
          <button id="openModalBtn" onClick={() => setTask(true)}>
            Add Task
          </button>
          <button id="openModalBtn" onClick={() => setShowModal(true)}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;