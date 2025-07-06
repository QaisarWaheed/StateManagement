import { Text, Button, Input, PasswordInput, Stack } from "@mantine/core";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";
const Signup = () => {
  const { signup, newuser } = useAuth();
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSignup = async () => {
    signup({
      email: userEmail,
      password: userPassword,
      name: userName,
    });

    const payload = {
      email: userEmail,
      password: userPassword,
      name: userName,
    };

    const response = await axios.post(
      "http://localhost:8000/user/signup",
      payload
    );
    if (response.data) {
      toast.success("User Create Successfuly!!!");
      console.log(response.data);
    }

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
        <Input
          value={userName}
          placeholder="UserName"
          m={"10px"}
          onChange={(e) => {
            setUserName(e.target.value);
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
        <Button variant="default" m={"10px"} onClick={handleSignup}>
          Signup
        </Button>

        <Text>
          {newuser?.email} {newuser?.name}
        </Text>
      </Stack>
    </Stack>
  );
};
export default Signup;
