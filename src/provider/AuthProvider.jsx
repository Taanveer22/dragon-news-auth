import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// ====== step 01 (create context) ===========
const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({
  //   name: "taanveer",
  //   email: "tv469@gmail.com",
  // });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user, loading);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileForUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const AuthInfo = {
    user,
    setUser,
    createNewUser,
    signOutUser,
    signInUser,
    loading,
    updateProfileForUser
  };

  //=============== get the currently sign in user =================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // after load user loading status
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // ========= step 03 (add return provider) ===========
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

// ========== step 02(export named cotext) =========
export { AuthContext };
export default AuthProvider;
