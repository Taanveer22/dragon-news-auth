import { createContext, useState } from "react";

// ====== step 01 (create context) ===========
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "taanveer",
    email: "tv469@gmail.com",
  });
  const AuthInfo = {
    user,
    setUser,
  };
  // ========= step 03 (add return provider) ===========
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

// ========== step 02(export named cotext) =========
export { AuthContext };
export default AuthProvider;
