import React from "react";
import {
    Container, Box, TextField,
    Button
} from "@mui/material";

export default function Login() {
    const [email, SetEmail] = React.useState("");
    const [password, SetPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (email === "" || email === null) {
            setEmailError(true);
        }
        if (password === "" || password === null) {
            setPasswordError(true);
        }
    }

    const handleEmail = (e: any) => {
        SetEmail(e.target.value);

        if(emailError === true && email != "") {
            setEmailError(false);
        }
    }
    
    const handlePassword = (e: any) => {
        SetPassword(e.target.value);

        if(passwordError === true && password != "") {
            setPasswordError(false);
        }
    }

    return (
        <Container sx={{
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", height: "100%"
        }}>

            <h2>Login</h2>

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
                    error={passwordError}
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    helperText={passwordError ? "Incorrect password!" : ""}
                    size="small"
                    onChange={handlePassword}

                />

                <Button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};
