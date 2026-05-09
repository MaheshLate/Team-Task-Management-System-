import { useEffect, useState } from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";

function Projects() {

  const [projects, setProjects] =
    useState([]);

  const [name, setName] =
    useState("");

  const storedUser =
    localStorage.getItem("user");

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  // FETCH PROJECTS
  const fetchProjects = async () => {

    try {

      const response =
        await api.get("/api/projects");

      setProjects(response.data);

    } catch(error) {

      console.log(error);
    }
  };

  // CREATE PROJECT
  const createProject = async () => {

    if(name.trim() === "") {

      alert("Enter project name");

      return;
    }

    const duplicate =
      projects.find(
        (project) =>
          project.name &&
          project.name
            .trim()
            .toLowerCase() ===
          name
            .trim()
            .toLowerCase()
      );

    if(duplicate) {

      alert("Project already exists");

      return;
    }

    try {

      await api.post(
        "/api/projects",
        {
          name
        }
      );

      alert("Project Created");

      setName("");

      fetchProjects();

    } catch(error) {

      console.log(error);

      alert("Failed to create project");
    }
  };

  useEffect(() => {

    fetchProjects();

  }, []);

  return (

    <div>

      <Navbar />

      <div style={{ padding: "30px" }}>

        <h1>Projects</h1>

        <h3>
          Welcome {user?.name}
        </h3>

        <h4>
          Role: {user?.role}
        </h4>

        <br />

        {/* CREATE PROJECT */}

        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            width: "350px",
            marginBottom: "20px"
          }}
        >

          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            style={{
              width: "100%",
              marginBottom: "10px"
            }}
          />

          <button
            onClick={createProject}
          >
            Create Project
          </button>

        </div>

        {/* PROJECT LIST */}

        {
          projects.length === 0 ? (

            <h3>
              No Projects Found
            </h3>

          ) : (

            projects.map((project) => (

              <div
                key={project.id}
                style={{
                  border:
                    "1px solid black",
                  padding: "20px",
                  width: "400px",
                  marginBottom: "15px"
                }}
              >

                <h2>
                  {project.name}
                </h2>

              </div>
            ))
          )
        }

      </div>

    </div>
  );
}

export default Projects;