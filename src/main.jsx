import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Action18 from './Action18.jsx'
import Action19 from './Action19.jsx'
import MyForm18 from './MyForm18.jsx'
import MyForm19 from './MyForm19.jsx'
// import UseOptimistic from './useOptimistic.jsx'
import ChangeName from './useOptimistic.jsx'
import Comments from './Use.jsx'
import App from './Ref.jsx'
import ComponentOne from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Action18 /><br />
    <Action19 /> */}



    {/* <MyForm18 /> */}
    {/* <MyForm19 /> */}

    {/* <App /> */}

    <ComponentOne />
  </StrictMode>,
)
