 import '../../index.css';

const Warning = ({setDeleteContent}) => {
  const handleOnClick = () =>{
    setDeleteContent(false)
  }
  return (
    <div className="warning-box">
      <h1 className="warning-heading">Are you sure?</h1>
      <h2 className="warning-text">These changes can't be reverted!</h2>
      <button className="proceed-btn" onClick={handleOnClick}>Proceed</button>
    </div>
  )
}

export default Warning;