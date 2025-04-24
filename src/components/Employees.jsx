import React from "react";

export default function Employees({employees , onEdit, onDelete}) {

    if( employees.length === 0){
        return <div>
            <h1>No Records</h1>
        </div>
    }

  return (
    <div className="cards">
        {employees.map((employee)=>{
            return( 
            <div className="card" key={employee.id}>
                <p>
                    <span className="title">Name :</span> {employee.name}
                </p>
                <p>
                    <span className="title">Age :</span>{employee.age}
                </p>
                <p>
                    <span className="title">E-mail address :</span> {''}{employee.emailAddress}
                </p>
                <p>
                    <span className="title">Phone No :</span>{employee.phoneNo}
                </p>
                <div className="btn-group">
                    <button className="btn-update" onClick={()=>{onEdit(employee.id)}}>Edit</button>
                    <button className="btn-delete " onClick={()=>{onDelete(employee.id)}}>Delete</button>
                </div>
            </div>)

        })}
    </div>
  )
}