import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  return (
    <div style={{ color: item.completed ? "green" : "red",fontSize:"30px",marginTop:"10px",fontWeight:"bold" }}>
      {item.task} - Assigned to: {item.taskAssignedTo}
      <button class="btn-1" onClick={onDelete}>Delete Task</button>
      <button  id="btn-2" onClick={onToggle}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;