import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";

export function ProtectedRoute(){
    const {token} = useSelector((state)=>state.auth);
    if(token){
        return <Outlet/>;
    }else{
        return <Navigate to="/login" replace/>;
    }
};