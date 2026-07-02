import {useState,useEffect} from 'react'
import axios from 'axios';
import Card from './Card.jsx';
const EmployeeList =()=>{
    const [employees,setEmployees]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    const fetchEmployees= async()=>{
        setLoading(true);
        try{
            const response=await axios.get('/api/employees');
            setEmployees(response.data);
            }
        catch(err){
            setError("Error fetching employee data");
            }
        finally{
            setLoading(false);
            }
        }
    useEffect(()=>{
        fetchEmployees();
        },[]);
    if(loading)return <div>Loading...</div>
    if(error)return <div>{error}</div>
  return (
    <div className="overflow-hidden">
      <h1 className="mt-5 text-center text-xl font-bold">
        Employee List
      </h1>

      <button
        className="mt-10 bg-blue-500 rounded px-3 py-2 ml-15"
        onClick={fetchEmployees}
      >
        Refresh Employee List
      </button>

      {employees.length === 0 ? (
        <p className="mt-5 ml-5">No Employee found</p>
      ) : (
        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          {employees.map((employee) => (
            <div
                  key={employee.id}
              className="bg-red-800 p-4 w-72 rounded-lg text-white"
            >
              <h1 className="text-xl capitalize font-bold">
                {employee.name}
              </h1>

              <p className="text-gray-500">
                {employee.type}
              </p>

              <h2>{employee.phoneNumber}</h2>
              <h3>{employee.email}</h3>
              <h4>{employee.salary}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  )
    }
export default EmployeeList