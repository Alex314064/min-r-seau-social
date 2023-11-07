import Cookies from "js-cookie";
import { loggedUserAtom, userAtom } from "../atoms/user";
import { atom, useAtom } from "jotai";

const Register = () => {
  const [loggedUser, setLoggedUser] = useAtom(loggedUserAtom);
  const [user, setUser] = useAtom(userAtom);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerUrl = "http://localhost:1337/api/auth/local/register";

    const body = new FormData(e.target);
    const response = await fetch(registerUrl, { body, method: "POST" });
    console.log(body);
    const responseBody = await response.json();
    const {
      user: { username },
      jwt: responseJWT,
    } = responseBody;
    console.log(responseBody);
    Cookies.set("token", responseJWT, { expires: null });
    const connected = responseJWT ? true : false;
    setLoggedUser(connected);
    setUser(username);
  };

  return (
    <>
      <h1> Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="username"
          name="username"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Register;
