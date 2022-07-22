import './App.css';
import { ToastContainer } from 'react-toastify';
import Compare from './Componnets/Compare/Compare';

function App() {
  return (
    <div className="App">
      <h1>Compare Two List Items </h1>
      <Compare/>
      <ToastContainer/>
    </div>
  );
}

export default App;
