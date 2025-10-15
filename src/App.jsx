import Heading from "./Components/Heading";
import Task2 from "./Components/task2/task2";
import "./app.css";
import User from "./Components/User";
import Card from "./Components/Card";

function App() {
  // let userData = {
  //   firstName: "JOHN",
  //   lastName: "DOE",
  //   title: "INSTRUCTOR",
  // };
  return (
    // <div
    //   style={{

    //     backgroundColor: "black",
    //     height: "50vh",
    //     textAlign:"center"
    //   }}
    // >
    //   <Heading />
    //   <User userInfo={userData} />
    // </div>
    // <Task2 />
    <Card firstName="Maria" lastName="Miles">
          
        <p className="card-text paragraph">
       Maria is a professor of Computer Science at the Univercity of
        Illinois.
      </p>
      <p>
        <a href="mailto:blake@example.com" className="link">
          Email Maria
        </a>
      </p>

    </Card>
  );
}

export default App;
