import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { loggedUserAtom } from "../atoms/user";
import { useAtom } from "jotai";

export const Logout = () => {
  const [loggedUser, setLoggedUser] = useAtom(loggedUserAtom);

  useEffect(() => {
    setLoggedUser(false);
    Cookies.remove("token", { expires: null });
  }, [setLoggedUser]);
};
