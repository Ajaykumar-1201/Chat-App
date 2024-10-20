import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { passwordValidator, usernameValidator } from "../utils/validators";
import { bgGradient } from "../constants/color";

function Login() {
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

  const handleLogin = () => setIsLogin((prev) => !prev);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    const validation = usernameValidator(newUsername);
    if (!validation.isValid) {
      setuserNameerror(validation.message);
    } else {
      setuserNameerror("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length > 7) {
      const validation = passwordValidator(newPassword);
      if (!validation.isValid) {
        setpasswordError(validation.message);
      } else {
        setpasswordError("");
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    console.log(password);
    if (password !== newConfirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setImageError("Please select a valid image file.");
        return;
      }

      // Validate file size (e.g., max 2MB)
      const maxSizeInMB = 2;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        setImageError(`File size should not exceed ${maxSizeInMB}MB.`);
        return;
      }

      // Clear previous errors
      setImageError("");

      // Convert the image file to a data URL for display
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
            margin: "auto",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  label="Password"
                  margin="normal"
                  type="password"
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
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  type="button"
                  variant="text"
                  fullWidth
                  onClick={handleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <Stack position={"relative"} width={"10rem"} marginTop={"1rem"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={image || ""}
                ></Avatar>

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba(0, 0, 0, 0.8)",
                      cursor: "pointer",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleImageChange}
                    />
                  </>
                </IconButton>
              </Stack>
              {imageError && (
                <Typography color="error">{imageError}</Typography>
              )}
              <form style={{ width: "100%", marginTop: "1rem" }}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={handleUsernameChange}
                />
                {userNameerror && (
                  <Typography color="error" variant="body2">
                    {userNameerror}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  label="Password"
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <Typography color="error" variant="body2">
                    {passwordError}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  label="Confirm Password"
                  margin="normal"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {confirmPasswordError && (
                  <Typography color="error" variant="body2">
                    {confirmPasswordError}
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  sx={{ marginTop: "1rem" }}
                >
                  Sign Up
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  type="button"
                  variant="text"
                  fullWidth
                  onClick={handleLogin}
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
