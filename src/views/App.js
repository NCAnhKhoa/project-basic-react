import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent.js';
// import Listodos from './Todos/Listodos';
import Nav from './Navigation/Nav.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
        {/* <Listodos></Listodos> */}
        {/* <MyComponent /> */}
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
