
"use client"; 


import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { register01Schema } from "./lib/zodSchemas";
import { register02AboutYouSchema } from "./lib/zodSchemas";



export async function CreateUser01Page(prevState: unknown, formData: FormData) {

    const submmisssion01 = parseWithZod(formData, {
        schema: register01Schema,
    });

    if (submmisssion01.status !== "success"){
        return submmisssion01.reply();
    }

    redirect("/about-you")
}



export async function CreateUser02AboutYou(prevState: unknown, formData: FormData) {

    const submmisssion02 = parseWithZod(formData, {
        schema: register02AboutYouSchema,
    });

    if (submmisssion02.status !== "success"){
        return submmisssion02.reply();
    }

    redirect("/income")
}



