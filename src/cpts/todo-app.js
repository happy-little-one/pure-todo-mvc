import todo_item from './todo-item.js'
import new_todo from './new-todo.js'

export default (todos) => `
  <div>
    ${new_todo()}
    ${todos.map(todo_item).join('')}
  </div>
`