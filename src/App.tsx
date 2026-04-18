import { HashRouter } from "react-router-dom"
import { Router } from "./routes"
import ToastComponent from "./components/notification/useToast"

function App() {

  return (
    // <BrowserRouter>
    <HashRouter>
      <Router />
      <ToastComponent />
    </HashRouter>
    /* <LoginPopup /> */
    // </BrowserRouter>
  )
}

export default App
