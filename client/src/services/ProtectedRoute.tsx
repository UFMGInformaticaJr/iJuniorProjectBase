import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: any }) {
  // pegar o isAuthenticated do localStorage e retornar true ou false
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  //const { isAuthenticated } = useAuth();
  if (isAuthenticated === "true") {
    return children;
  }
  return <Navigate to="/login" />;
}
export default ProtectedRoute;
