import { useSetAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { loggedUserAtom, userAtom } from "../atoms/user";

const useUser = () => {
  const setLoggedUser = useSetAtom(loggedUserAtom);
  const setUser = useSetAtom(userAtom);

  const getUser = (token) => {
    const userId = jwtDecode(token).id;
    fetch(`http://localhost:1337/api/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((user) => {
        const { username } = user;
        setLoggedUser(true);
        setUser(username);
      });
  };

  return getUser;
};

export default useUser;
