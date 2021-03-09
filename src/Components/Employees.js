import Employee from './Employee'

const Employees = ({ employees }) => {
    console.log('Employees has %o employees: ', employees)
    return (
        <>
            {employees.map((employee) => (
                <Employee key={employee.email} employee={employee} />
            ))}
        </>
    )
}

export default Employees
