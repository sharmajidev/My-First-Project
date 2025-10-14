 import styles from './User.module.css';
 
 const User = ({userInfo}) => {
  return (
    <center>
      <div className={styles.userContainer}>
      <h2>{userInfo.firstName} {userInfo.lastName}</h2>
      <p><strong>{userInfo.title}</strong></p>
    </div>
    </center>
  )
}

export default User;
