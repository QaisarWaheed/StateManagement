import { useAuth } from "../Context/AuthContext";

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <div>
      {isAuthenticated && user ? `Welocme, ${user.email}` : "Not Logged In"}
    </div>
  );
};
export default Home;
