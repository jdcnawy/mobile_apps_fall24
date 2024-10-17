import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import {ReactComponent as Plus} from '@material-design-icons/svg/filled/add.svg'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()

  const [title, setTitle] = useState('')
  const [urgencyLevel, seturgencyLevel] = useState("");

 
  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDropdownChange = (event) => {
    seturgencyLevel(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title, urgencyLevel)
    setTitle('')
    seturgencyLevel('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-3 pb-6'>
      <h1 className='inline-flex text-4xl text-center pb-7 place-content-center'>
        Chore Keeper!
      </h1>
      <input 
        type="text" 
        onChange={handleChange} 
        value={title} 
        className='border-2 border-black rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300' 
        placeholder="Enter chore title..."
      />
      <div className="flex flex-col space-y-2">
        <select 
          onChange={handleDropdownChange} 
          value={urgencyLevel} 
          className='border-2 border-black rounded-full w-full pl-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300'>
          <option value="" disabled>Select urgency level...</option>
          <option value='Noncritical'>Noncritical</option>
          <option value='Important'>Important</option>
          <option value='ASAP'>ASAP</option>
        </select>
        <button className='border-2 border-black rounded-full bg-[#fdc091] text-gray-800 hover:bg-[#fdc09f] transition-colors p-2 inline-flex items-center justify-center'>
          Add Chore!
          <Plus className='fill-white ml-2'/>
        </button>
      </div>
    </form>
  )
}

export default TodoCreate;