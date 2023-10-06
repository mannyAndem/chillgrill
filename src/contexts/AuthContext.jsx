import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
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
  const changePassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const changeEmail = (user, email) => {
    return updateEmail(user, email);
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
        changePassword,
        changeEmail,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
