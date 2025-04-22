import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'

import { Toaster } from './components/ui/toaster'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

      <App />


      <Toaster />
    </Provider>
  </React.StrictMode>,
)


