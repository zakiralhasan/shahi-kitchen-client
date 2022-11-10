import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create new user through email and password
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user login with email and password
  const userLoginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login user through google
  const loginUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  //login user through Github
  const loginUserWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGithub);
  };

  //take user name and photo URL during registration
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  //user email varify through valid mail
  const userEmailVerification = (email) => {
    return sendEmailVerification(auth.currentUser);
  };

  //reset user password through email
  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //monitoring login user
  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribeUser();
  }, []);
  const authInfo = {
    user,
    creatUser,
    userLoginWithEmailAndPassword,
    loginUserWithGoogle,
    loginUserWithGithub,
    updateUserProfile,
    logOutUser,
    userEmailVerification,
    resetUserPassword,
    loading,
    setLoading,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
