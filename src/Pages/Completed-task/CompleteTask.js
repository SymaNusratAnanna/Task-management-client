import React from 'react';

const CompleteTask = ({completeTask,task}) => {
    return (
        <div>
            
            {
                completeTask.map(task=><p>{task.name}</p>)
            }
        </div>
    );
};

export default CompleteTask;