import Navbar from "../components/Navbar";

function Home() {

  return (

    <div>

      <Navbar />

      <div
        style={{
          padding: "60px",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "50px"
          }}
        >
          Team Task Manager
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginTop: "20px"
          }}
        >
          Manage projects, assign tasks,
          and track progress easily.
        </p>

        <br />

        <button
          onClick={() => {
            window.location.href =
              "/signup";
          }}
          style={{
            padding: "12px 25px",
            marginRight: "10px"
          }}
        >
          Get Started
        </button>

        <button
          onClick={() => {
            window.location.href =
              "/login";
          }}
          style={{
            padding: "12px 25px"
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Home;