
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { register01Schema } from "./lib/zodSchemas";


export async function CreateUser01Page(prevState: unknown, formData: FormData) {

    const submmisssion01 = parseWithZod(formData, {
        schema: register01Schema,
    });

    if (submmisssion01.status !== "success"){
        return submmisssion01.reply();
    }

    redirect("/dashboard")
} 
