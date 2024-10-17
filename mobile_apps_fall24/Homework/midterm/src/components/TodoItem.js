import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'
import {ReactComponent as Delete} from '@material-design-icons/svg/filled/delete.svg'
import {ReactComponent as Edit} from '@material-design-icons/svg/filled/edit.svg'

const TodoItem = (props) => {
  const {todo} = props
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById} = useTodoContext()

  const colorMap = {
    Noncritical: 'bg-green-200 text-green-900 px-4 py-2 rounded-full',
    Important: 'bg-orange-200 text-orange-800 px-4 py-2 rounded-full',
    ASAP: 'bg-red-200 text-red-800 px-4 py-2 rounded-full'
  }
  

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{todo.title}</h3>
  let tag = <h4>{todo.urgencyLevel}</h4>
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className='flex flex-col bg-gradient-to-r from-pink-100 to-yellow-100 border-8 rounded-full p-6 shadow-md'>
      <div className='flex justify-between items-center'>
        <div className={colorMap[todo?.urgencyLevel]}>{tag}</div>
        <div className='flex space-x-2'>
          <button 
            onClick={handleDelete} 
            className='buttonStyle rounded-full p-2 bg-red-400 hover:bg-red-500 transition-transform transform hover:scale-105'>
            <Delete className='fill-white'/>
          </button>
          <button 
            onClick={handleEdit} 
            className='buttonStyle rounded-full p-2 bg-blue-400 hover:bg-blue-500 transition-transform transform hover:scale-105'>
            <Edit className='fill-white'/>
          </button>
        </div>
      </div>
      <p className='font-poppins text-lg pb-4 pt-2'>📝 {content}</p>
    </div>
  )
}

export default TodoItem;