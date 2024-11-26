import { useAuth } from "../../firebase/AuthProvider";
import { firebaseInitialized } from "../../firebase/firebase";
import MinSide from "./MinSide";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (!firebaseInitialized) {
    return <p style={{ padding: "20px" }}>Ingen autentisering tilgjengelig.</p>;
  }
  if (loading) {
    return <p style={{ margin: "20px" }}>Laster siden...</p>;
  }

  if (!user) {
    return (
      <p style={{ padding: "20px" }}>
        Du må være innlogget for å se denne siden.
      </p>
    );
  }

  return <MinSide />;
}

export default ProtectedRoute;
