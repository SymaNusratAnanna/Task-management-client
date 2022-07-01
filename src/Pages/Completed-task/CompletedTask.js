import React, { useState } from 'react';
import CompleteTask from './CompleteTask';

const CompletedTask = () => {
    const [completeTask, setCompleteTask] = useState([]);

    const handleAddToComplete = (selectedItem) =>{
        const newcompleteTask = [...completeTask, selectedItem];
        setCompleteTask(newcompleteTask);
        // console.log(selectedItem);
    }
    return (
        <div>
            
           
          <CompleteTask completeTask={completeTask}></CompleteTask>
        </div>
    );
};

export default CompletedTask;