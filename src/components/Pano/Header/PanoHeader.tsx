"use client"
import React, { useEffect } from "react";
import styles from "./PanoHeader.module.scss";
import Image from "next/image";

export default function PanoHeader() {
  const panoEndpoint = process.env.NEXT_PUBLIC_PANO_ENDPOINT;

  // Authentication
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState("");

  useEffect(() => {
    // Check if we're logged into pano
    fetch(`${panoEndpoint}/userinfo`, {
      credentials: "include",
    }).then(async (response) => {
      const j = await response.json();
      if (response.status === 200) {
        console.log("You're logged in");
        setUser(j.name);
        setIsLoggedIn(true);
        return;
      }
      setUser("");
      setIsLoggedIn(false);
    });
  }, []);

  return (
    <>
      <div className={styles.panoHeader}>
        <a
          href="/pano/view"
          style={{
            display: "flex",
            flexDirection: "row",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Image src="/pano.png" alt="Pano logo" width={72} height={72} />
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Pano</p>
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <a
            href={"/pano/upload"}
            style={{ padding: "10px" }}
            className={`${!isLoggedIn ? styles.disabled : ""}`}
          >
            <img src="/upload_icon.png" width={24} />
          </a>
          {isLoggedIn && (
            <p>
              {user} (<a href={`${panoEndpoint}/logout`}>Logout</a>)
            </p>
          )}
          {!isLoggedIn && (
            <a href={`${panoEndpoint}/login/google`}>
              <p>Log In</p>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
