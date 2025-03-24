"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const EXPIRE_PERIOD = 60 * 60 * 24 * 5;

export const signUp = async (params: SignUpParams) => {
  const { uid, name, email } = params;
  try {
    const userRecord = await db.collection("users").doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists. SIgn in instead.",
      };
    }

    await db.collection("users").doc(uid).set({
      name,
      email,
    });
  } catch (error: any) {
    console.error(error);

    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email already in use.",
      };
    }

    return {
      success: false,
      message: "Failed to create an account.",
    };
  }
};

export const setSessionCookie = async (idToken: string) => {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: EXPIRE_PERIOD * 1000,
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: EXPIRE_PERIOD,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
};

export const signIn = async (params: SignInParams) => {
  const { email, idToken } = params;
  try {
    const userRecord = await auth.getUserByEmail(email);

    if (!userRecord) {
      return {
        success: false,
        message: "User does not exist.",
      };
    }

    await setSessionCookie(idToken);
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message: "Failed to sign in.",
    };
  }
};
