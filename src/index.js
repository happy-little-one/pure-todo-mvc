import {state} from './store/index.js'
import { dispatch } from './lib/utitls.js'

window.dispatch = dispatch
state.render(root)
