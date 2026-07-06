import { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editId, setEditId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    type: "",
    phoneNumber: "",
    email: "",
    salary: ""
  });

  const fetchEmployees = async () => {
    setLoading(true);

    try {
      const response = await axios.get("https://your-backend-name.onrender.com/api/employees");
      setEmployees(response.data);
    } catch {
      setError("Error fetching employee data");
    } finally {
      setLoading(false);
    }
  };

  const deleteNotes = async (id) => {
    try {
      await axios.delete(`https://your-backend-name.onrender.com/api/employees/delete/${id}`);

      setEmployees(prev =>
        prev.filter(emp => emp.id !== id)
      );

    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (employee) => {
    setEditId(employee.id);

    setEditData({
      name: employee.name,
      type: employee.type,
      phoneNumber: employee.phoneNumber,
      email: employee.email,
      salary: employee.salary
    });
  };

  const handleUpdate = async () => {
    try {

      await axios.put(
        `https://your-backend-name.onrender.com/api/employees/update/${editId}`,
        editData
      );

      setEmployees(prev =>
        prev.map(emp =>
          emp.id === editId
            ? { ...emp, ...editData }
            : emp
        )
      );

      setEditId(null);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="mt-5 text-center text-xl font-bold">
        Employee List
      </h1>

      <button
        onClick={fetchEmployees}
        className="mt-10 bg-blue-500 rounded px-3 py-2 ml-15"
      >
        Refresh Employee List
      </button>

      <div className="flex flex-wrap gap-6 mt-10 justify-center">

        {employees.map(employee => (

          <div
            key={employee.id}
            className="bg-red-800 p-4 w-72 rounded-lg text-white min-h-[250px] flex flex-col"
          >

            {editId === employee.id ? (

              <>
                <input
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      name: e.target.value
                    })
                  }
                  className="w-full p-2 rounded text-black mb-2"
                  placeholder="Name"
                />

                <input
                  value={editData.type}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      type: e.target.value
                    })
                  }
                  className="w-full p-2 rounded text-black mb-2"
                  placeholder="Type"
                />

                <input
                  value={editData.phoneNumber}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      phoneNumber: e.target.value
                    })
                  }
                  className="w-full p-2 rounded text-black mb-2"
                  placeholder="Phone"
                />

                <input
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      email: e.target.value
                    })
                  }
                  className="w-full p-2 rounded text-black mb-2"
                  placeholder="Email"
                />

                <input
                  value={editData.salary}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      salary: e.target.value
                    })
                  }
                  className="w-full p-2 rounded text-black mb-2"
                  placeholder="Salary"
                />

                <button
                  onClick={handleUpdate}
                  className="bg-green-500 py-2 rounded mt-auto"
                >
                  Submit
                </button>
              </>

            ) : (

              <>
                <div>
                  <h1 className="text-xl font-bold">
                    {employee.name}
                  </h1>

                  <p className="text-cyan-700">{employee.type}</p>
                  <h2>{employee.phoneNumber}</h2>
                  <h3>{employee.email}</h3>
                  <h4>{employee.salary}</h4>
                </div>

                <div className="flex justify-center gap-4 mt-auto">

                  <button
                    onClick={() =>
                      deleteNotes(employee.id)
                    }
                    className="bg-yellow-500 px-4 py-1 rounded w-24"
                  >
                    delete
                  </button>

                  <button
                    onClick={() =>
                      handleEdit(employee)
                    }
                    className="bg-yellow-500 px-4 py-1 rounded w-24"
                  >
                    update
                  </button>

                </div>
              </>

            )}

          </div>

        ))}

      </div>
    </div>
  );
};

export default EmployeeList;