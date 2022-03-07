import React from "react"
import "./App.css"
import { Outlet, Link } from "react-router-dom"

export default function App() {
  return (
    <div>
      <h1>Blog</h1>
      <nav>
      </nav>
      <Outlet />
    </div>
  )
}
