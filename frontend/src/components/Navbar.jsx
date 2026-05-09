function Navbar() {

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#222",
        color: "white"
      }}
    >

      <h2>
        Team Task Manager
      </h2>

      <div>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
          style={{
            marginRight: "10px"
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            window.location.href =
              "/signup";
          }}
        >
          Signup
        </button>

      </div>

    </div>
  );
}

export default Navbar;