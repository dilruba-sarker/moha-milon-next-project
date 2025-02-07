import { createUserWithEmailAndPassword,
     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';


export const AuthContext=createContext(null)
const provider = new GoogleAuthProvider();
// const auth = getAuth();
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
// sign in
const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// google signin
const signInGoogle=()=>{
    return signInWithPopup(auth, provider)
}
// sign out
const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
}

    const authInfo={
        user,setUser,
        createUser,
        signInUser,signOutUser,loading,signInGoogle
    }

    useEffect(()=>{
      const disconnect=  onAuthStateChanged(auth, (currentUse=>{
            console.log("current user is hrere", currentUse);
            setUser(currentUse)
            setLoading(false)
        }))
        return(()=>{
            disconnect()
        })
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;