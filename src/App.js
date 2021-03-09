import { useState, useEffect } from 'react'
import Header from './Components/Header';
import Employees from './Components/Employees'

const App = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getEmployees = async () => {
      const returnedEmployees = await fetchEmployees()
      setEmployees(returnedEmployees)
    }

    getEmployees()
  }, [])

  // Fetch Employees
  const fetchEmployees = async () => {
    const res = await fetch('https://randomuser.me/api/?results=35&inc=name,email,id,location,phone,picture&seed=someString')
    const data = await res.json()

    console.log(data)

    return data.results
  }

  //Sort Employees
  const sortEEsByName = async () => {
    var ees = await fetchEmployees()
    ees.sort((a, b) => {
      if (a.name.first < b.name.first) return -1
      if (a.name.first > b.name.first) return 1
      if (a.name.last < b.name.last) return -1
      if (a.name.last < b.name.last) return 1
      return 0
    })
    setEmployees(ees)
  }

  // Filter Employees
  const filterEEsByName = async () => {
    var searchedText = document.getElementById("searchText").value
    var ees = await fetchEmployees()
    var matchedText = searchedText.toUpperCase();
    ees = ees.filter(ee => ee.name.first.toUpperCase().includes(matchedText) ||
      ee.name.last.toUpperCase().includes(matchedText));
    setEmployees(ees);
  }

 const searchTextOnKeyUp = (event) => {
  if (event.key === 'Enter') {
    filterEEsByName();
  }
 }

  return (
    <div className='container'>
      <Header className="App-header" />
      <button className='btn' type="button" onClick={sortEEsByName}>Sort by name</button>
      {/* <label for="searchText">Search: </label> */}
      <input className='search' id="searchText" type="text" onKeyUp={searchTextOnKeyUp}/>
      <button className='btn-search' type="button" onClick={filterEEsByName}>Search By Name</button>
      <Employees employees={employees}/>
    </div>
  );
}

export default App;
