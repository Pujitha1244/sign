// const validate = (values) => {
//   let errors = {};

//   if (!values.email) {
//     errors.email = "email  is invalid";
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = "email  is required";
//   }

//   if (!values.username) {
//     errors.username = "username  is required";
//   }

//   if (!values.password) {
//     errors.password = "password must be more than 5 chars";
//   } else if (values.password.length < 4) {
//     errors.password = "password must be more than 5 chars";
//   }

//   return errors;
// };

// export default validate;

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "email  is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email  is invalid";
  }

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }

  if (!values.password) {
    errors.password = "password  is required";
  } else if (values.password.length < 4) {
    errors.password = "password must be more than 5 chars";
  }

  return errors;
};

export default validate;
