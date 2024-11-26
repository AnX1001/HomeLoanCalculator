import { useAuth } from "../../firebase/AuthProvider";
import MinSide from "./MinSide";

function ProtectedRoute() {
  const { user, loading } = useAuth();


  if (loading) {
    return <p>Loading...</p>;
  }


  if (!user) {
    return <p style={{padding: "20px"}}>Du må være innlogget for å se denne siden.</p>;
  }

  return <MinSide />;
}

export default ProtectedRoute;
