import { atom, useSetAtom, useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const loggedUserAtom = atom(false);
export const userAtom = atom("");
const YourComponent = () => {
  const token = Cookies.get("token");
  const setUser = useSetAtom(userAtom);
  const [loggedUser, setLoggedUser] = useAtom(loggedUserAtom);
  const log = () => {
    const userId = jwtDecode(token).id;
    fetch(`http://localhost:1337/api/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        const { username } = user;
        setLoggedUser(true);
        setUser(username);
      });
  };
  log();
};
export default YourComponent;
