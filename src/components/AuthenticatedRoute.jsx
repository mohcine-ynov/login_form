import { React, useContext } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../contexts/Auth";

const AuthenticatedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(Auth);

    if (isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }



}

export default AuthenticatedRoute;