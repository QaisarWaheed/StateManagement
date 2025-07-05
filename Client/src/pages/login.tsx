import { Button, Input, PasswordInput, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  let { login, user, isAuthenticated = false } = useAuth();

  const navigate = useNavigate();

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const handleLogin = async () => {
    login({ email: userEmail, password: userPassword });

    const payload = user;
    const response = await axios.post(
      "http://localhost:8000/user/login",
      payload
    );
    if (response.data) {
      toast.success("User LoggedIn Successfuly!!!");
      isAuthenticated = true;
    }
    console.log(userEmail, userPassword);
    navigate("/home");
  };

  return (
    <Stack justify="center" align="center" w={"100vw"} h={"100vh"}>
      <Stack
        h={"500px"}
        w={"300px"}
        style={{
          border: "1px solid black",
          borderRadius: "8px",
        }}
      >
        <Text fw={"bold"} fz={"h1"} m={"10px"}>
          Login
        </Text>
        <Input
          value={userEmail}
          placeholder="Email"
          m={"10px"}
          onChange={(e) => {
            setuserEmail(e.target.value);
          }}
        ></Input>
        <PasswordInput
          value={userPassword}
          placeholder="password"
          m={"10px"}
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        ></PasswordInput>
        <Button variant="default" m={"10px"} onClick={handleLogin}>
          Login
        </Button>

        <Text>
          {user?.email} {user?.password}
        </Text>
      </Stack>
    </Stack>
  );
};
export default Login;
