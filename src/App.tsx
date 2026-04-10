import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"

function App() {

  return (
    <BrowserRouter>
      <Router />
      {/* <ToastComponent /> */}
      {/* <LoginPopup /> */}
    </BrowserRouter>
  )
}

export default App
