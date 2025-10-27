  import '../../index.css';
 
 const Delete = ({setDeleteContent}) => {
  const handleOnClick = () =>{
    console.log("clicked")
    setDeleteContent(true)
  }
  return (
    <div className="delete-container">
      <button className="delete-btn" onClick={handleOnClick}>Delete</button>
    </div>
  )
}

export default Delete;
