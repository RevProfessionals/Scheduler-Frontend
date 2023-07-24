import React from "react";
import { Alert, Grow, Link, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab'

export default function Login(props:  any) {
    const [email, SetEmail] = React.useState("");
    const [password, SetPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
	const [loginError, setLoginError] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

    // Submit button checking if email and password have valid values, setting error if not
    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

		let error = false;
		// Verify the input fields contain data.
        if (email === "" || email === null) {
            setEmailError(true);
			error = true;
        }
        if (password === "" || password === null) {
            setPasswordError(true);
			error = true;
        }
		if(error) {
			return;
		}

		setLoading(true);
		// Begin the login request.
		await props.loginHandler({email, password});

		// Finish the login request.
		setLoading(false);
		setLoginError(true);
    }

    // onChange functions setting email and password values + clearing any existing errors
    const handleEmail = (e: React.BaseSyntheticEvent) => {
        SetEmail(e.target.value);
		setEmailError(false);
		setLoginError(false);
    }
    const handlePassword = (e: React.BaseSyntheticEvent) => {
        SetPassword(e.target.value);
		setPasswordError(false);
		setLoginError(false);
    }

    return (
        <Stack gap="2rem" padding="2rem" bgcolor="background.paper" boxShadow={3}>
            <Typography variant="h4" textAlign="center">Log in to your<br/>Cloudinary account</Typography>
			<Grow in={loginError}>
				<Alert severity="error">Cannot log in using the email and password combination.</Alert>
			</Grow>
            {/*Form component containing text fields + submit button*/}
            <Stack component="form" noValidate autoComplete="off" gap="1rem">
                <TextField
					variant="standard"
                    error={emailError}
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    helperText={emailError ? "You must enter an email address." : ""}
                    size="small"
                    onChange={handleEmail}
                />
                <TextField
					variant="standard"
                    error={passwordError}
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    helperText={passwordError ? "You must enter a password." : ""}
                    size="small"
                    onChange={handlePassword}
                />
                <LoadingButton variant="contained" type="submit" onClick={handleSubmit} loading={loading}>Login</LoadingButton>
				<Typography textAlign="center">Are you a new user? <Link href="/register" underline="hover">Register here</Link>.</Typography>
            </Stack>
        </Stack>
    );
};
