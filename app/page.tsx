"use client";
import Formtask from '@/components/Formtask'
import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { FaHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { UpdateTask } from '@/actions/updateTask';
import { DeleteTask } from '@/actions/deleteTask';
import Link from 'next/link';


const Page = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
   UpdateTask()
      .then((data:any) => {
        setData(data)
        
      })
  }, [data])

  const handleSubmit = useCallback((id:string) => {
    DeleteTask(id)
    
  }, []);

  return (
    <div className='h-screen '>
      <div className='flex items-center justify-center gap-x-24 mt-10'>
        <div className='border border-black w-[220px] h-[100px] rounded-md items-center justify-center flex flex-col bg-blue-200'>
          <div className='text-lg font-mono'>Total Task</div>
          <div className='text-6xl font-semibold font-mono'>04</div>
        </div>
        <div className='border border-black w-[220px] h-[100px] rounded-md items-center justify-center flex flex-col bg-green-200'>
          <div className='text-lg font-mono'>Completed</div>
          <div className='text-6xl font-semibold font-mono'>02</div>
        </div>
        <div className='border border-black w-[220px] h-[100px] rounded-md items-center justify-center flex flex-col bg-orange-200'>
          <div className='text-lg font-mono'>Pending</div>
          <div className='text-6xl font-semibold font-mono'>02</div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center mt-8'>
        <Formtask />
      </div>

      <div className='flex items-center justify-center flex-col   '>
        {
          data?.map((data:any, index:number) => {
            return (
              <Card key={index} className='flex items-center justify-between w-[850px] mt-8 flex-row  border border-black bg-slate-100' >
  <CardHeader>
    <CardDescription className='flex flex-row gap-x-96'>
      <div className='text-lg font-mono text-black '>{data.task}</div>
    </CardDescription>
  </CardHeader>
  
  <CardFooter>
  <Button className='bg-green-200 text-black text-center rounded-3xl gap-x-4 border border-black mt-6 w-[200px]'> <FaHeart className='text-red-600' />  Mark as completed</Button>
    <Button variant={'ghost'} className='mt-6' onClick={()=> handleSubmit(data.id)}><FaRegTrashAlt className='text-2xl text-red-600' /></Button>
  </CardFooter>
</Card>

            )
          })
          
}

      


      </div>
      <div className='flex items-center justify-center flex-col   '>
      <Card  className='flex items-center justify-between w-[850px] mt-8 flex-row  border border-black bg-slate-100' >
  <CardHeader>
    <CardDescription className='flex flex-row gap-x-96'>
      <div className='text-lg font-mono text-black font-light '>This task is not completed ...</div>
    </CardDescription>
  </CardHeader>
  
  <CardFooter>
  <Button className='bg-orange-200 text-black text-center rounded-3xl gap-x-4 border border-black mt-6 w-[200px]'> 😒 Mark as completed</Button>
    <Button variant={'ghost'} className='mt-6' onClick={()=> handleSubmit(data.id)}><FaRegTrashAlt className='text-2xl text-red-600' /></Button>
  </CardFooter>
</Card>
</div>
      

      <div className='flex items-center justify-center'>
      <div className='flex items-center justify-between w-[850px] mt-8'>
        <div>
          <Button variant={'outline'} className='border border-black text-lg w-[150px] h-[50px] flex items-center justify-center'> <Link href={'/previouspage'}>👈 Previous </Link></Button></div>
          <Button variant={'outline'} className='border border-black text-lg w-[150px] h-[50px] flex items-center justify-center' > <Link href={'/nextpage'}>Next 👉 </Link></Button></div>
      </div>
      </div>

    
  )
}

export default Page