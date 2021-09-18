import React from "react";
import "./index.css";
import { useState, useEffect, createContext } from "react";

const themes = {
  light: {
    background: "#76b852",
    text: "#000",
  },
  dark: {
    background: "#336e14",
    text: "#fff",
  },
};
const ThemeContext = createContext();
export default function App() {
  // penggunaan useState1
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // penggunaan useState2
  const [submitted, setSubmitted] = useState(false);

  // penggunaan useState3
  const [valid, setValid] = useState (false);

// penggunaan useState4
  const [valueTheme, setValueTheme] = useState(themes.light);

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
    <ThemeContext.Provider value={valueTheme}>
    <div class="form-container" style={{ backgroundColor: valueTheme.background }}>
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
       { submitted && valid ?  <div class="success-message">Success! Thank you for registering {values.lastName}</div> : null }
       <h2 style = {{ fontFamily:'Roboto',color: valueTheme.text, textAlign:'center'}}>Form Pendaftaran Praktikum</h2>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value = {values.firstName}
          onChange={handleFirstNameInputChange} 
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value = {values.lastName}
          onChange={handleLastNameInputChange}
        />
        {/* Uncomment the next line to show the error message */}
       {submitted && !values.lastName ?  <span id="last-name-error">Please enter a last name</span> : null}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value = {values.email}
          onChange={handleEmailInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field button" type="submit">
          Register
        </button>

        <button class="form-field1 button1" onClick={() =>setValueTheme(
              valueTheme === themes.light ? themes.dark : themes.light
            )
          }>
          Change Color 
        </button>
        
      </form>
    </div>
    </ThemeContext.Provider>
  );
}
