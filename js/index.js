// --------------
// START OF JavaScript
// --------------

import './components/first-component/first-component.js'
import './components/box-component/box-component.js'
import './components/header-component/header-component.js'

const mainArea = document.querySelector('main')
const header = document.querySelector('header')

const headerComponent = document.createElement('header-component')
const myFirst = document.createElement('first-component')
const box = document.createElement('box-component')

header.append(headerComponent)
mainArea.append(myFirst)

// Will have its own styling
mainArea.appendChild(box)
