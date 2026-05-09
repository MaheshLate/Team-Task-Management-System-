import { useEffect, useState } from "react";
import api from "../services/api";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("TODO");

  // const user = JSON.parse(localStorage.getItem("user"));

const storedUser = localStorage.getItem("user");

const user = storedUser
  ? JSON.parse(storedUser)
  : null;

  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      const response = await api.get("/api/tasks");

      console.log(response.data);

      setTasks(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // CREATE TASK
  const createTask = async () => {

const duplicate = tasks.find(
  (task) =>
    task.title &&
    task.title.toLowerCase() ===
    title.toLowerCase()
);

if (duplicate) {

  alert("Task already exists");

  return;
}
     

    try {

       if(title.trim() === "") {

      alert("Enter task title");

      return;
    }

    

      await api.post("/api/tasks", {
        title,
        status
      });

      alert("Task Created");

      setTitle("");

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };

  // UPDATE TASK STATUS
  const updateStatus = async (id, newStatus) => {

    try {

      await api.put(`/api/tasks/${id}`, {
        status: newStatus
      });

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (

    <div style={{ padding: "20px" }}>

      <h1>Tasks</h1>

      <h3>Welcome {user?.name}</h3>

      <h4>Role: {user?.role}</h4>

      {/* CREATE TASK */}

      <div
        style={{
          border: "1px solid black",
          padding: "15px",
          marginBottom: "20px",
          width: "300px"
        }}
      >

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px"
          }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px"
          }}
        >

          <option value="TODO">TODO</option>

          <option value="IN_PROGRESS">
            IN PROGRESS
          </option>

          <option value="DONE">
            DONE
          </option>

        </select>

        <button onClick={createTask}>
          Create Task
        </button>

      </div>

     

      {
        tasks.length === 0 ? (

          <h3>No Tasks Found</h3>

        ) : (

          tasks.map((task) => (

            <div
              key={task.id}
              style={{
                border: "1px solid black",
                padding: "15px",
                marginBottom: "15px",
                width: "350px"
              }}
            >

              <h3>{task.title}</h3>

              <p>Status: {task.status}</p>

              <button
                onClick={() =>
                  updateStatus(task.id, "IN_PROGRESS")
                }
                style={{ marginRight: "10px" }}
              >
                In Progress
              </button>

              <button
                onClick={() =>
                  updateStatus(task.id, "DONE")
                }
              >
                Done
              </button>

            </div>
          ))
        )
      }

    </div>
  );
}

export default Tasks;






