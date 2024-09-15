import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate, Outlet } from 'react-router-dom';
import MainLayout from '../layout';
import ProtectedRoute from '../utils/protectingRoute';

// Lazy loading
const LoginPage = lazy(() => import('../view/auth'));
const UserManagement = lazy(() => import('../view/user'));
const CategoryManagement = lazy(() => import('../view/manCategory'));
const ProductManagement = lazy(() => import('../view/manProduct'));

function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <MainLayout>
            <Suspense fallback={<div className="flex justify-center items-center h-screen">
              <div className="loader">Loading...</div>
            </div>}>
              <Outlet />
            </Suspense>
          </MainLayout>
        </ProtectedRoute>
      ),
      children: [
        { path: 'man-user', element: <UserManagement /> },
        { path: 'man-category', element: <CategoryManagement /> },
        { path: 'man-product', element: <ProductManagement /> },
        // another route here
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}

export default AppRoutes;