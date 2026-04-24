import { Router } from "./routes"
import ToastComponent from "./components/notification/useToast"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Router />
      <ToastComponent />
      {/* <LoginPopup /> */}
    </BrowserRouter>
  )
}

export default App
