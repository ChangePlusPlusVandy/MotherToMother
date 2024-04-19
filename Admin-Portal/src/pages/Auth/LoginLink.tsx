import React, { useEffect, useState } from "react";
import { useAuth } from "../../lib/contexts";

const LoginLink: React.FC = () => {
  const { loginWithEmailLink, authError } = useAuth();
  const [loginStatus, setLogInStatus] = useState("Authenticating...");

  useEffect(() => {
    const user = loginWithEmailLink();
    if (!user) {
      setLogInStatus(authError ?? "Error logging in. Please contact support.");
    } else {
      setLogInStatus("Logged in, you can close the window now!");
    }
  }, []);
  return (
    <>
      <p>{loginStatus}</p>
    </>
  );
};
export default LoginLink;
