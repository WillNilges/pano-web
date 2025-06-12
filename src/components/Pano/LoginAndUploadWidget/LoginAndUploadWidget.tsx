"use client"
import styles from "./LoginAndUploadWidget.module.scss";
import { getPanoEndpoint } from "@/lib/server";
import React, { useEffect } from "react";

async function checkUser(): Promise<{ isLoggedIn: boolean, user: string }> {
    const panoEndpoint = await getPanoEndpoint();
    const response = await fetch(`${panoEndpoint}/userinfo`, {
        credentials: "include",
    });

    if (response.status !== 200) {
        return { isLoggedIn: false, user: "" };
    }

    console.log("User is logged in.");
    const j = await response.json();
    return { isLoggedIn: true, user: j.name };
}

interface LoginAndUploadWidgetProps {
    panoEndpoint: string;
}


export default function LoginAndUploadWidget({ panoEndpoint }: LoginAndUploadWidgetProps) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState("");

    useEffect(() => {
        checkUser().then((response) => {
            setIsLoggedIn(response.isLoggedIn);
            setUser(response.user);
        });
    }, [])

    return (
        <>
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
        </>
    );
}
