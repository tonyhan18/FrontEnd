import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* Redux Provider로 store를 감싸준다. */}
      <App />
    </Provider>
  </StrictMode>,
)
