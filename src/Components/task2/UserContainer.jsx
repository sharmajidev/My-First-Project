  import '../../index.css';
  
  const UserContainer = ({userGoal,userTitle}) => {
  return (
    <div className='userContainer'>
      <p className="paragraph">{userGoal}</p>
       <p className="heading">{userTitle}</p>
    </div>
  )
}

export default UserContainer;
