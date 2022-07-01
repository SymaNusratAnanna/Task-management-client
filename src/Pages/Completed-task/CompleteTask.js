import React from 'react';

const CompleteTask = ({completeTask}) => {
    return (
        <div>
            <h2>item :{completeTask.length}</h2>
            {
                completeTask.map(task=><p>{task.name}
                </p>)
            }
        </div>
    );
};

export default CompleteTask;