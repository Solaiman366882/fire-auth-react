import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../config/firebase-config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    //create user with email password
    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    } 
    //user login with email and password
    const userLogin  =  (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user Log out
    const logOut = () => {
        return signOut(auth)

    }

    useEffect(() => {
        const unSubscribe  = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    },[])

    const authentications = {
        user,
        createUser,
        userLogin,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value={authentications}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}


export default AuthProvider;