import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
// import { onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
