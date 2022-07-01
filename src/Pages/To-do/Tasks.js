import React, { useEffect, useState } from 'react';
import Task from './Task';


const Tasks = () => {
    const [tasks,setTasks]= useState([]);

    useEffect(()=>{
        fetch('https://true-lumberjack-35330.herokuapp.com/task')
        .then(res => res.json())
        .then(data=> setTasks(data));
    },[])

    const handleAddToComplete = (selectedItem)=>{
        console.log(selectedItem);
    }
    return (

        <div>
            <h1 className='text-2xl font-bold text-center'>My To Do List</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols2=-2 lg:grid-cols-3 gap-10 px-12'>
            
            
           
            {
                tasks.map(task => <Task
                    key={task._id}
                    task={task}
            handleAddToComplete ={handleAddToComplete}>
                    </Task>)
            }
        </div>
        </div>
    );
};

export default Tasks;
