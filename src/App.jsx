import React , { use, useEffect, useState } from "react";
import Employees from "./components/employees";
import EmploueUpsert from "./components/EmploueUpsert";

export default function App() {

    const [employees, setEmployees] = useState([
        {
            id:1,
            name: "vishnupriya",
            age :21,
            emailAddress :"vishnupriya8036@gamil.com" ,
            phoneNo :987653210,

        },
        {
            id:2,
            name: "vignesh",
            age :23,
            emailAddress :"vignesh20301@gamil.com" ,
            phoneNo :9874563210,

        },
    ]);

    const [employee, setEmployee] =useState(null);
    useEffect(()=>{}, [employee])

    const handleAdd = (newEmployee)=>{
        setEmployees((prevEmployee)=>[
            ...prevEmployee,
            {...newEmployee ,  id:prevEmployee.length +1},
        ]
            
        )};

        const handleEdit = (id)=>{
            const emp = employees.find((x)=> x.id ===id);
            setEmployee(emp);
            // console.log(employee)
        }

        const handleUpdate = (updatedEmployee) => {
            setEmployees((prevEmployees) =>
              prevEmployees.map((emp) =>
                emp.id === updatedEmployee.id ? updatedEmployee : emp
            )
        );
            setEmployee(null);
          };
          
          const handleReset = ()=>{
            setEmployee(null);
          }

          const handleDetele = (id)=>{
            setEmployees((prevEmployees)=>
            prevEmployees.filter((emp)=> emp.id !== id)
            )
          }
  return (
    <div className="main-container">
        <Employees employees={employees} 
         onEdit={handleEdit} onDelete={handleDetele}/>
        <EmploueUpsert employee={employee}
         onAdd={handleAdd}
          onUpdate ={handleUpdate}
          onReset = {handleReset}/>
    </div>
  );
}