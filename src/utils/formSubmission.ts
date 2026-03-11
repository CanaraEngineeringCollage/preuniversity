// utils/formSubmission.ts


import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface SubmitFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  comments: string;
}

/**
 * Submit data to Google Sheets (Apps Script)
 */
async function submitToGoogleSheet(data: SubmitFormData) {
  try {
    await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        comments: data.comments,
      }).toString(),
    });

    return { success: true };
  } catch (error) {
    console.error("Google Sheet submission failed:", error);
    return { success: false, error };
  }
}

/**
 * Store data inside Firestore
 */
async function submitToFirestore(data: SubmitFormData) {
  try {
    await addDoc(collection(db, "inquiry"), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return { success: true };
  } catch (error) {
    console.error("Firestore submission failed:", error);
    return { success: false, error };
  }
}

/**
 * Main function → Submit to both Google Sheet & Firestore
 */
export async function submitForm(data: SubmitFormData) {
  const sheetResponse = await submitToGoogleSheet(data);
  const firestoreResponse = await submitToFirestore(data);

  return {
    sheet: sheetResponse,
    firestore: firestoreResponse,
  };
}
