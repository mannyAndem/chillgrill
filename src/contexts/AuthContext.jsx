import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = React.createContext();

// firebase auth initialization
const auth = getAuth(app);

// google provider init
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, () => {
      setCurrentUser(auth.currentUser);
      setLoading(false);
    });
  }, []);

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    return signOut(auth);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserInfo = (user, name) => {
    return updateProfile(user, {
      displayName: name,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        updateUserInfo,
        loginWithGoogle,
        createAccount,
        signout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
