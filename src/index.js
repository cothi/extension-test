/*global chrome*/
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createHashRouter, Link, RouterProvider } from 'react-router-dom'
import App from './App'
import { BarLoader } from 'react-spinners'

const router = createHashRouter([
    {
        path: '/',
        element: (
            <div>
                <h1> hello world!</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
        loader: async () => {},
    },
    {
        path: 'about',
        element: <App />,
    },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider
        router={router}
        fallbackElement={<BarLoader color="#36d7b7" />}
    />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
