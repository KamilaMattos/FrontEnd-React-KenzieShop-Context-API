import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { GlobalStyle } from "./style/globalStyle"
import {Routes} from './routes'

function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
