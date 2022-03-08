import React from "react"
import "./App.css"
import { Outlet, Link } from "react-router-dom"
import LoginButton from './components/Login';
import LogoutButton from './components/Logout'

export default function App() {
  return (
    <div>
      <h1>Blog</h1>
      <LoginButton />
      <LogoutButton />
      <nav>
      </nav>
      <Outlet />
    </div>
  )
}
