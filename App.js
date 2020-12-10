import './App.css';
import Timer from'./components/timer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <ToastContainer />
     <Timer duration='45' title='pomodoro' />
     <Timer duration='5' title='courte pause' />
     <Timer duration='10' title='longue pause' />
    </div>
  );
}

export default App;
