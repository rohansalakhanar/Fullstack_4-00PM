import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import "jquery"
import "@popperjs/core/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
