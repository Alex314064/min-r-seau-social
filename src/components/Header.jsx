import { Link } from "react-router-dom";
import { loggedUserAtom, userAtom } from "../atoms/user";
import { useAtom, useSetAtom } from "jotai";
import Cookies from "js-cookie";

const Header = () => {
  const [loggedUser, setLoggedUser] = useAtom(loggedUserAtom);
  const setUser = useSetAtom(userAtom);
  const handleClick = () => {
    setLoggedUser(false);
    setUser("");
    Cookies.remove("token");
  };
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {loggedUser ? (
          <>
            <li>
              <Link to="/Profile">Profil</Link>
            </li>
            <li>
              <Link to="/" onClick={handleClick}>
                Se déconnecter
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/Register">Créer un compte</Link>
            </li>
            <li>
              <Link to="/Login">Se Connecter</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
