import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Gretting from './components/test/index.tsx'
import Function1 from './components/greeting/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Gretting/>
    <Function1/>
  </React.StrictMode>,
)

