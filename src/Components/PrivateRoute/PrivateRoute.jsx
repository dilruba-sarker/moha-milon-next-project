import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Login from './../Login/Login';

const PrivateRoute = ({children}) => {
    const{user ,loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;
