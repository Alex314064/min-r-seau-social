import { userAtom } from "../atoms/user";
import { useAtomValue } from "jotai";

const Profile = () => {
  const username = useAtomValue(userAtom);
  return (
    <>
      <h1>{"Profil de l'utilisateur"}</h1>
      <p>{username}</p>
    </>
  );
};
export default Profile;
