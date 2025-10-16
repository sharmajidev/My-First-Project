import Heading from "./Components/Heading";
import Task2 from "./Components/task2/task2";
import "./app.css";
import User from "./Components/User";
import Card from "./Components/Card";
import LoginPage from "./Components/LoginPage";


function App() {
  let firstName = "Maria"
  let lastName = "Miles"
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
    // <Card firstName={firstName} lastName={lastName}>
          
    //     <p className="card-text paragraph">
    //    {firstName} is a professor of Computer Science at the Univercity of
    //     Illinois.
    //   </p>
    //   <p>
    //     <a href="mailto:blake@example.com" className="link">
    //       Email Maria
    //     </a>
    //   </p>

    // </Card>

    <LoginPage />
    
  );
}

export default App;
