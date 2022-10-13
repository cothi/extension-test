import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createHashRouter, Link, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
    {
        path: '/',
        element: (
            <div>
                <h1> hello world!</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: 'about',
        element: <div>About</div>,
    },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
