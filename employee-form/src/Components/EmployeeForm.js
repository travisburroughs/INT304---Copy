// import the necessary libraries
import React, { useState } from 'react';
import '../Content/employee.css';


// define the function
function EmployeeForm(props) {
  
    // define the varibales and setter functions, and set them to the default state
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // define a submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      EmployeeId: Math.floor(Math.random() * 10000),
      name,
      email,
      phone,
    };
    props.onSubmit(employee);
    setName('');
    setEmail('');
    setPhone('');
  };


  // Render the HTML
  return (
    // define the form
    
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Professor Xavier's Student Registration</h2>
      
      <img src="https://images.seeklogo.com/logo-png/48/1/x-men-xaviers-school-for-gifted-youngsters-logo-png_seeklogo-484947.png" alt="React Image" />
      <h2>Add Employee</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
    
  );
}

// allow the Component to be called from elsewhere
export default EmployeeForm;
