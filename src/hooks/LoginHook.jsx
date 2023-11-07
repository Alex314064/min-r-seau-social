import { useSetAtom } from "jotai";
import Cookies from "js-cookie";
import { loggedUserAtom, userAtom } from "../atoms/user";

const useLogin = () => {
  const setLoggedUser = useSetAtom(loggedUserAtom);
  const setUser = useSetAtom(userAtom);

  const login = ({ body, url }) => {
    fetch(url, {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseBody) => {
        const {
          user: { username },
          jwt: responseJWT,
        } = responseBody;
        Cookies.set("token", responseJWT, { expires: null });
        const connected = responseJWT ? true : false;
        setLoggedUser(connected);
        setUser(username);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return login;
};

export default useLogin;
