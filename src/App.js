// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const [income, setIncome] = useState("");

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }

//   function handleIncomeChange(e) {
//     setIncome(e.target.value);
//   }

//   function onSubmitHandle() {
//     console.log("state =", name, income);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={onSubmitHandle}>
//           <div>
//             <span>Name: </span>
//             <input value={name} onChange={handleNameChange} type="text"></input>
//           </div>
//           <div>
//             <span>Income: </span>
//             <select value={income} onChange={handleIncomeChange}>
//               <option value="high">High</option>
//               <option value="mid">Mid</option>
//               <option value="low">Low</option>
//             </select>
//             <input type="submit" value="submit"></input>
//           </div>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;

// Hooks & Form setup
// create hooks with initial values of empty string
// assign form values to hooks
// bc initial vaules are empty strings - form does not do anything
// we need to create and add onChange methods to let the form work

// useRefs - hold mutable objects in Refs to access it later
// init focus on input box
// tab to next box with tab key
// handle function to handle enter key to move to the next input
// import React, { useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const nameRef = useRef();
//   const ageRef = useRef();
//   const marriedRef = useRef();
//   const submitRef = useRef();

//   //init focus on name input box on page load
//   useEffect(() => {
//     nameRef.current.focus();
//   }, []);

//   //handle function to handle enter key to move to the next input
//   function keyPressHandle(e) {
//     if (e.keyCode === 13) {
//       if (e.target.id === "nameInput") {
//         ageRef.current.focus();
//       }
//       if (e.target.id === "ageInput") {
//         marriedRef.current.focus();
//       }
//       if (e.target.id === "marriedInput") {
//         submitRef.current.focus();
//       }
//     }
//   }

//   function onClickHandle() {
//     alert("submitted");
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>UseRefs Hook</h3>
//         <div className="form-field">
//           <span>Name</span>
//           <input
//             ref={nameRef}
//             id="nameInput"
//             type="text"
//             onKeyDown={keyPressHandle}
//           />
//         </div>
//         <div className="form-field">
//           <span>age</span>
//           <input
//             ref={ageRef}
//             id="ageInput"
//             type="text"
//             onKeyDown={keyPressHandle}
//           />
//         </div>
//         <div className="form-field">
//           <span>Married?</span>
//           <input
//             ref={marriedRef}
//             id="marriedInput"
//             type="checkbox"
//             onKeyDown={keyPressHandle}
//           />
//         </div>
//         <button
//           onClick={onClickHandle}
//           ref={submitRef}
//           id="submitButton"
//           onKeyDown={keyPressHandle}
//         >
//           Submit
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;

//useForwardingRef
//forward the ref inside a component
//created input component, in which we forwarded useRefs
//we need to forward refs inorder to keep the tab, enter, and focus features
import React, { useRef, useEffect } from "react";
import Input from "./components/Input";
import "./App.css";

const inputStlye = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  marginBottom: "10px",
};

function App() {
  //useRef hooks - init input focus on pg load , on enter to next input, tab to next input
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  //focus on name input box on page load
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  //handle function on enter move to next box
  function firstNameKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastNameKeyDown() {}

  return (
    <div className="App">
      <header className="App-header">
        <Input
          ref={firstNameRef}
          placeholder="first name "
          style={inputStlye}
          onKeyDown={firstNameKeyDown}
        />
        <Input
          ref={lastNameRef}
          placeholder="last name "
          style={inputStlye}
          onKeyDown={lastNameKeyDown}
        />
      </header>
    </div>
  );
}

export default App;
