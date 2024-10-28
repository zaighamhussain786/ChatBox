import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("ChatBox User", JSON.stringify(data));

      setAuthUser(data);

      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName) {
    toast.error("Full Name is required");
    return false;
  }
  if (fullName.length < 3) {
    toast.error("fullName must be atleast 3 characters");
    return false;
  }
  if (!userName) {
    toast.error("Username is required");
    return false;
  }
  if (userName.length < 3) {
    toast.error("Username must be atleast 3 characters");
    return false;
  }
  if (!password) {
    toast.error("Password is required");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  if (!confirmPassword) {
    toast.error("Confirm Password is required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (!gender) {
    toast.error("Gender is required");
    return false;
  }

  return true;
};
