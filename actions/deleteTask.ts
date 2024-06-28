"use server";

import { prisma } from "@/lib/db";

export const DeleteTask = async (id:string) => {

   

    const deleteTask = await prisma.post.deleteMany({
       where: {
        id:id,
       }
    });
    console.log(DeleteTask)

}