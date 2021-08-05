// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Card from "../UI/Card";
// import Input from "../UI/Input";
// import "./SignUpForm.css";
// import validate from "./validate";

// function SignUpForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState(" ");
//   const [passwd, setPassword] = useState("");
//   const [FirstValid, setFirstValid] = useState(false);
//   const [lastValid, setlastValid] = useState(false);
//   const [emailValid, setEmailIsValid] = useState(false);
//   const [passwordValid, setPasswordValid] = useState(false);
//   let mailvalid;

//   const [errors, setErrors] = useState({});
//   // const { register, handleSubmit, errors } = useForm();
//   const firstNameChangeHandler = (event) => {
//     setFirstName(event.target.value);
//   };

//   const lastNameChangeHandler = (event) => {
//     setLastName(event.target.value);
//   };

//   const emailChangeHandler = (event) => {
//     event.preventDefault();
//     setEmail(event.target.value);
//     mailvalid = email.includes("@");
//   };

//   const passwordChangeHandler = (event) => {
//     event.preventDefault();
//     setPassword(event.target.value);
//   };

//   const nameHandler = () => {};

//   const submitHandler = (event) => {
//     setErrors(validate(email));
//     setErrors(validate(passwd));
//     event.preventDefault();
//     if (firstName.trim().length === 0) {
//       setFirstValid(true);
//     }
//     if (lastName.trim().length === 0) {
//       setlastValid(true);
//     }
//     if (email.trim().length === 0 || mailvalid === false) {
//       setEmailIsValid(true);
//     }
//     if (passwd.trim().length === 0) {
//       setPasswordValid(true);
//     }
//     console.log(firstName);
//     console.log(lastName);
//     console.log(email);
//   };
//   return (
//     <div className="signupCard">
//       <button className="signUpTop">
//         Try it free 7 days then $20/m thereafter.
//       </button>
//       <div className="card1">
//         <Card>
//           <form onSubmit={submitHandler}>
//             <div className="input1">
//               {/* <input type="text" placeholder="First Name"></input> */}
//               <Input
//                 type="text"
//                 value={firstName.value}
//                 onChange={firstNameChangeHandler}
//                 placeholder="First Name"
//                 onBlur={nameHandler}
//               />
//               {FirstValid && (
//                 <p className="formValid">First Name cannot be empty</p>
//               )}
//             </div>
//             <div className="input1">
//               {/* <input type="text" placeholder="Last Name"></input> */}
//               <Input
//                 type="text"
//                 value={lastName.value}
//                 onChange={lastNameChangeHandler}
//                 placeholder="Last Name"
//               />
//               {lastValid && (
//                 <p className="formValid">Last Name cannot be empty</p>
//               )}
//             </div>
//             <div className="input1">
//               {/* <input type="text" placeholder="Email"></input> */}
//               <Input
//                 // type="email"
//                 value={email.value}
//                 placeholder="Email"
//                 onChange={emailChangeHandler}
//               />
//               {errors.email && <p className="formValid">{errors.email}</p>}

//               {/* {emailValid && <p className="formValid">Email cannot be empty</p>} */}
//             </div>
//             <div className="input1">
//               {/* <input type="text" placeholder="Password"></input> */}
//               <Input
//                 // type="password"
//                 value={passwd.value}
//                 placeholder="Password"
//                 onChange={passwordChangeHandler}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}
//               {/* {passwordValid && (
//                 <p className="formValid">Password cannot be empty</p>
//               )} */}
//             </div>

//             <div>
//               <button className="signUpSubmit" type="submit">
//                 CLAIM YOUR FREE TRAIL
//               </button>
//             </div>
//             <div>
//               <p className="formLast">
//                 By clicking the button, you are agreeing to our Terms and
//                 Services
//               </p>
//             </div>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default SignUpForm;

import React, { useState } from "react";
import Card from "../UI/Card";
import validate from "./validate";
import Input from "../UI/Input";
import "./SignUpForm.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { firstName, lastName, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
  };
  return (
    <div className="signupCard">
      <Card>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="input1">
            <input
              className="formdata1"
              name="firstName"
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => onChange(e)}
            />
            {errors.firstName && (
              <p className="formValid">{errors.firstName}</p>
            )}
          </div>
          <div className="input1">
            <input
              className="formdata1"
              name="lastName"
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => onChange(e)}
            />
            {errors.lastName && <p className="formValid">{errors.lastName}</p>}
          </div>
          <div className="input1">
            <input
              className="formdata1"
              name="email"
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => onChange(e)}
            />
            {errors.email && <p className="formValid">{errors.email}</p>}
          </div>
          <div className="input1">
            <input
              className="formdata1"
              name="password"
              type="text"
              value={password}
              placeholder="password"
              onChange={(e) => onChange(e)}
            />
            {errors.password && <p className="formValid">{errors.password}</p>}
          </div>
          <div>
            <button className="signUpSubmit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SignUpForm;
