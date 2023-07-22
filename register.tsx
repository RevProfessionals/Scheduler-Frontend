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

  // Submit button checking if fields have valid values and match their confirm counterparts
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

  // onChange functions updating field values and clearing any existing errors
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setConfirmEmailError(false); // Clear confirm email error on email change
  };

  const handleConfirmEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(e.target.value);
    setEmailError(false); // Clear email error on confirm email change
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setConfirmPasswordError(false); // Clear confirm password error on password change
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordError(false); // Clear password error on confirm password change
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

      {/*Form component containing text fields + submit button*/}
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
