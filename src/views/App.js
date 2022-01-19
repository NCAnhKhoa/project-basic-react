import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import Listodos from './Todos/Listodos';
import Nav from './Navigation/Nav.js';
import Home from './Example/home';
import ListUser from './user/ListUser';
import DetailUser from './user/DetailUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}



          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/todo">
              <Listodos></Listodos>
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>



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
    </BrowserRouter>
  );
}

export default App;
