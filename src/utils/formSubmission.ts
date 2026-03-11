// utils/formSubmission.ts

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
    // Note: mode 'no-cors' is used for Apps Script typically, 
    // but it won't allow you to read the response.
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
 * REPLACE FIREBASE: Submit data to your Next.js CMS API
 */
async function submitToCMS(data: SubmitFormData) {
  try {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
    
    const response = await fetch(`${cmsUrl}/api/inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "CMS submission failed");
    }

    return { success: true };
  } catch (error) {
    console.error("CMS submission failed:", error);
    return { success: false, error };
  }
}

/**
 * Main function → Submit to both Google Sheet & Your CMS
 */
export async function submitForm(data: SubmitFormData) {
  // Execute both in parallel for better performance
  const [sheetResponse, cmsResponse] = await Promise.all([
    submitToGoogleSheet(data),
    submitToCMS(data),
  ]);

  return {
    sheet: sheetResponse,
    cms: cmsResponse, // This replaces the firestore key
  };
}