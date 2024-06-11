import {Outlet, Navigate, type Path, useLocation} from "react-router-dom";
import {encode} from "js-base64";

import {useAuth} from "@/lib/auth-util";

export default function PrivateRoute(
  {
    loginUrl,
  } : {
    loginUrl: string | Partial<Path>
  }
) {
  const {isAuthenticated} = useAuth();
  const {pathname} = useLocation();

  return isAuthenticated ? <Outlet /> : <Navigate to={`${loginUrl}?redirect=${encode(pathname)}`} replace />;
}