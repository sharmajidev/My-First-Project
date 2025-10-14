import Heading from "./Components/Heading";
import User from "./Components/User";

function App() {
  let userData = {
    firstName: "JOHN",
    lastName: "DOE",
    title: "INSTRUCTOR",
  };
  return (
    <div
      style={{
        
        backgroundColor: "black",
        height: "50vh",
        textAlign:"center"
      }}
    >
      <Heading />
      <User userInfo={userData} />
    </div>
  );
}

export default App;
