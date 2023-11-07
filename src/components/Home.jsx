import { userAtom } from "../atoms/user";
import { useAtomValue } from "jotai";

const Home = () => {
  const user = useAtomValue(userAtom);

  return (
    <div>
      <h1> Hello {user} !!! </h1>
    </div>
  );
};

export default Home;
