import { Link } from "react-router-dom";
import { loggedUserAtom } from "../atoms/user";
import { useAtomValue } from "jotai";

const Header = () => {
  const loggedUser = useAtomValue(loggedUserAtom);

  return (
    <header>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          {loggedUser ? (
            ((<Link to="/Profile">Profil</Link>),
            (<Link to="/Logout">Se déconnecter</Link>))
          ) : (
            <Link to="/Register">Créer un compte</Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
