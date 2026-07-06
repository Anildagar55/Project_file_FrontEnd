
import {useState} from 'react';
import axios from "axios";
const CreateEmployee =()=>{
    const [employee,setEmployee]=useState({
        id:"",
           name:"",
           type:"",
            phoneNumber:"",
            email:"",
            salary:"",
        });
    const [message,setMessage]=useState("");
    const handleInputChanges =(e) =>{
        const {name,value}=e.target;
        setEmployee({...employee,[name]:value});
        };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('https://project-file-backend-1.onrender.com/api/employees',employee);
            setMessage('Employee Created Successfully');
            setEmployee({
                           name:"",
                           type:"",
                            phoneNumber:"",
                            email:"",
                            salary:"",
                })
            }
        catch(error){
            setMessage("Error creating employee..");
            }
        };
    return (
        <div className="bg-white text-black mt-10 ml-10">
        <h1>Create Employee</h1>
        <form onSubmit={handleSubmit}>
            <div ><label> Name :</label>
            <input className="border"
            type='text'
            name='name'
            value={employee.name}
            onChange={handleInputChanges}
             required />
             </div>             <div><label>Type :</label>

                                      <input
                                      type='text'
                                      name='type'
                                      value={employee.type}
                                      onChange={handleInputChanges}
                                       required />
                                       </div>
               <div><label>Mobile Number :</label>
                         <input
                         type='text'
                         name='phoneNumber'
                         value={employee.phoneNumber}
                         onChange={handleInputChanges}
                          required />
                          </div>
                            <div><label>Email :</label>
                                      <input
                                      type='email'
                                      name='email'
                                      value={employee.email}
                                      onChange={handleInputChanges}
                                       required />
                                       </div>
                                         <div><label>salary :</label>
                                                   <input
                                                   type='number'
                                                   name='salary'
                                                   value={employee.salary}
                                                   onChange={handleInputChanges}
                                                    required />
                                                    </div>
                                                    <button className="bg-cyan-500 active:scale-90 px-4 border" type='submit'>Create New Employee </button>
                                                    {message && (
                                                      <p className="mt-3 text-green-500 font-semibold">
                                                        {message}
                                                      </p>
                                                    )}
            </form>
        </div>
        )
    }
export default CreateEmployee