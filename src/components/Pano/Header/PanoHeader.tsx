"use client";
import React, { useEffect, useState } from "react";
import styles from "./PanoHeader.module.scss";
import Image from "next/image";
import { getPanoEndpoint } from "@/lib/server";

export default function PanoHeader() {
  // Authentication
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [panoEndpoint, setPanoEndpoint] = useState("");

  useEffect(() => {
    getPanoEndpoint().then((endpoint) => setPanoEndpoint(endpoint ?? ""));
  }, []);

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
  }, [panoEndpoint]);

  if (panoEndpoint === "") {
    return <div>Loading...</div>; // Show a loading state while your code runs
  }

  return (
    <>
      <div className={styles.panoHeader}>
        <a
          href="/view"
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
            href={"/upload"}
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
