import todo_app from   '../cpts/todo-app.js'

// model
const model = {todos:  {}}

model.acceptor = ({new_todo, del_id, toggle_id}) => {
  const {todos} = model

  if(new_todo) {
   todos[new_todo.id] = new_todo
  }

  if(del_id) {
    todos[del_id] = undefined
  }

  if(toggle_id) {
    const todo  = todos[toggle_id]
    todo.done = !todo.done
  }

  state.render()
} 

// actions
const actions = {
  add(title) {
    model.acceptor({new_todo: {
      id: Math.random(),
      title,
      done: false
    }})
  },
  del(del_id) {
    model.acceptor({del_id})
  },
  toggle(toggle_id) {
    model.acceptor({toggle_id})
  }
}

// handlers
window.addEventListener('todo', e => {
  const { type, payload } = e.detail

  switch(type) {
    case 'add': {
      const title = payload.target.value.trim()

      if(payload.key === 'Enter' && title) {
        actions.add(title)
        payload.target.value = ''
      }
      return false
    }
    case 'toggle': return actions.toggle(payload)
    case 'del': return actions.del(payload)
  }
})

// state
export const state = {
  target: undefined,
  render(dom) {
    const todos = Object.values(model.todos).filter(Boolean)
    const node = todo_app(todos)
    if(dom) this.target = dom
    this.target.innerHTML = node
  }
}


