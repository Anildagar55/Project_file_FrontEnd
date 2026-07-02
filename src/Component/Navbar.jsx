import {Link} from 'react-router-dom';
const Navbar =()=>{
    return (
        <div className="flex  ">
            <Link to='/'>Home</Link>
 <Link className='ml-10 bg-blue-500 mt-5 px-4 py-3 h-20 w-50 flex justify-center items-center' to='/create'>Create Employee</Link>
 <Link className='ml-10 bg-amber-500 mt-5 px-4 py-3 w-50 h-15 flex justify-center items-center' to='/view'> View Employee List </Link>
 <Link className='ml-10 bg-cyan-500 mt-5 px-4 py-3 w-50 h-15 flex justify-center items-center' to='/update'>Update Employee</Link>
 <Link className='ml-10 bg-red-500 mt-5 px-4 py-3 w-50 h-15 flex justify-center items-center' to='/delete'> Delete Employee</Link>
        </div>
        )
    }
export default Navbar