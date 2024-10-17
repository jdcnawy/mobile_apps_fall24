import axios from 'axios'
import {createContext, useState, useCallback} from 'react'
const TodoContext = createContext()

function Provider({children}) {
  const [todos, setTodos] = useState([])

  const fetchTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }, [])

  const createTodo = async (title, urgencyLevel) => {
    const response = await axios.post('http://localhost:3001/todos', {title, urgencyLevel})
    const updatedTodos = [...todos, response.data]
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle, newurgencyLevel) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle, urgencyLevel: newurgencyLevel
    })

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, ...response.data}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)

    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(updatedTodos)
  }

  const contextValues = {
    todos,
    fetchTodos,
    createTodo,
    editTodoById,
    deleteTodoById,
  }

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  )
}

export {Provider};
export default TodoContext;