// // Signup.tsx
// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import Button from "@mui/material/Button";

// type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
// const LoginForm = () => {
//   type AuthType = {
//     email: string;
//     password: string;
//   };
//   const [authData, setAuthData] = useState<AuthType>({
//     email: "",
//     password: "",
//   });

//   const { email, password } = authData;
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setAuthData({ ...authData, [name]: value });
//   };

//   const handleSubmit = (e: FormSubmitEvent) => {
//     e.preventDefault();
//     console.log(email, password);
//   };
//   return (
//     // <div className="signup-main-container">
//     //   <div className="form-container">
//     //     <h2 className="signup">Login</h2>
//     //     <form onSubmit={handleSubmit} className="form-inner-container">
//     //       <div>
//     //         <TextField
//     //           id="text-line"
//     //           name="email"
//     //           value={email}
//     //           onChange={handleInputChange}
//     //           required
//     //           label="Email"
//     //         />
//     //       </div>
//     //       <div>
//     //         <TextField
//     //           id="text-line"
//     //           name="password"
//     //           value={password}
//     //           onChange={handleInputChange}
//     //           required
//     //           label="Password"
//     //         />
//     //       </div>
//     //       <div>
//     //         <Button
//     //           style={{ width: "100%", background: "#434db8" }}
//     //           variant="contained"
//     //           type="submit" // Add type submit to trigger form submission
//     //         >
//     //           Login
//     //         </Button>
//     //       </div>

//     //       <div className="signup-link">
//     //         <a href="">Don't have an account? Sign Up</a>
//     //       </div>
//     //     </form>
//     //   </div>
//     // </div>
    
//   );
// };

// export default LoginForm;
