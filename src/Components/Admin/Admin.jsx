import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {Redirect} from 'react-router-dom'

function Admin() {
    const {isLoggedIn} = useContext(AuthContext)
    
    if(!isLoggedIn) {
        return <Redirect to="/" />
    }

  return (
    <div>
      <h1>Admin </h1>
    </div>
  );
}

export default Admin;
