import useTodoContext from '../hooks/use-todo-context'
import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useTodoContext()

  const sortedTodos = todos.sort((a, b) => {
    const valueA = a.urgencyLevel
    const valueB = b.urgencyLevel

    if (valueA < valueB) {
      return -1
    }
    if (valueA > valueB) {
      return 1
    }
    return 0
  })

  const renderedTodos = sortedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo}/>
  ))
  return (
    <div className='p-4 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-lg shadow-md'>
      <h4 className='text-lg font-bold'>There are {todos.length} chores that need to be done.</h4>
      <div className='space-y-4'>{renderedTodos}</div>
    </div>
  )
}

export default TodoList;