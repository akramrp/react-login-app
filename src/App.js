import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateComponents from './components/PrivateComponents';
import TestPage from './components/TestPage';
import TestPage2 from './components/TestPage2';
import TestHooks from './components/TestHooks';
import NewForm from './components/NewForm';
import NewHome from './components/NewHome';
import ReduxCounter from './components/ReduxCounter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/home" element={<Home />} exact></Route>
        <Route path="/add" element={<AddUser />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/testPage" element={<TestPage />} exact></Route>
        <Route path="/testPage2" element={<TestPage2 />} exact></Route>
        <Route path="/testHooks" element={<TestHooks />} exact></Route>
        <Route path="/newForm" element={<NewForm />} exact></Route>
        <Route path="/newHome" element={<NewHome />} exact></Route>
        <Route path="/reduxCounter" element={<ReduxCounter />} exact></Route>

        <Route element={ <PrivateComponents />} > 
          <Route path="/all" element={<AllUser />} exact></Route>
          <Route path="/edit/:id" element={<EditUser />} exact></Route>
          {/* <Route path="/edit/:id/:name" element={<EditUser />} exact></Route> */}  {/* pass multi param */}
          <Route path="/profile" element={<Profile />} exact></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
