import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { GuestGuard } from "src/auth/guard";
import AuthClassicLayout from "src/layouts/auth/classic";

import { SplashScreen } from "src/components/loading-screen";

// ----------------------------------------------------------------------

// JWT
const JwtLoginPage = lazy(() => import("src/pages/auth/jwt/login"));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: "login",
    element: (
      <Suspense fallback={<SplashScreen />}>
        <GuestGuard>
          <AuthClassicLayout>
            <JwtLoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      </Suspense>
    ),
  },
];
