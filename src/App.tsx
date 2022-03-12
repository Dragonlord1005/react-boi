import React from "react"
import { Outlet, Link } from "react-router-dom"
import LoginButton from './components/Login';
import LogoutButton from './components/Logout'
import '@fontsource/roboto/400.css';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <h1>Blog</h1>
        <LoginButton />
        <LogoutButton />
        <nav>
        </nav>
        <Outlet />
      </div>
    </React.Fragment>
  )
}
