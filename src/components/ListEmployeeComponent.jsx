import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    listEmployees().then((response) => {
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    })
  },[])

  return (
    <div className='container'>
        <h2 className='list-text'>List of Employees</h2>
        <div className='table-data'>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee EmailId</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>)
                }
            </tbody>
        </table>
        </div> 
    </div>
  )
}

export default ListEmployeeComponent