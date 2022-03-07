import React from "react"
import "./App.css"
import { Outlet, Link } from "react-router-dom"
import LoginButton from './components/Login';

export default function App() {
  return (
    <div>
      <h1>Blog</h1>
      <LoginButton />
      <nav>
      </nav>
      <Outlet />
    </div>
  )
}
