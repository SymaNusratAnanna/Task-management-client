import React from 'react';

const Task = ({task,handleAddToComplete}) => {

  const {name, description} = task;
  
  
  return (
    <div>
      
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
    <h2 ><span class="text-xl font-bold text-primary">Task-Name:</span>{name}</h2>
    <p><span class="text-xl font-bold text-primary">Task-Description:</span> {description}</p>
    <div class="card-actions justify-end">
    <div class="form-control">
 
</div>
<h2 className=' font-bold'>Completed-Task</h2>
<script>
  document.getElementById("my-checkbox").indeterminate = true
</script>
<input type="checkbox" class="checkbox" id="my-checkbox" onClick={()=>handleAddToComplete(task)} />
    </div>
  </div>
</div>
    </div>
  );
};

export default Task;