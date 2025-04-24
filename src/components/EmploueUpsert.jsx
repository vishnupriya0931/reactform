import React, { useEffect, useState } from "react";

export default function EmploueUpsert({ employee, onAdd, onUpdate , onReset }) {
    const [formState, setFormState] = useState({
        name: '',
        age: '',
        emailAddress: '',
        phoneNo: '',
    });

    useEffect(() => {
        if (employee) {
            setFormState({
                name: employee.name,
                age: employee.age,
                emailAddress: employee.emailAddress,
                phoneNo: employee.phoneNo
            });
        } else {
            setFormState({
                name: '',
                age: '',
                emailAddress: '',
                phoneNo: '',
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (employee) {
            // Update existing employee
            const updatedEmployee = { ...employee, ...formState };
            onUpdate(updatedEmployee);
        } else {
            // Add new employee
            onAdd(formState);
        }

        // Reset form after submission
        setFormState({
            name: '',
            age: '',
            emailAddress: '',
            phoneNo: '',
        });
    };

    return (
        <div>
            <div className="form-container">
                <h1>{employee ? 'Update Employee' : 'Add Employee'}</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={formState.name} onChange={handleChange} />

                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" value={formState.age} onChange={handleChange} />

                    <label htmlFor="emailAddress">E-mail Address</label>
                    <input type="email" name="emailAddress" value={formState.emailAddress} onChange={handleChange} />

                    <label htmlFor="phoneNo">Phone No</label>
                    <input type="number" name="phoneNo" value={formState.phoneNo} onChange={handleChange} />

                    <button type ="submit" className="btn-submit">{employee ? 'Update' : 'Add'}</button>
                    <button type ="reset" className="btn-reset " onClick={onReset}>Reset</button>
                </form>
            </div>
        </div>
    );
}