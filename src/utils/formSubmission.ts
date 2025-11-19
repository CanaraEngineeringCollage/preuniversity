// utils/formSubmission.ts

export interface SubmitFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  comments: string;
}

export async function submitToGoogleSheet(data: SubmitFormData) {
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
    console.error("Form submission failed:", error);
    return { success: false, error };
  }
}
