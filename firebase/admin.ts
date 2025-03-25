import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

    let privateKey = process.env.FIREBASE_PRIVATE_KEY || "";

    privateKey = privateKey.replace(/\\n/g, "\n");

    initializeApp({
      projectId: projectId,
      credential: cert({
        clientEmail: clientEmail,
        projectId: projectId,
        privateKey: privateKey,
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
