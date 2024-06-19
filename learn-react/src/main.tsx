import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Gretting from './components/test/index.tsx'
import Function1 from './components/greeting/index.tsx'
import Css from './components/test/test01.tsx'
import TestProps from './components/testProps/index.tsx'
import TestProps2 from './components/testProps/test01.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App />
    <Gretting/>
    <Function1/>
    <Css/>  */}
    {/* <TestProps description='Hello React js' />
    <TestProps description='Hello React + Ts'/> */}
    <TestProps2/>
    <TestProps2 sources='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
  </React.StrictMode>,
)

