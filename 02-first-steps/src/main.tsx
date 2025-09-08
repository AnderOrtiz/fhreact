import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp';
import { MyAwasomeApp } from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp/>
    <MyAwasomeApp/>
  </StrictMode>,
)
