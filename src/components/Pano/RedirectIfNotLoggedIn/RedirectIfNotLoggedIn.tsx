"use client"

import { useEffect } from "react";
import { checkUser } from "../LoginAndUploadWidget/LoginAndUploadWidget";

interface RedirectIfNotLoggedInProps {
  panoEndpoint: string;
}

// TODO: Write test to make sure if server responds poorly to userinfo check
// we go to google login. I think that is the case but because I can't access
// the internet right now, I can't be sure.
export default function RedirectIfNotLoggedIn({
  panoEndpoint,
}: RedirectIfNotLoggedInProps) {
  useEffect(() => {
    checkUser(panoEndpoint).then((response) => {
      if (!response.isLoggedIn) {
        console.log("You are not logged in. Redirecting to login.");
        window.location.replace(`${panoEndpoint}/login/google`);
      }
    });
  }, []);

  return (
    <></>
  );
}
