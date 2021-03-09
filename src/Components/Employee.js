const Employee = ({ employee }) => {
    return (
        <div className='employee'>
            <img src={employee.picture.large} alt=''/>
            <h2>{employee.name.first} {employee.name.last}</h2>
            
                <p>Phone: {employee.phone}</p>
                <p>Email: {employee.email}</p>
                <p>Country: {employee.location.country}</p>
                <p>Location: {employee.location.city}, {employee.location.state}</p>
        </div>
    )
}

export default Employee
