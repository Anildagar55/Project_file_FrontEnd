import EmployeeList from './pages/EmployeeList.jsx'
import {useState} from 'react';
import CreateEmployee from './pages/CreateEmployee.jsx';
import Navbar from './Component/Navbar.jsx';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import UpdateEmployee from "./pages/UpdateEmployee.jsx"
import deleteEmployee from "./pages/deleteEmployee.jsx";
const App =()=>{
      const [show, setShow] = useState(false);

    return (
        <div className='min-h-screen bg-black text-white  '>
            <Navbar />
{/*         <button className="active:scale-90" onClick={() =>setShow(true)}>Employee List</button> */}
{/*         { show && <EmployeeList />} */}

          <Routes>
              <Route path='/' element={<Home />} />..
              <Route path ='/create' element={<CreateEmployee />}  />
              <Route path='/view' element={<EmployeeList />} />
              <Route path='/update' element={<UpdateEmployee />} />
              <Route path='/delete' element={<deleteEmployee />} />
              </Routes>
        </div>
        )
    }
export default App