import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const googleProvder = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => signInWithPopup(auth, googleProvder);
  const githubSignIn = () => signInWithPopup(auth, githubProvider);

  const signoutUser = () => signOut(auth);

  const authInfo = {
    googleSignIn,
    githubSignIn,
    loading,
    user,
    signoutUser,
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => cleanUp();
  }, []);
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
