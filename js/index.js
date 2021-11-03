// --------------
// START OF JavaScript
// --------------

import './components/first-component/first-component.js'
import './components/box-component/box-component.js'

const mainArea = document.querySelector('main')
const myFirst = document.createElement('first-component')
const box = document.createElement('box-component')

mainArea.append(myFirst)

// Will have its own styling
mainArea.appendChild(box)
