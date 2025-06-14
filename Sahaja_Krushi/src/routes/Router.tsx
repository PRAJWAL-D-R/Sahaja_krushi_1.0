import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '../layout/auth/AuthLayout';
import Login from '../pages/auth/Login';
import NotFoundPage from '../pages/notfound/NotFoundPage';
import AdminMainLayout from '../layout/admin/AdminMainLayout';
import HomePage from '../pages/home/HomePage';
import FormerMainLayout from '../layout/former/FormerMainLayout';

const Router = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminMainLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomePage />} />
      </Route>

     <Route path="/former" element={<FormerMainLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomePage />} />
      </Route>

      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />

      {/* Catch-all fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
