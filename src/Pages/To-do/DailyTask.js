import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const DailyTask = () => {
    const { register, handleSubmit } = useForm();
const onSubmit = data => {
    console.log(data);
    const url = `https://true-lumberjack-35330.herokuapp.com/task`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)

    })
    .then(res=> res.json())
    .then(result =>{
      console.log(result);
    })
    
}

      return (
        <div className='w-80 mx-auto  text-black'>
            <h2 className='text-3xl font-bold' >Daily Task</h2>
            <form className=' flex flex-col py-10 '  onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2'placeholder='Task-Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2'placeholder='Task-Description' {...register("description")} />
      
      
      
      <input type="submit" className="btn btn-active"  value="Add Task"    />
    </form>
        </div>
        
      );
            };
    



export default DailyTask;