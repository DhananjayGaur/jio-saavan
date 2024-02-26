import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import MusicContextProvider from './context/MusicContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <MusicContextProvider>

    <BrowserRouter>
    <App />
    </BrowserRouter>

    </MusicContextProvider>
 
)
