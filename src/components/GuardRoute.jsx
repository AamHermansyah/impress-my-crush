import { Navigate } from "react-router-dom"

function GuardRoute({ children }) {
  if (localStorage.getItem('name') === null) return <Navigate to="/" />;

  return children;
}

export default GuardRoute;
