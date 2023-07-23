import React from "react";
import { Container, Box, TextField, Button } from "@mui/material";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [email, setEmail] = React.useState("");
  const [confirmEmail, setConfirmEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [confirmEmailError, setConfirmEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);

  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email === "" || email === null) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (confirmEmail === "" || confirmEmail !== email) {
      setConfirmEmailError(true);
    } else {
      setConfirmEmailError(false);
    }

    if (password === "" || password === null) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (confirmPassword === "" || confirmPassword !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setConfirmEmailError(false); 
  };

  const handleConfirmEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(e.target.value);
    setEmailError(false); 
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setConfirmPasswordError(false); 
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordError(false); 
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <h2>Register</h2>

  
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
      >
        <TextField
          error={emailError}
          type="email"
          label="Email"
          placeholder="Enter your email address"
          helperText={emailError ? "Incorrect email!" : ""}
          size="small"
          onChange={handleEmail}
        />
        <TextField
          error={confirmEmailError}
          type="email"
          label="Confirm Email"
          placeholder="Confirm your email address"
          helperText={confirmEmailError ? "Emails do not match!" : ""}
          size="small"
          onChange={handleConfirmEmail}
        />
        <TextField
          error={passwordError}
          type="password"
          label="Password"
          placeholder="Enter your password"
          helperText={passwordError ? "Incorrect password!" : ""}
          size="small"
          onChange={handlePassword}
        />
        <TextField
          error={confirmPasswordError}
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          helperText={confirmPasswordError ? "Passwords do not match!" : ""}
          size="small"
          onChange={handleConfirmPassword}
        />

        <Button type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
