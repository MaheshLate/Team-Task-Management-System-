import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

  const storedUser =
  localStorage.getItem("user");

const user = storedUser
  ? JSON.parse(storedUser)
  : null;

  
  const [tasks, setTasks] = useState([]);

  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      const response = await api.get(
        "/api/tasks"
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchTasks();

  }, []);

  // COUNTS

  const totalTasks = tasks.length;

  const completedTasks =
    tasks.filter(
      (task) => task.status === "DONE"
    ).length;

  const pendingTasks =
    tasks.filter(
      (task) => task.status === "TODO"
    ).length;

  const progressTasks =
    tasks.filter(
      (task) =>
        task.status === "IN_PROGRESS"
    ).length;

  return (

    <div style={{ padding: "20px" }}>

      <h1>Dashboard</h1>

      <h2>
        Welcome {user?.name}
      </h2>

      <h3>
        Role: {user?.role}
      </h3>

      <br />

      {/* STATS */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            width: "180px"
          }}
        >
          <h3>Total Tasks</h3>

          <h1>{totalTasks}</h1>
        </div>

        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            width: "180px"
          }}
        >
          <h3>Completed</h3>

          <h1>{completedTasks}</h1>
        </div>

        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            width: "180px"
          }}
        >
          <h3>Pending</h3>

          <h1>{pendingTasks}</h1>
        </div>

        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            width: "180px"
          }}
        >
          <h3>In Progress</h3>

          <h1>{progressTasks}</h1>
        </div>

      </div>

      <br />

      {/* NAVIGATION */}

      <button
        onClick={() => {
          window.location.href =
            "/projects";
        }}
        style={{
          marginRight: "10px"
        }}
      >
        Projects
      </button>

      <button
        onClick={() => {
          window.location.href =
            "/tasks";
        }}
      >
        Tasks
      </button>

      <br /><br />

      {/* LOGOUT */}

      <button
        onClick={() => {

          localStorage.removeItem(
            "user"
          );

          window.location.href = "/";

        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;