export default ({id, title, done}) => `
  <div>
    <input type=checkbox ${done ? 'checked' : ''} onclick="dispatch('todo/toggle', ${id})">
    <span>${title}</span>
    <button onclick="dispatch('todo/del', ${id})">delele</button>
  </div>
`