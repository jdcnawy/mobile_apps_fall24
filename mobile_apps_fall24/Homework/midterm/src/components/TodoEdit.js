import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoEdit = (props) => {
  const {todo, onSubmit} = props
  const [title, setTitle] = useState(todo.title)
  const [urgencyLevel, seturgencyLevel] = useState(todo.urgencyLevel)
  const {editTodoById} = useTodoContext()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDropdownChange = (event) => {
    seturgencyLevel(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodoById(todo.id, title, urgencyLevel)
    onSubmit()
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-2 pb-10'>
      <label className='text-lg font-semibold'>Name:</label>
      <input 
        type="text" 
        onChange={handleChange} 
        value={title} 
        className='border-2 border-black rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300' 
        placeholder="Update chore title..."
      />
      <select 
        onChange={handleDropdownChange} 
        value={urgencyLevel} 
        className='border-2 border-black rounded-full w-full pl-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300'>
        <option value='Noncritical'>Noncritical</option>
        <option value='Important'>Important</option>
        <option value='ASAP'>ASAP</option>
      </select>
      <button className='buttonStyle rounded-full bg-[#fdc091] text-gray-800 hover:bg-[#fdc09f] transition-colors p-2 inline-flex items-center justify-center'>
        Update
      </button>
    </form>
  )  
  
}

export default TodoEdit;