"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreateTask } from '@/actions/createStudent'
import { FaPlus } from "react-icons/fa";


export const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })


const Formtask = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        CreateTask(values)
      }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row items-center justify-center gap-x-2">
        <FormField 
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem >
             
              <FormControl className='w-[685px]  border border-black'>
                <Input placeholder="Enter task here .. " {...field}/>
              </FormControl>
            
            </FormItem>
          )}
        />
        <div className='mx-2'>
        <Button type="submit" className='w-[150px]'>Add Task  <FaPlus className='text-purple-600 text-3xl pl-2'/>  </Button>
        </div>
      </form>
    </Form>
  )
}

export default Formtask