import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
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
  console.log(user);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const AuthInfo = {
    user,
    setUser,
    createNewUser,
  };

  //=============== get the currently sign in user =================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
