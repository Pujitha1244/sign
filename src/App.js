import "./App.css";
import SignUp from "./components/Signup/SignUp";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(/images/back.png)",
        backgroundColor: "#f54748",
        width: "100%",
        height: "100vh",
        // opacity: "0.8",
      }}
    >
      <SignUp />
    </div>
  );
}

export default App;
