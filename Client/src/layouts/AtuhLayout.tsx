import { Stack } from "@mantine/core";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <Stack bg={"gray"} justify="center" align="center">
      <Outlet></Outlet>
    </Stack>
  );
};
export default AuthLayout;
