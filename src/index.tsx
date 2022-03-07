import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import "./index.css"

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
