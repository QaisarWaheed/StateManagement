import { Box, Button, Input, Stack, Text } from "@mantine/core";

import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

type User = {
  name: string;
  email: string;
};

const Home = () => {
  const [User, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const onClickHandle = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:8000/user/${email}`);
      setUser(response.data);
      toast.success("User Found");
    } catch (error) {
      toast.error("No User Found");
      setUser(null);
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack justify="center" align="center" h={"100vh"}>
      <Input
        placeholder="search User"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></Input>
      <Button onClick={onClickHandle}>Search</Button>
      <Box>
        <Text>{User ? User.email + "  " + User.name : "no User Found"}</Text>
      </Box>
    </Stack>
  );
};
export default Home;
