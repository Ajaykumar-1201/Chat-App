export const usernameValidator = (username) => {
  // Regular expression to allow only letters (uppercase and lowercase) and numbers, with a length of 3 to 16 characters.
  const isValid = /^[a-zA-Z0-9]{0,16}$/.test(username);

  if (!isValid) {
    return {
      isValid: false,
      message:
        "Username is invalid. It should contain only letters and numbers.",
    };
  }
  return { isValid: true, message: "" };
};

export const passwordValidator = (password) => {
  // Regular expression to allow only letters (uppercase and lowercase) and numbers, with a length of 8 to 20 characters.
  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
      password
    );

  if (!isValid) {
    return {
      isValid: false,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    };
  }
  return { isValid: true, message: "" };
};

export const searchValidator = (text) => {
  const isValid = /^[a-zA-Z0-9]{0,16}$/.test(text);

  if (!isValid) {
    return {
      isValid: false,
      message:
        "Username is invalid. It should contain only letters and numbers.",
    };
  }
  return { isValid: true, message: "" };
};
