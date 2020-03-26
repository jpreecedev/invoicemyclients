import React from 'react'
import ReactDOM from 'react-dom'
import { toast } from 'react-toastify'

import 'jquery/dist/jquery.slim'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import 'react-toastify/dist/ReactToastify.css'
import './assets/css/theme.css'
import './assets/css/global.css'

import { App } from './components/App'

toast.configure()

ReactDOM.render(<App />, document.getElementById('root'))
