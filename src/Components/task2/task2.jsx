import UserContainer from "./UserContainer";

function Task2(){
   return <div className="appContainer">
      <h1>TIME TO PRACTICE</h1>
      <p id="paragraph">One course, many goals 🎯</p>
      <UserContainer userGoal="Learn React" userTitle="In-depth" />
      <UserContainer userGoal="Practice" userTitle="Practice working with React,components etc" />
    </div>;
}
export default Task2