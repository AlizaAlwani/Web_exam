"use server"

import { formSchema } from "@/components/Formtask"
import { prisma } from "@/lib/db"
import { z } from "zod"

export const CreateTask = async (values: z.infer<typeof formSchema> ) => {

    console.log(values)

    const createTask = await prisma.post.create({
        data: {
            task: values.username,
        }
    });
    console.log(CreateTask)

}