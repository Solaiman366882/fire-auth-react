import { createContext } from "react";

import PropTypes from 'prop-types'

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const authentications = 'nodi sagor'
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