import '../../index.css';

  const Todo = (props) => {
  return (
   <li className='todo-list'>{props.text}</li>
  )
}

export default Todo;
