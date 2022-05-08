import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext/auth-context";

export function ProtectedRoute(){
    const {authState} = useAuth();
    console.log("inside protective rout",authState.user.username);
    if(authState.token){
        return <Outlet/>;
    }else{
        return <Navigate to="/login" replace/>;
    }
};