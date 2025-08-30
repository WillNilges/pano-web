"use client"

interface RedirectIfNotLoggedInProps {
  panoEndpoint: string;
}

export default function RedirectIfNotLoggedIn({
  panoEndpoint,
}: RedirectIfNotLoggedInProps) {
// Check if we're logged into pano
    fetch(`${panoEndpoint}/userinfo`, {
      credentials: "include",
    }).then(async (response) => {
      if (response.status === 200) {
        console.log("You're logged in");
        return (
          <></>
        );
      }
    });

    console.log("You are not logged in. Redirecting to login.");
    window.location.replace(`${panoEndpoint}/login/google`);
    
    return (
      <></>
    );
}
