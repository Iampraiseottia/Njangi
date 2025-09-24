import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { register01Schema } from "./lib/zodSchemas";

export async function CreateUser01Page(prevState: unknown, formData: FormData) {
  const submission01 = parseWithZod(formData, {
    schema: register01Schema,
  });

  if (submission01.status !== "success") {
    return submission01.reply();
  }

  // Extract email from the submission data
  const email = submission01.value.email;

  redirect(`/verify-email?email=${encodeURIComponent(email)}`);
}
