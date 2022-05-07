import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext/auth-context";

export function ProtectedRoute({children}){
    const {authState} = useAuth();
    if(authState.user){
        return <Outlet />
    }else{
        return <Navigate to="/login" replace/>
    }
};