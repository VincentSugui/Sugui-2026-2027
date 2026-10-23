import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Gallery from "./pages/Gallery.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/gallery"
        element={
          <ProtectedRoute>
            <Gallery />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/gallery" />} />
    </Route>
  );
}
export default App;

