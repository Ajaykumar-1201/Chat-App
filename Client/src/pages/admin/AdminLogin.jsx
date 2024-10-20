import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { bgGradient } from "../../constants/color";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userNameerror, setuserNameerror] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("");

  if (isAdmin) return <Navigate to="/admin/dashboard" />;

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: validate and handle login logic here
    console.log("Login Successful");
    // Redirect to dashboard or groups page
  };

  const passwordchangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Password"
              margin="normal"
              type="password"
              value={password}
              onChange={passwordchangeHandler}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              sx={{ marginTop: "1rem" }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
