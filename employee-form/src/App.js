import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeList from './Components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load saved data from localStorage on page load
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employees"));
    if (storedData) {
      setEmployees(storedData);
    }
  }, []);

  // Add new employee
  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  // Save to localStorage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtered employee list
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm)
  );

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <EmployeeForm onSubmit={addEmployee} />

              {/* Search Box */}
              <div style={{ textAlign: 'center', marginBottom: '1em' }}>
                <input
                  type="text"
                  placeholder="Search employees..."
                  onChange={handleSearch}
                />
              </div>

              {/* Employee List */}
              <EmployeeList employees={filteredEmployees} />

              {/* Save Data Button */}
              <div style={{ textAlign: 'center', marginTop: '1em' }}>
                <button onClick={saveData}>Save Data</button>
              </div>
            </>
          } />
          <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
