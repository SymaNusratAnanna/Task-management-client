import React, { useState } from 'react';
import CompleteTask from './CompleteTask';

const CompletedTask = () => {
    const [completeTask, setCompleteTask,] = useState([]);

    const handleAddToComplete = (selectedItem) =>{
        const newcompleteTask = [...completeTask, selectedItem];
        setCompleteTask(newcompleteTask);
        console.log(selectedItem);
    }
    return (
        <div>
            <h2>complete</h2>
         {
          <CompleteTask completeTask={completeTask}
          handleAddToComplete ={handleAddToComplete}
          ></CompleteTask>
         }
        </div>
    );
};

export default CompletedTask;