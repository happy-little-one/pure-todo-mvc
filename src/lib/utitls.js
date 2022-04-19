export const dispatch = (path, payload) => {
  const [module, type] = path.split('/')
  window.dispatchEvent(new CustomEvent(module, {detail:{type, payload}}))
}
