import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Home />
      <ToastContainer theme="dark"/>
    </>
  )
}

export default App
